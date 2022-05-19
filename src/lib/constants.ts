import { SorConfig } from '../../src';

export interface TestToken {
    address: string;
    decimals: number;
}

export const sorConfigTest = {
    chainId: 99,
    weth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    vault: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    usdcConnectingPool: {
        id: 'usdcConnecting',
        usdc: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
    },
    staBal3Pool: {
        id: 'staBal3Id',
        address: '0x06df3b2bbb68adc8b0e302443692037ed9f91b42',
    },
    wethStaBal3: {
        id: 'weightedWethStaBal3Id',
        address: 'weightedWethStaBal3',
    },
};

export const sorConfigEth: SorConfig = {
    chainId: 1,
    weth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    vault: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    staBal3Pool: {
        id: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe',
        address: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb2',
    },
};

export const sorConfigKovan: SorConfig = {
    chainId: 42,
    weth: '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
    vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    staBal3Pool: {
        id: '0x8fd162f338b770f7e879030830cde9173367f3010000000000000000000004d8',
        address: '0x8fd162f338b770f7e879030830cde9173367f301',
    },
    wethStaBal3: {
        id: '0x6be79a54f119dbf9e8ebd9ded8c5bd49205bc62d00020000000000000000033c',
        address: '0x6be79a54f119dbf9e8ebd9ded8c5bd49205bc62d',
    },
};

export const WETH: TestToken = {
    address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'.toLowerCase(),
    decimals: 18,
};
export const DAI: TestToken = {
    address: '0x6B175474E89094C44Da98b954EedeAC495271d0F'.toLowerCase(),
    decimals: 18,
};
export const aDAI: TestToken = {
    address: '0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d',
    decimals: 18,
};
export const USDC: TestToken = {
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'.toLowerCase(),
    decimals: 6,
};
export const bUSDC: TestToken = {
    address: '0x0000000000000000000000000000000000000001',
    decimals: 18,
};
export const BAL: TestToken = {
    address: '0xba100000625a3754423978a60c9317c58a424e3D'.toLowerCase(),
    decimals: 18,
};
export const bDAI: TestToken = {
    address: '0x0000000000000000000000000000000000000002',
    decimals: 18,
};
export const staBAL3: TestToken = {
    address: '0x06df3b2bbb68adc8b0e302443692037ed9f91b42',
    decimals: 18,
};

export const WBTC: TestToken = {
    address: '0xe0C9275E44Ea80eF17579d33c55136b7DA269aEb'.toLowerCase(),
    decimals: 8,
};

export const MKR: TestToken = {
    address: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2'.toLowerCase(),
    decimals: 18,
};

export const USDT: TestToken = {
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7'.toLowerCase(),
    decimals: 6,
};

export const GUSD: TestToken = {
    address: '0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd'.toLowerCase(),
    decimals: 2,
};

export const TUSD: TestToken = {
    address: '0x0000000000085d4780b73119b644ae5ecd22b376'.toLowerCase(),
    decimals: 18,
};

export const bTUSD: TestToken = {
    address: '0x0000000000000000000000000000000000000005'.toLowerCase(),
    decimals: 18,
};

export const stETH: TestToken = {
    address: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'.toLowerCase(),
    decimals: 18,
};

export const LINEAR_AUSDT: TestToken = {
    address: '0x6a8c3239695613c0710dc971310b36f9b81e115e',
    decimals: 18,
};

export const LINEAR_AUSDC: TestToken = {
    address: '0x3d1b554f1b1d1b6108b601ff22fea9c90fdfe50d',
    decimals: 18,
};

export const LINEAR_ADAI: TestToken = {
    address: '0xcd32a460b6fecd053582e43b07ed6e2c04e15369',
    decimals: 18,
};

export const STABAL3PHANTOM: TestToken = {
    address: '0x8fd162f338b770f7e879030830cde9173367f301',
    decimals: 18,
};

export const aUSDT: TestToken = {
    address: '0xe8191aacfcdb32260cda25830dc6c9342142f310',
    decimals: 6,
};

