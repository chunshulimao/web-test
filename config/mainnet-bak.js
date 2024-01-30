export default {
    menu: [
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
            img: require("../img/menu/icon_no governance.png"),
            imged: require("../img/menu/icon_governance.png"),
            name: "Governance",
            url: "/governance",
        },
        {
            img: require("../img/menu/menu8w.png"),
            imged: require("../img/menu/menu8ed.png"),
            name: "NFTs",
            status: "commingSoon",
        },
        {
            img: require("../img/menu/menu10w.png"),
            imged: require("../img/menu/menu10ed.png"),
            name: "Games",
            status: "commingSoon",
        },
        {
            img: require("../img/menu/menu11w.png"),
            imged: require("../img/menu/menu11ed.png"),
            name: "Stats",
            status: "commingSoon",
        },
        {
            img: require("../img/menu/menu12w.png"),
            imged: require("../img/menu/menu12ed.png"),
            name: "Knowledge",
            status: "commingSoon",
        }
    ],
    project: {
        network: {
            // tokenAddress wbnb
            bsc: {
                name: "bsc",
                chainId: "0x38", // A 0x-prefixed hexadecimal string
                chainName: "Binance Smart Chain Mainnet",
                nativeCurrency: {
                    name: "bsc",
                    symbol: "BNB", // 2-6 characters long
                    decimals: 18,
                },
                rpcUrls: ["https://bscscan.com/"],
                blockExplorerUrls: ["https://bscscan.com/"],
                tokenAddress: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
                router: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
                factory: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
            },
            ethereum: {
                name: "ethereum",
                chainId: "0x1",
                // router:"0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",//v3
                router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
                factory: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
                tokenAddress:"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
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
            bsc: "0x2fa49abA5AFB2d542683C4c9bC5BB227fCdB2E96",
            //rootID: "0x8baf45f17e5a"
        },
        airdrop: {
            ethereum: [],
            bsc: [
                {
                    projectName: "launcharidrop",
                    contractType: "AirdropFast",
                    icon: "/img/coin/MT.png",
                    coin: "MT",
                    contractAddress: "0xcD22ee77cAce9ec5e4Bc9d42b2876Da475502d93",
                    status: "ongoing",
                    logoUrl: "img/coin/MT.png",
                    hidden: true,
                },
                {
                    projectName: "launcharidrop",
                    contractType: "AirdropV2",
                    icon: "/img/coin/MT.png",
                    coin: "MT",
                    contractAddress: "0xAbfc2e8A740040F7620171f71B8B545ADE8591A6",
                    status: "ongoing",
                    logoUrl: "img/coin/MT.png",

                },
                {
                    projectName: "launcharidrop",
                    contractType: "AirdropV2",
                    icon: "/img/coin/MT.png",
                    coin: "MT",
                    contractAddress: "0x7497825B189009dAB74e022DAF5d3F0Cc19098a8",
                    status: "ongoing",
                    logoUrl: "img/coin/MT.png",

                },
                {
                    projectName: "launcharidrop",
                    contractType: "airdropWithStake",
                    icon: "/img/coin/apk.png",
                    coin: "APK",
                    contractAddress: "0x8E8575e81cFF331e5d571bfBc2641368DeC2A62C",
                    status: "ongoing",
                    logoUrl: "img/airdrop/apk.png",
                },
                {
                    projectName: "launcharidrop2",
                    contractType: "airdropWithStake",
                    icon: "/img/coin/apk.png",
                    coin: "APK",
                    contractAddress: "0xe85BE5a188cBCFb3E4Db8e5d97f77189fD46214c",
                    status: "ongoing",
                    logoUrl: "img/airdrop/apk.png",
                    hidden: true,
                }, {
                    projectName: "launcharidrop",
                    contractType: "airdropWithStake",
                    icon: "/img/coin/apk.png",
                    coin: "APK",
                    contractAddress: "0x1A2D9AE19315a50c9e34B7b4A0013135517A1120",
                    status: "ongoing",
                    logoUrl: "img/airdrop/apk.png",
                },
                {
                    projectName: "launcharidrop",
                    contractType: "airdropWithStake",
                    icon: "/img/coin/apk.png",
                    coin: "APK",
                    contractAddress: "0x38969f2C94C6e7f1AC31283463C59DCC5A7ffCD2",
                    status: "ongoing",
                    logoUrl: "img/airdrop/apk.png",
                }
            ]
        },
        dao: {
            bsc: []
        },
        staking: {
            bsc: [
                {
                    contractType: "PoolingBond1",
                    contractAddress: "0xB87a01DCAC5ee3F1cbDa41C06A2f9fe6E9878e39",
                    stake: "MT",
                    stakeIcon: "/img/coin/MT.png",
                    earn: "bXEN",
                    earnIcon: "/img/coin/bXEN.png",
                    path: ["0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7","0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111","0x55d398326f99059fF775485246999027B3197955","0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56","0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e"]
                },
                {
                    contractType: "PoolingBond1",
                    contractAddress: "0x451a9F934c76c898F243707C3e5a5F0CF9fec235",
                    stake: "MT",
                    stakeIcon: "/img/coin/MT.png",
                    earn: "bXEN",
                    earnIcon: "/img/coin/bXEN.png",
                    path: ["0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7","0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111","0x55d398326f99059fF775485246999027B3197955","0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56","0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e"]
                },
                {
                    contractType: "PoolingBond1",
                    contractAddress: "0xe2F7d18AcCE0B27BA18F0DC10E5509B5FCA99eD6",
                    stake: "MT",
                    stakeIcon: "/img/coin/MT.png",
                    earn: "bXEN",
                    earnIcon: "/img/coin/bXEN.png",
                    path: ["0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7","0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111","0x55d398326f99059fF775485246999027B3197955","0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56","0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e"]
                },
                {
                    contractType: "PoolingBond1",
                    contractAddress: "0x97438e92aAafCCdb12e195703E0Fd7373c0ca63F",
                    stake: "MT",
                    stakeIcon: "/img/coin/MT.png",
                    earn: "XEN",
                    earnIcon: "/img/coin/XEN.png",
                    path: ["0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7","0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0xCb0A57FF5bc717aEe552C3a872456B4325380D3d"]
                },
                {
                    contractType: "PoolingBond1",
                    contractAddress: "0xf1c060aFd48F83109Fb06a23Abc2A19a08Ac527b",
                    stake: "CAKE",
                    stakeIcon: "/img/coin/CAKE.png",
                    earn: "stCAKE",
                    earnIcon: "/img/coin/stCAKE.png",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x22Bd6EE0015251957A34399F6b1140232BF08bC2"]
                },
                {
                    contractType: "PoolingBond1",
                    contractAddress: "0xAEaE19628784a8a6B88d92C6f8Dfbf63c685be9e",
                    stake: "stCAKE",
                    stakeIcon: "/img/coin/stCAKE.png",
                    earn: "CAKE",
                    earnIcon: "/img/coin/CAKE.png",
                    path: ["0x22Bd6EE0015251957A34399F6b1140232BF08bC2", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"]
                },
                {
                    contractType: "PoolingBond1",
                    contractAddress: "0x8AA7E58e0Cc75aD3A0120331F82a680747eEaDc3",
                    stake: "APK",
                    stakeIcon: "/img/coin/apk.png",
                    earn: "VAPK",
                    earnIcon: "/img/coin/vapk.jpg",
                    path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0xae862Dd46146217A756776B2b2CEB1c324E41153"],
                }, {
                    contractType: "PoolingBond15",
                    contractAddress: "0x1efEC8872e6ba74af50f3E886Df375fc700E3Be8",
                    stake: "APK",
                    stakeIcon: "/img/coin/apk.png",
                    earn: "VAPK",
                    earnIcon: "/img/coin/vapk.jpg",
                    path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0xae862Dd46146217A756776B2b2CEB1c324E41153"],
                }, {
                    contractType: "PoolingBond30",
                    contractAddress: "0xa5F92BAE0d391DbB539Df8a0de361D78641EdC79",
                    stake: "APK",
                    stakeIcon: "/img/coin/apk.png",
                    earn: "VAPK",
                    earnIcon: "/img/coin/vapk.jpg",
                    path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0xae862Dd46146217A756776B2b2CEB1c324E41153"],
                }, {
                    contractType: "PoolingBond45",
                    contractAddress: "0x245A4D588E2DA0b20B7FbF4044e346ADd2ABE68e",
                    stake: "APK",
                    stakeIcon: "/img/coin/apk.png",
                    earn: "VAPK",
                    earnIcon: "/img/coin/vapk.jpg",
                    path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0xae862Dd46146217A756776B2b2CEB1c324E41153"],
                }, {
                    contractType: "PoolingBond52",
                    contractAddress: "0xa80394d79911E4be911B3b86b96BF69CEf7883cB",
                    stake: "APK",
                    stakeIcon: "/img/coin/apk.png",
                    earn: "VAPK",
                    earnIcon: "/img/coin/vapk.jpg",
                    path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0xae862Dd46146217A756776B2b2CEB1c324E41153"],
                }
            ]
        },
        pools: {
            //0 MiningWithToken/PoolingWithToken  1 MiningWithTokenLPBeefy 2 MiningWithTokenLPDog
            //3 NewMiningWithToken
            bsc: [

                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x4b89A0769963776d5aF1962F34f0C72D89db8693",
                    stake: "FEI",
                    stakeIcon: "/img/coin/FEI.png",
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                    usdtPath: [ "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"],
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x160AF9E01D2DD30e401F2F4BfbE4FC0fAb862eDA",
                    stake: "OHM",
                    stakeDecimals: 9,
                    stakeIcon: "/img/coin/OHM.png",
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0x85bb59A8e466B55946841d3258d412aEF5927865", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                    usdtPath: ["0x85bb59A8e466B55946841d3258d412aEF5927865", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"],
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x57257A414e6dbe26560186AC978fF21c9708F45E",
                    stake: "X2Y2",
                    stakeIcon: "/img/coin/X2Y2.png",
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                    usdtPath: ["0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"],
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x2F0eCDa29e6280c645299ff89927A8862f1cb84e",
                    stake: "stCAKE",
                    stakeIcon: "/img/coin/stCAKE.png",
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0x22Bd6EE0015251957A34399F6b1140232BF08bC2", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                    usdtPath: ["0x22Bd6EE0015251957A34399F6b1140232BF08bC2", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"],
                },
                {
                    contractType: "NewMiningWithToken",
                    contractAddress: "0x0871270af61bfFA2ab5A5ccEab8e6F77e799DbF0",
                    stake: "CAKE",
                    stakeIcon: "/img/coin/CAKE.png",
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                    usdtPath: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"]
                },
                {
                    contractType: "NewMiningWithToken",
                    contractAddress: "0x2E7dfFaA7f820F2475433EB28102C7d8a1C4ee80",
                    stake: "CAKE",
                    stakeIcon: "/img/coin/CAKE.png",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    projectName: "Vault2",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                    usdtPath: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"]
                }, {
                    contractType: "MiningWithToken",
                    contractAddress: "0x5F725bF341c5aF148F797bb4119d1898993804E9",
                    stake: "CAKE",
                    stakeIcon: "/img/coin/CAKE.png",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    status: 1,
                    projectName: "Vault1",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                    usdtPath: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"]
                }, {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x30Ef81b7b96DC2Ac0898D1CE16233D533776164e",
                    stake: "VAPK",
                    stakeIcon: "/img/coin/vapk.jpg",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    path: ["0xae862Dd46146217A756776B2b2CEB1c324E41153", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                    usdtPath: ["0xae862Dd46146217A756776B2b2CEB1c324E41153", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"]
                }, {
                    contractType: "OLDPoolingWithToken",
                    contractAddress: "0xDd07987F56695DD1A685CA5D15f6F9a4863af048",
                    stake: "Face",
                    stakeDecimals: 9,
                    stakeIcon: "/img/coin/face.png",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    status: 1,
                    path: ["0x623B64D0e2483B77Cdd36308066B3d747603c498", "0x55d398326f99059fF775485246999027B3197955", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                    usdtPath: ["0x623B64D0e2483B77Cdd36308066B3d747603c498", "0x55d398326f99059fF775485246999027B3197955"],
                    days: 350,
                    time: 7
                }, {
                    contractType: "MiningWithTokenLPBeefy",
                    contractAddress: "0x7FdA03cbd76873c04db27452dDf0b5F45F04F175",
                    stake: "Pacoca",
                    stakeIcon: "/img/coin/PACOCA.svg",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    status: 1,
                    path: ["0x55671114d774ee99D653D6C12460c780a67f1D18", "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                    usdtPath: ["0x55671114d774ee99D653D6C12460c780a67f1D18", "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "0x55d398326f99059fF775485246999027B3197955"]
                }, {
                    contractType: "OLDPoolingWithToken",
                    contractAddress: "0x916eb608F9c000374a013551804B8635D9A718f7",
                    stake: "APK",
                    stakeIcon: "/img/coin/apk.png",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                    usdtPath: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "0x55d398326f99059fF775485246999027B3197955"]
                },
                /*{
                    type: 0,
                    contractAddress: "0x916eb608F9c000374a013551804B8635D9A718f7",
                    stake: "APK",
                    stakeIcon: "/img/coin/apk.png",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",

                    basePath:"0x55d398326f99059fF775485246999027B3197955"
                }*/
                /* {
                     //0x011d2Ac3a88672184576E7d2f649C00Beb0Dca29 usdt1
                     type: 2,
                     contractType: "MiningWithTokenLPDog",
                     contractAddress: "0xee5B0d2136a333eeA4107a5c3748221b06A3f962",
                     stake: "CAKE",
                     stakeIcon: "/img/coin/CAKE.png",
                     earn: "APK",
                     earnIcon: "/img/coin/apk.png",

                     basePath: "0x55d398326f99059fF775485246999027B3197955"//用于计算价格
                 },*/

            ]
        },
        farms: {
            //type 0 PoolingWithToken 1 MiningWithTokenLPBeefy 2 MiningWithTokenLPDog
            bsc: [
                {
                    contractType: "MiningWithTokenV2",
                    contractAddress: "0x816E7E9f59EceCBbE0dc60F073e0b9ca491472Ea",
                    stake: "CAKE-BUSD",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/CAKE.png", "/img/coin/busd.png"],
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                    usdtPath: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"]
                },
                {
                    contractType: "MiningWithTokenV2",
                    contractAddress: "0x0131057a1459a099b9EA9f017e73eAcB0636D3c4",
                    stake: "CAKE-USDT",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/CAKE.png", "/img/coin/usdt.png"],
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0x55d398326f99059fF775485246999027B3197955", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                    usdtPath: ["0x55d398326f99059fF775485246999027B3197955", "0x55d398326f99059fF775485246999027B3197955"]
                },
                {
                    contractType: "MiningWithTokenV2",
                    contractAddress: "0x4349E0ff0703Aa4287df09fA9a30222CCf5BAEdc",
                    stake: "CAKE-USDT",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/CAKE.png", "/img/coin/usdt.png"],
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                    usdtPath: ["0x55d398326f99059fF775485246999027B3197955", "0x55d398326f99059fF775485246999027B3197955"],
                }, {
                    contractType: "MiningWithTokenV2",
                    contractAddress: "0x8EB54659ABCAc867Dd7771F5fC4d2F9308A469B6",
                    stake: "CAKE-BUSD",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/CAKE.png", "/img/coin/busd.png"],
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                    usdtPath: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"],
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0xad670576Eb8dE1Bda4a4B9dC26520E775704150b",
                    stake: "VAPK-USDT",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/vapk.jpg", "/img/coin/usdt.png"],
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    path: ["0x55d398326f99059fF775485246999027B3197955", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                    usdtPath: ["0x55d398326f99059fF775485246999027B3197955", "0x55d398326f99059fF775485246999027B3197955"],
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x80608f7371FEf96fEc21F89812edfE69cebDFA93",
                    stake: "VAPK-CAKE",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/vapk.jpg", "/img/coin/CAKE.png"],
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                    usdtPath: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"],
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0xa92839ABa314252260408f8Ea69BcB4AAD6DedC6",
                    stake: "APK-CAKE",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/apk.png", "/img/coin/CAKE.png"],
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                    usdtPath: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"]
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x60B1016296014e273b966c5DcD73E184c21Ce5b0",
                    stake: "APK-BUSD",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/apk.png", "/img/coin/busd.png"],
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                    usdtPath: ["0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "0x55d398326f99059fF775485246999027B3197955"]
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x75BA912bCA589Ec9950c060c1D4e42F71949d8D1",
                    stake: "APK-USDT",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/apk.png", "/img/coin/usdt.png"],
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                    usdtPath: ["0x55d398326f99059fF775485246999027B3197955", "0x55d398326f99059fF775485246999027B3197955"]
                },
                /*{
                    type:1,
                    contractAddress: "0xebf4a63eeFc6Eb66df0834535E0Cf8261433291c",
                    stake: "Static-BUSD",
                    stakeIcon: ["/img/coin/STATIC.png", "/img/coin/busd.png"],
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",

                    basePath: "0x55d398326f99059ff775485246999027b3197955",//usdt
                    stakeTokens: [
                        {
                            index: 0,
                            text: "Static-BUSD LP",
                            address: "0x69758726b04e527238B261ab00236AFE9F34929D"
                        },
                        {
                            index: 1,
                            text: "BUSD",
                            address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
                        },
                        {
                            index: 2,
                            text: "STATIC",
                            address: "0x7dEb9906BD1d77B410a56E5C23c36340Bd60C983"
                        }]
                },*/
                /*{
                    //0x011d2Ac3a88672184576E7d2f649C00Beb0Dca29 usdt1
                    type:2,
                    contractAddress: "0x005bD69AC9730B8E7FBAE72F67efF7FFD0aABE8A",
                    stake: "USDT-BUSD",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/usdt.png", "/img/coin/busd.png"],
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",

                    basePath: "0x55d398326f99059ff775485246999027b3197955",//usdt
                    status:1
                },*/
                /* {
                     //0x011d2Ac3a88672184576E7d2f649C00Beb0Dca29 usdt1
                     type:2,
                     contractAddress: "0xd1d2e81F20Eadaf9252459b70c1cCc821D3754bB",
                     stake: "CAKE-BUSD",//cake -usdt  rewar usdt1
                     stakeIcon: ["/img/coin/CAKE.png", "/img/coin/busd.png"],
                     earn: "APK",
                     earnIcon: "/img/coin/apk.png",

                     basePath: "0x55d398326f99059ff775485246999027b3197955",//usdt
                 }*/
            ]
        },
        governance: {
            bsc: [

                {
                    stake: "APK",//cake -usdt  rewar usdt1
                    stakeIcon: "/img/coin/apk.png",
                    contractAddress: '0xA60B9DFb1A7725DF739BA179635e2d4443e5b74e',
                    token: [
                        {
                            key: "USDT",
                            address: "0x55d398326f99059fF775485246999027B3197955",
                            path: ["0x55d398326f99059fF775485246999027B3197955", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "BUSD",
                            address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
                            path: ["0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "APK",
                            address: "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E",
                            path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "VAPK",
                            address: "0xae862Dd46146217A756776B2b2CEB1c324E41153",
                            path: ["0xae862Dd46146217A756776B2b2CEB1c324E41153", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "CAKE",
                            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
                            path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "X2Y2",
                            address: "0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7",
                            path: ["0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "OHM",
                            address: "0x85bb59A8e466B55946841d3258d412aEF5927865",
                            path: ["0x85bb59A8e466B55946841d3258d412aEF5927865", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"]
                        }, {
                            key: "MT",
                            address: "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7",
                            path: ["0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "stCAKE",
                            address: "0x22Bd6EE0015251957A34399F6b1140232BF08bC2",
                            path: ["0x22Bd6EE0015251957A34399F6b1140232BF08bC2", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "stX2Y2",
                            address: "0x82a9177D283b178373994Ebb5C33f9aF4cb74739",
                            path: ["0x82a9177D283b178373994Ebb5C33f9aF4cb74739", "0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "stOHM",
                            address: "0xB728eB00d9BC278B248058f741c69E9391b56FC0",
                            path: ["0xB728eB00d9BC278B248058f741c69E9391b56FC0", "0x85bb59A8e466B55946841d3258d412aEF5927865", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "VAPK/stCAKE",
                            address: "0x13Ff5F22c0Df8dC6A2265BaA850Ab4D7F537da6a",
                            path: ["0xae862Dd46146217A756776B2b2CEB1c324E41153", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "VAPK/MT",
                            address: "0x9De2092b78B6B9356D98953F6A53DeA61b5F6df2",
                            path: ["0xae862Dd46146217A756776B2b2CEB1c324E41153", "0x55d398326f99059fF775485246999027B3197955"]
                        }, {
                            key: "APK/MT",
                            address: "0xc3B4ff35fbdDE791C2B7Bf17cF6e020d72fA4A0E",
                            path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x55d398326f99059fF775485246999027B3197955"]
                        }, {
                            key: "APK/stCAKE",
                            address: "0x1BD57C87f577CBD526cf4A05adCD5ea1017D988d",
                            path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "VAPK/CAKE",
                            address: "0x8c94bA6209538AB6d9c664e3144Fc58990A601e5",
                            path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "VAPK/USDT",
                            address: "0x8054b11782770fC31bD4e8EC471a2Be88F6Fb199",
                            path: ["0x55d398326f99059fF775485246999027B3197955", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "APK/CAKE",
                            address: "0x4609F07E14464653457C665a8953BFc2641F7469",
                            path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "APK/USDT",
                            address: "0x17663004b549027cF9205022e0f2b9aE8441236d",
                            path: ["0x55d398326f99059fF775485246999027B3197955", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "APK/BUSD",
                            address: "0x7f7c79954Dd5BC3AE4CaAc93F3eDe6CD4F325787",
                            path: ["0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                    ]

                }, {
                    type: 1,
                    contractAddress: "0x005bD69AC9730B8E7FBAE72F67efF7FFD0aABE8A",
                    stake: "APK",//cake -usdt  rewar usdt1
                    stakeIcon: "/img/coin/apk.png",
                }

            ]

        },
        bridge: {
            "Ethereum_BSC": {
                Ethereum: "0x85bb59A8e466B55946841d3258d412aEF5927865",
                BSC: "0x1019081242405cdB57eEA34671fc4084195c35CA",

            },
            /*  "Ethereum_Heco": {
                  Ethereum: "0x62E04f937C3F8Cfd662047fDD6dCaFE8a502A054",
                  Heco: "0xD45753Ee217beb1f336Fd60352a2F4A04Db364f2",

              },
              "Heco_BSC": {
                  Heco: "0x62E04f937C3F8Cfd662047fDD6dCaFE8a502A054",
                  BSC: "0x62E04f937C3F8Cfd662047fDD6dCaFE8a502A054",
              }*/
        },
        message: {
            bsc: [
                {
                    coin: "MT",
                    icon: "/img/coin/MT.png",
                },
                {
                    coin: "APK",
                    icon: "/img/coin/apk.png",
                }
            ]
        },

    }
};
