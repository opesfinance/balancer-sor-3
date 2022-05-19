import {
    BigNumber,
    BigNumberish,
    formatFixed,
    parseFixed,
} from '@ethersproject/bignumber';
import { JsonRpcProvider } from '@ethersproject/providers';
import dotenv from 'dotenv';

import {
    PoolDataService,
    SOR,
    SorConfig,
    SwapInfo,
    SwapTypes,
    TokenPriceService,
    CoingeckoTokenPriceService,
    MoralisTokenPriceService,
    SubgraphPoolDataService,
    ADDRESSES,
    MULTIADDR,
    SUBGRAPH_URLS,
} from '../../dist';

// import {
//   PoolDataService,
//   // SOR,
//   SorConfig,
//   SwapInfo,
//   SwapTypes,
//   TokenPriceService
// } from '../../src';

// import { CoingeckoTokenPriceService } from '../lib/coingeckoTokenPriceService';
// import { MoralisTokenPriceService } from '../lib/moralisTokenPriceService';
// import { SubgraphPoolDataService } from '../lib/subgraphPoolDataService';

// import {  } from './constants';

dotenv.config();

enum Network {
    MAINNET = 1,
    GOERLI = 5,
    KOVAN = 42,
    POLYGON = 137,
    ARBITRUM = 42161,
}