export const KOVAN_BAL: TestToken = {
    address: '0x41286Bb1D3E870f3F750eB7E1C25d7E48c8A1Ac7',
    decimals: 18,
};

export const AAVE_USDT: TestToken = {
    address: '0x13512979ade267ab5100878e2e0f485b568328a4',
    decimals: 6,
};

import { AddressZero } from '@ethersproject/constants';

export enum Network {
    MAINNET = 1,
    GOERLI = 5,
    KOVAN = 42,
    POLYGON = 137,
    ARBITRUM = 42161,
}

export const MULTIADDR: { [chainId: number]: string } = {
    1: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    3: '0x53c43764255c17bd724f74c4ef150724ac50a3ed',
    4: '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821',
    5: '0x3b2A02F22fCbc872AF77674ceD303eb269a46ce3',
    42: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
    137: '0xa1B2b503959aedD81512C37e9dce48164ec6a94d',
    42161: '0x269ff446d9892c9e19082564df3f5e8741e190a1',
    99: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
};

export const SUBGRAPH_URLS = {
    [Network.MAINNET]:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2',
    [Network.GOERLI]:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-goerli-v2',
    [Network.KOVAN]:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-kovan-v2',
    [Network.POLYGON]:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-polygon-v2',
    [Network.ARBITRUM]: `https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-arbitrum-v2`,
};

