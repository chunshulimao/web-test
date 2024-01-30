export default {
    menu:[
        {
            img: require("../img/menu/menu1w.png"),
            imged: require("../img/menu/menu1ed.png"),
            name: "Swap",
            url: "/home",
        },
        {
            img: require("../img/menu/menu2w.png"),
            imged: require("../img/menu/menu2ed.png"),
            name: "Liquidity",
            url: "/liquidity",

        },
        {
            img: require("../img/menu/menu3w.png"),
            imged: require("../img/menu/menu3ed.png"),
            name: "Pools",
            url: "/pools",

        },
        {
            img: require("../img/menu/menu4w.png"),
            imged: require("../img/menu/menu4ed.png"),
            name: "Farms",
            url: "/farms",
        },
        {
            img: require("../img/menu/menu5w.png"),
            imged: require("../img/menu/menu5ed.png"),
            name: "Staking",
            url: "/staking",

        },
        {
            img: require("../img/menu/bridge.png"),
            imged: require("../img/menu/bridged.png"),
            name: "Bridge",
            url: "/bridge",
        },
        {
            img: require("../img/menu/menu6w.png"),
            imged: require("../img/menu/menu6ed.png"),
            name: "LaunchDAO",
            url: "/daoList",

        },
        {
            img: require("../img/menu/menu7w.png"),
            imged: require("../img/menu/menu7ed.png"),
            name: "Airdrop",
            url: "/airdrop",
        },
        {
            img: require("../img/menu/menu8w.png"),
            imged: require("../img/menu/menu8ed.png"),
            name: "NFTs",

        },
        {
            img: require("../img/menu/menu9w.png"),
            imged: require("../img/menu/menu9ed.png"),
            name: "Vote",

        },
        {
            img: require("../img/menu/menu10w.png"),
            imged: require("../img/menu/menu10ed.png"),
            name: "Games",

        },
        {
            img: require("../img/menu/menu11w.png"),
            imged: require("../img/menu/menu11ed.png"),
            name: "Stats",

        },
        {
            img: require("../img/menu/menu12w.png"),
            imged: require("../img/menu/menu12ed.png"),
            name: "Knowledge",
        },
        {
            img: require("../img/menu/menu13w.png"),
            imged: require("../img/menu/menu13ed.png"),
            name: "Invite",
            url: "/invite",
        },
        {
            img: require("../img/menu/icon_news.png"),
            imged: require("../img/menu/icon_news2.png"),
            name: "Message",
            url: "/message",
        },
        {
            img: require("../img/menu/menu14w.png"),
            imged: require("../img/menu/menu14ed.png"),
            name: "More",
        },
    ],
    project: {
        network: {
            bsc: {
                name:"bsc",
                chainId: "0x61", // A 0x-prefixed hexadecimal string
                chainName: "Binance Smart Chain Testnet",
                nativeCurrency: {
                    name: "bsc",
                    symbol: "tBNB", // 2-6 characters long
                    decimals: 18,
                },
                rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
                blockExplorerUrls: ["https://testnet.bscscan.com/"],
                tokenAddress: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
                router: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
                factory:"0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
            },
             ethereum: {
                name: "ethereum",
                chainId: "0x1",
                // router:"0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",//v3
                router:"0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
                factory:"0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
            }
        },
        //https://api.paraswap.io/adapters/contracts?network=56获得
        paraswap: {
            AugustusSwapper: "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
            TokenTransferProxy: "0x216b4b4ba9f3e719726886d34a177484278bfcae",
            partnerAddress: "0xC18cD8E6463f7Db3e604eB0D246907A5e81fDbcF",
            partnerFeeBps: 10
        },
        did: {
            bsc:"0x2fa49abA5AFB2d542683C4c9bC5BB227fCdB2E96",
            //rootID: "0x8baf45f17e5a"
        },
        airdrop: {
            ethereum: [],
            bsc: [
                {
                    ruler: "airdropruler360",
                    contractType: "airdropWithStake",
                    icon: "/img/coin/MT.png",
                    coin: "MT",
                    contractAddress: "0x5973cc8A997154673D8E873caA6936A38A607C04",
                    status: "ongoing",
                    logoUrl: "img/coin/MT.png",
                    projectName:"airdrop360",
                },
               {
                   ruler: "aridroprouler",
                    contractType: "airdropWithStake",
                    icon: "/img/coin/apk.png",
                    coin: "APK",
                    contractAddress: "0x56996979d005c242D62bc8a6CCA1f82060b50127",
                    status: "ongoing",
                    logoUrl: "img/airdrop/apk.png",
                    projectName: "airdrop",
                    desc:"launcharidrop1"
                },{
                    ruler: "stakingairdropruler3",
                    contractType: "airdropWithStake",
                    icon:"/img/coin/apk.png",
                    coin: "APK",
                    contractAddress: "0xe0370e59b12d1502aC7bfC727f8730cB642c2Bce",
                    status: "ongoing",
                    logoUrl: "img/airdrop/apk.png",
                    projectName: "launchairroplock",
                    desc:"launcharidrop3"
                },
                {
                    ruler: "stakingairdropruler4",
                    contractType: "airdropWithStake",
                    icon:"/img/coin/apk.png",
                    coin: "APK",
                    contractAddress: "0xB38f0e46Ec98B3e5eE1d269272Bf2bE64b5e74F2",
                    status: "ongoing",
                    logoUrl: "img/airdrop/apk.png",
                    projectName: "launchairropunlock",
                    desc:"launcharidrop4"
                },{
                    ruler: "stakingairdropruler3",
                    contractType: "airdropWithStake",
                    icon:"/img/coin/apk.png",
                    coin: "APK",
                    contractAddress: "0x8e5e6E13fC6d135f70Bd97a3b3738e33fC7D16bf",
                    status: "ongoing",
                    logoUrl: "img/airdrop/apk.png",
                    projectName: "launchairroplock",
                    desc:"launcharidrop3"
                }
            ]
        },
        dao: {
            bsc: [
                {
                    projectName: "spf",
                    symbol: "SPF",
                    symbol1: "CAKE",
                    bg: "/img/dao/apekbanner.png",
                    icon: require("../img/spf.png"),
                    lock: [
                        {
                            lockDay: 100,
                            invest: '0xFcd65506A39B93134716742FD72435B764C66D86',
                            buyback: '0x6faE7e6d885dbD74a520344182a27850EBdEEEf7',
                            investData: {}, buybackData: {}
                        },
                        /* {
                             lockDay: 365,
                             invest: '0xaC817463EB43fE6fFb780191d40b01D961c4BcdA',
                             buyback: '0x30b70DD0075cf02803DffC15f261fb58584E6c5a',
                             investData: {}, buybackData: {}
                         },*/
                    ],
                    quantic: {
                        address: '0x05De23f0dcf3D8dd0c3298D22e7a060234d9e349',
                        usdt:"0x55d398326f99059fF775485246999027B3197955",

                        token: {
                            WBNB:["0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c","0x55d398326f99059fF775485246999027B3197955"],
                            APK: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E","0xFcF05cef3912dBEa1a5007D5b4Ba7D07EA3aDF0e","0x55d398326f99059fF775485246999027B3197955"],
                            CAKE: ["0xFcF05cef3912dBEa1a5007D5b4Ba7D07EA3aDF0e","0x55d398326f99059fF775485246999027B3197955"],
                            SPF:["0x0CAfc906975569daF552e0eE2CFf4fedeD81a1e7","0x55d398326f99059fF775485246999027B3197955"]

                        }
                    },
                }
            ]

        },
        staking: {
            bsc: [
                {
                    contractType: "PoolingBond",
                    contractAddress: "0x4c44225b74249BAe5683F4C057eE674922775Cf6",
                    stake: "APK",
                    stakeIcon: "/img/coin/apk.png",
                    earn: "VAPK",
                    earnIcon: "/img/coin/apk.png",
                    basePath: "0x55d398326f99059ff775485246999027b3197955"//用于计算价格
                }
            ]
        },
        pools: {
            //0 MiningWithToken/PoolingWithToken  1 MiningWithTokenLPBeefy 2 MiningWithTokenLPDog
            //3 NewMiningWithToken
            bsc: [
                {
                    contractType: "NewMiningWithToken",
                    contractAddress: "0xFB9aa2B81655A44F7e4308118d8ed78d25aAE386",
                    stake: "CAKE",
                    stakeDecimals:18,
                    stakeIcon: "/img/coin/CAKE.png",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",

                    projectName:"Vault1",
                    basePath:"0x55d398326f99059fF775485246999027B3197955"
                },
                {
                    contractType: "MiningWithCakeFixedTerm",
                    contractAddress: "0xbE14fA376f9aE353bBeEf40C7F3B326d5B344d6F",
                    stake: "CAKE",
                    stakeDecimals:18,
                    stakeIcon: "/img/coin/CAKE.png",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",

                    projectName:"flexible",
                    basePath:"0x55d398326f99059fF775485246999027B3197955"
                },
                {
                    contractType: "NewMiningWithToken",
                    contractAddress: "0xE72f5B9a41eC39c812BC9bbCB9e9005C64Ba80d5",
                    stake: "CAKE",
                    stakeDecimals:18,
                    stakeIcon: "/img/coin/CAKE.png",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",

                    projectName:"Vault1",
                    basePath:"0x55d398326f99059fF775485246999027B3197955"
                }

            ]
        },
        farms: {
            //type 0 PoolingWithToken 1 MiningWithTokenLPBeefy 2 MiningWithTokenLPDog
            bsc: [
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0xa2531133BC8593cc22Fd6C4e56EC9C842039c5ae",
                    stake: "CAKE-USDT",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/CAKE.png","/img/coin/usdt.png"],
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    basePath: "0x55d398326f99059ff775485246999027b3197955",//usdt
                },
                {
                    contractType: "MiningWithTokenV2",
                    contractAddress: "0x68BBd182DfF4E7B73f5fDA3eB563b63be3da3B0B",
                    stake: "CAKE-USDT",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/CAKE.png","/img/coin/usdt.png"],
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    basePath: "0x55d398326f99059ff775485246999027b3197955",//usdt
                },
            ]
        },
        bridge: {
            "Ethereum_BSC": {
                Ethereum: "0x62E04f937C3F8Cfd662047fDD6dCaFE8a502A054",
                BSC: "0x62E04f937C3F8Cfd662047fDD6dCaFE8a502A054",

            },
            "Ethereum_Heco": {
                Ethereum: "0x62E04f937C3F8Cfd662047fDD6dCaFE8a502A054",
                Heco: "0xD45753Ee217beb1f336Fd60352a2F4A04Db364f2",

            },
            "Heco_BSC": {
                Heco: "0x62E04f937C3F8Cfd662047fDD6dCaFE8a502A054",
                BSC: "0x62E04f937C3F8Cfd662047fDD6dCaFE8a502A054",
            }
        },
        message:{
            bsc:[
                {
                    coin:"MT",
                    icon: "/img/coin/MT.png",
                },
                {
                    coin:"APK",
                    icon: "/img/coin/apk.png",
                }
            ]
        },
    }
};