const SOR_CONFIG: Record<Network, SorConfig> = {
    [Network.MAINNET]: {
        chainId: Network.MAINNET, //1
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        weth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        staBal3Pool: {
            id: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe',
            address: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb2',
        },
    },
    [Network.KOVAN]: {
        chainId: Network.KOVAN, //42
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        weth: '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
        staBal3Pool: {
            id: '0x8fd162f338b770f7e879030830cde9173367f3010000000000000000000004d8',
            address: '0x8fd162f338b770f7e879030830cde9173367f301',
        },
        wethStaBal3: {
            id: '0x6be79a54f119dbf9e8ebd9ded8c5bd49205bc62d00020000000000000000033c',
            address: '0x6be79a54f119dbf9e8ebd9ded8c5bd49205bc62d',
        },
    },
    [Network.GOERLI]: {
        chainId: Network.GOERLI, //5
        vault: '0x65748E8287Ce4B9E6D83EE853431958851550311',
        weth: '0x9A1000D492d40bfccbc03f413A48F5B6516Ec0Fd',
    },
    [Network.POLYGON]: {
        chainId: Network.POLYGON, //137
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        weth: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    [Network.ARBITRUM]: {
        chainId: Network.ARBITRUM, //42161
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        weth: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    },
};

const PROVIDER_URLS = {
    [Network.MAINNET]: `https://mainnet.infura.io/v3/${process.env.INFURA}`,
    [Network.GOERLI]: `https://goerli.infura.io/v3/${process.env.INFURA}`,
    [Network.KOVAN]: `https://kovan.infura.io/v3/${process.env.INFURA}`,
    [Network.POLYGON]: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA}`,
    [Network.ARBITRUM]: `https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA}`,
};

// This is the same across networks
const vaultAddr = '0xBA12222222228d8Ba445958a75a0704d566BF2C8';

async function getSwap(
    provider: JsonRpcProvider,
    config: SorConfig,
    poolDataService: PoolDataService,
    tokenPriceService: TokenPriceService,
    tokenIn: { symbol: string; address: string; decimals: number },
    tokenOut: { symbol: string; address: string; decimals: number },
    swapType: SwapTypes,
    swapAmount: BigNumberish
): Promise<SwapInfo> {
    // console.log('provider, config, poolDataService, tokenPriceService', provider, config, poolDataService, tokenPriceService);

    const sor = new SOR(provider, config, poolDataService, tokenPriceService);

    await sor.fetchPools();

    // const pools = sor.getPools()
    // console.log('[pools from sor]', pools);

    // gasPrice is used by SOR as a factor to determine how many pools to swap against.
    // i.e. higher cost means more costly to trade against lots of different pools.
    const gasPrice = BigNumber.from('40000000000');
    // This determines the max no of pools the SOR will use to swap.
    const maxPools = 4;

    // This calculates the cost to make a swap which is used as an input to sor to allow it to make gas efficient recommendations.
    // Note - tokenOut for SwapExactIn, tokenIn for SwapExactOut
    const outputToken =
        swapType === SwapTypes.SwapExactOut ? tokenIn : tokenOut;
    const cost = await sor.getCostOfSwapInToken(
        outputToken.address,
        outputToken.decimals,
        gasPrice,
        BigNumber.from('35000')
    );
    const swapInfo: SwapInfo = await sor.getSwaps(
        tokenIn.address,
        tokenOut.address,
        swapType,
        swapAmount,
        { gasPrice, maxPools }
    );

    const amtInScaled =
        swapType === SwapTypes.SwapExactIn
            ? formatFixed(swapAmount, tokenIn.decimals)
            : formatFixed(swapInfo.returnAmount, tokenIn.decimals);

    const amtOutScaled =
        swapType === SwapTypes.SwapExactIn
            ? formatFixed(swapInfo.returnAmount, tokenOut.decimals)
            : formatFixed(swapAmount, tokenOut.decimals);

    const returnDecimals =
        swapType === SwapTypes.SwapExactIn
            ? tokenOut.decimals
            : tokenIn.decimals;

    const returnWithFeesScaled = formatFixed(
        swapInfo.returnAmountConsideringFees,
        returnDecimals
    );

    const costToSwapScaled = formatFixed(cost, returnDecimals);

    const swapTypeStr =
        swapType === SwapTypes.SwapExactIn ? 'SwapExactIn' : 'SwapExactOut';
    console.log('swapTypeStr', swapTypeStr);
    console.log(`Token In: ${tokenIn.symbol}, Amt: ${amtInScaled.toString()}`);
    console.log(
        `Token Out: ${tokenOut.symbol}, Amt: ${amtOutScaled.toString()}`
    );
    console.log(`Cost to swap: ${costToSwapScaled.toString()}`);
    console.log(`Return Considering Fees: ${returnWithFeesScaled.toString()}`);
    console.log(`Swaps:`);
    console.log(swapInfo.swaps);
    console.log(swapInfo.tokenAddresses);

    return swapInfo;
}

export async function simpleSwap(): Promise<void> {
    const networkId = Network.MAINNET;
    // Pools source can be Subgraph URL or pools data set passed directly
    // Update pools list with most recent onchain balances
    const tokenIn = ADDRESSES[networkId].WETH;
    const tokenOut = ADDRESSES[networkId].YFU;
    const swapType = SwapTypes.SwapExactIn;
    const swapAmount = parseFixed('.1', 18);

    const provider = new JsonRpcProvider(PROVIDER_URLS[networkId]);

    // This can be useful for debug
    // Fetch & print list of pools from Subgraph
    // let subgraphPools = await fetchSubgraphPools(SUBGRAPH_URLS[networkId]);
    // console.log(`-------`)
    // console.log(JSON.stringify(subgraphPools));
    // console.log(`-------`);

    const subgraphPoolDataService = new SubgraphPoolDataService({
        chainId: networkId,
        vaultAddress: vaultAddr,
        multiAddress: MULTIADDR[networkId],
        provider,
        subgraphUrl: SUBGRAPH_URLS[networkId],
        onchain: true,
    });

    // const pools = await subgraphPoolDataService.getPools();
    // console.log('pools', JSON.stringify(pools, null, 2));

    // Use the mock pool data service if you want to use pool data from a file.
    // const poolsSource = require('../testData/testPools/gusdBug.json');
    // mockPoolDataService.setPools(poolsSource);

    const moralisTokenPriceService = new MoralisTokenPriceService(networkId);
    const coingeckoTokenPriceService = new CoingeckoTokenPriceService(
        networkId
    );

    // Use the mock token price service if you want to manually set the token price in native asset
    //  mockTokenPriceService.setTokenPrice('0.001');

    const swapInfo = await getSwap(
        provider,
        SOR_CONFIG[networkId],
        subgraphPoolDataService,
        // mockPoolDataService,
        moralisTokenPriceService,
        // mockTokenPriceService,
        tokenIn,
        tokenOut,
        swapType,
        swapAmount
    );
}

// $ TS_NODE_PROJECT='tsconfig.testing.json' ts-node ./test/testScripts/swapExample.ts
simpleSwap();