export const ADDRESSES = {
    [Network.MAINNET]: {
        BatchRelayer: {
            address: '0xdcdbf71A870cc60C6F9B621E28a7D3Ffd6Dd4965',
        },
        ETH: {
            address: AddressZero,
            decimals: 18,
            symbol: 'ETH',
        },
        BAL: {
            address: '0xba100000625a3754423978a60c9317c58a424e3d',
            decimals: 18,
            symbol: 'BAL',
        },
        USDC: {
            address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            decimals: 6,
            symbol: 'USDC',
        },
        WBTC: {
            address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
            decimals: 8,
            symbol: 'WBTC',
        },
        WETH: {
            address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            decimals: 18,
            symbol: 'WETH',
        },
        DAI: {
            address: '0x6b175474e89094c44da98b954eedeac495271d0f',
            decimals: 18,
            symbol: 'DAI',
        },
        STETH: {
            address: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
            decimals: 18,
            symbol: 'STETH',
        },
        wSTETH: {
            address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
            decimals: 18,
            symbol: 'wSTETH',
        },
        bbausd: {
            address: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb2',
            decimals: 18,
            symbol: 'bbausd',
        },
        bbausdc: {
            address: '0x9210F1204b5a24742Eba12f710636D76240dF3d0',
            decimals: 18,
            symbol: 'bbausdc',
        },
        waDAI: {
            address: '0x02d60b84491589974263d922d9cc7a3152618ef6',
            decimals: 18,
            symbol: 'waDAI',
        },
        waUSDC: {
            address: '0xd093fa4fb80d09bb30817fdcd442d4d02ed3e5de',
            decimals: 6,
            symbol: 'waUSDC',
        },
        wPE: {
            address: '0xd075e95423c5c4ba1e122cae0f4cdfa19b82881b',
            decimals: 18,
            symbol: 'wPE',
        },
        YFU: {
            address: '0xa279dab6ec190eE4Efce7Da72896EB58AD533262',
            decimals: 18,
            symbol: 'YFU',
        },
        AAVE: {
            address: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
            decimals: 18,
            symbol: 'AAVE',
        },
    },
    // [Network.KOVAN]: {
    //   // Visit https://balancer-faucet.on.fleek.co/#/faucet for test tokens
    //   BatchRelayer: {
    //     address: '0x41B953164995c11C81DA73D212ED8Af25741b7Ac',
    //   },
    //   ETH: {
    //     address: AddressZero,
    //     decimals: 18,
    //     symbol: 'ETH',
    //   },
    //   BAL: {
    //     address: '0x41286Bb1D3E870f3F750eB7E1C25d7E48c8A1Ac7',
    //     decimals: 18,
    //     symbol: 'BAL',
    //   },
    //   USDC: {
    //     address: '0xc2569dd7d0fd715B054fBf16E75B001E5c0C1115',
    //     decimals: 6,
    //     symbol: 'USDC',
    //   },
    //   WBTC: {
    //     address: '0x1C8E3Bcb3378a443CC591f154c5CE0EBb4dA9648',
    //     decimals: 8,
    //     symbol: 'WBTC',
    //   },
    //   WETH: {
    //     address: '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
    //     decimals: 18,
    //     symbol: 'WETH',
    //   },
    //   DAI: {
    //     address: '0x04DF6e4121c27713ED22341E7c7Df330F56f289B',
    //     decimals: 18,
    //     symbol: 'DAI',
    //   },
    //   STETH: {
    //     address: '0x4803bb90d18a1cb7a2187344fe4feb0e07878d05',
    //     decimals: 18,
    //     symbol: 'STETH',
    //   },
    //   wSTETH: {
    //     address: '0xa387b91e393cfb9356a460370842bc8dbb2f29af',
    //     decimals: 18,
    //     symbol: 'wSTETH',
    //   },
    //   USDT_from_AAVE: {
    //     address: '0x13512979ade267ab5100878e2e0f485b568328a4',
    //     decimals: 6,
    //     symbol: 'USDT_from_AAVE',
    //   },
    //   aUSDT: {
    //     address: '0xe8191aacfcdb32260cda25830dc6c9342142f310',
    //     decimals: 6,
    //     symbol: 'aUSDT',
    //   },
    //   bUSDT: {
    //     address: '0xe667d48618e71c2a02e4a1b66ed9def1426938b6',
    //     decimals: 18,
    //     symbol: 'bUSDT',
    //   },
    //   USDC_from_AAVE: {
    //     address: '0xe22da380ee6b445bb8273c81944adeb6e8450422',
    //     decimals: 6,
    //     symbol: 'USDC_from_AAVE',
    //   },
    //   aUSDC: {
    //     address: '0x0fbddc06a4720408a2f5eb78e62bc31ac6e2a3c4',
    //     decimals: 6,
    //     symbol: 'aUSDC',
    //   },
    //   DAI_from_AAVE: {
    //     address: '0xff795577d9ac8bd7d90ee22b6c1703490b6512fd',
    //     decimals: 18,
    //     symbol: 'DAI_from_AAVE',
    //   },
    //   bDAI: {
    //     address: '0xfcccb77a946b6a3bd59d149f083b5bfbb8004d6d',
    //     decimals: 18,
    //     symbol: 'bDAI',
    //   },
    //   STABAL3: {
    //     address: '0x8fd162f338b770f7e879030830cde9173367f301',
    //     decimals: 18,
    //     symbol: 'STABAL3',
    //   },
    // },
    // [Network.POLYGON]: {
    //   MATIC: {
    //     address: AddressZero,
    //     decimals: 18,
    //     symbol: 'MATIC',
    //   },
    //   BAL: {
    //     address: '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3',
    //     decimals: 18,
    //     symbol: 'BAL',
    //   },
    //   USDC: {
    //     address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
    //     decimals: 6,
    //     symbol: 'USDC',
    //   },
    //   WBTC: {
    //     address: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
    //     decimals: 8,
    //     symbol: 'WBTC',
    //   },
    //   WETH: {
    //     address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    //     decimals: 18,
    //     symbol: 'WETH',
    //   },
    //   DAI: {
    //     address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
    //     decimals: 18,
    //     symbol: 'DAI',
    //   },
    // },
    // [Network.ARBITRUM]: {
    //   WETH: {
    //     address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    //     decimals: 18,
    //     symbol: 'WETH',
    //   },
    //   BAL: {
    //     address: '0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8',
    //     decimals: 18,
    //     symbol: 'BAL',
    //   },
    //   USDC: {
    //     address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
    //     decimals: 6,
    //     symbol: 'USDC',
    //   },
    //   STETH: {
    //     address: 'N/A',
    //     decimals: 18,
    //     symbol: 'STETH',
    //   },
    // },
};
