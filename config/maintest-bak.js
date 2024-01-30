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
            img: require("../img/menu/node.png"),
            imged: require("../img/menu/node2.png"),
            name: "Node",
            url: "/node",
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
                    contractAddress: "0x5b3Bbe23a9f26b779cec6f8CeBA2736ECa748Fc7",
                    stake: "APK",
                    stakeIcon: "/img/coin/apk.png",
                    earn: "VAPK",
                    earnIcon: "/img/coin/vapk.jpg",
                    projectName: "bond测试",
                    path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0xae862Dd46146217A756776B2b2CEB1c324E41153"],
                },
                {
                    contractType: "PoolingBond1",
                    contractAddress: "0x708A27eA80ac03A4032251097F092645F0A912AE",
                    stake: "OHM",
                    stakeIcon: "/img/coin/OHM.png",
                    earn: "stOHM",
                    stakeDecimals:9,
                    earnIcon: "/img/coin/stOHM.png",
                    projectName: "bondunlock",
                    path: ["0x85bb59A8e466B55946841d3258d412aEF5927865","0xB728eB00d9BC278B248058f741c69E9391b56FC0"]
                },
                {
                    contractType: "PoolingBond1",
                    contractAddress: "0x25ad734547f8Fb3B562e5B3029B0D2A717AB4C44",
                    stake: "stOHM",
                    stakeIcon: "/img/coin/stOHM.png",
                    earn: "OHM",
                    stakeDecimals:9,
                    earnIcon: "/img/coin/OHM.png",
                    projectName: "bond30d",
                    path: ["0xB728eB00d9BC278B248058f741c69E9391b56FC0","0x85bb59A8e466B55946841d3258d412aEF5927865"]
                },
                {
                    contractType: "PoolingBond1",
                    contractAddress: "0xB287192365a5BE5bbA333405A6452Ea9520d5F5D",
                    stake: "X2Y2",
                    stakeIcon: "/img/coin/X2Y2.png",
                    earn: "stX2Y2",
                    earnIcon: "/img/coin/stX2Y2.png",
                    projectName: "bondunlock",
                    path: ["0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7","0x82a9177D283b178373994Ebb5C33f9aF4cb74739"]
                },
                {
                    contractType: "PoolingBond30",
                    contractAddress: "0xA7A2F4CA343D502243B1D1Cf5F50f279344a725a",
                    stake: "stX2Y2",
                    stakeIcon: "/img/coin/stX2Y2.png",
                    earn: "X2Y2",
                    earnIcon: "/img/coin/X2Y2.png",
                    projectName: "bond30d",
                    path: ["0x82a9177D283b178373994Ebb5C33f9aF4cb74739","0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7"]
                },
            ]
        },
        pools: {
            //0 MiningWithToken/PoolingWithToken  1 MiningWithTokenLPBeefy 2 MiningWithTokenLPDog
            //3 NewMiningWithToken
            bsc: [
                {
                    contractType: "MiningWithCakeFixedTerm",
                    contractAddress: "0x461D7B6b4a707AdF0a4a642Fcd18D2D27b407FE1",
                    stake: "CAKE",
                    stakeIcon: "/img/coin/CAKE.png",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    projectName: "Locked",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                    usdtPath: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"],
                },
                {
                    contractType: "NewMiningWithToken",
                    contractAddress: "0xD8B3eb7Cab9855C388ea86dE82C7DC99eF6eeCdc",
                    stake: "CAKE",
                    stakeIcon: "/img/coin/CAKE.png",
                    earn: "APK",
                    earnIcon: "/img/coin/apk.png",
                    projectName: "Vault3",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E"],
                    usdtPath: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"],
                }, {
                    contractType: "PoolingWithToken",
                    contractAddress: "0xBd6f799FD6C69C16D971Da6e58b791157074b47d",
                    stake: "stOHM",
                    stakeDecimals:9,
                    stakeIcon: "/img/coin/stOHM.png",
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0xB728eB00d9BC278B248058f741c69E9391b56FC0","0x85bb59A8e466B55946841d3258d412aEF5927865", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                    usdtPath: ["0xB728eB00d9BC278B248058f741c69E9391b56FC0","0x85bb59A8e466B55946841d3258d412aEF5927865", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"],
                }, {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x0199175508a681070e6b05f51a6cCe5aa29cc680",
                    stake: "stX2Y2",
                    stakeIcon: "/img/coin/stX2Y2.png",
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0x82a9177D283b178373994Ebb5C33f9aF4cb74739", "0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                    usdtPath: ["0x82a9177D283b178373994Ebb5C33f9aF4cb74739","0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"],
                }

            ]
        },
        farms: {
            //type 0 PoolingWithToken 1 MiningWithTokenLPBeefy 2 MiningWithTokenLPDog
            bsc: [
                {
                    contractType: "MiningWithO3",
                    contractAddress: "0x69e34aa9b3b3B56fD58185Cc3adD043Ce60AB745",
                    stake: "pUSDT/USDT",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/usdt.png", "/img/coin/LP-USDT.png"],
                    earn: "MT",
                    poolAddress:"0x5F5737403c8b30288299e51d94d007a826f9d593",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0x55d398326f99059fF775485246999027B3197955", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                    usdtPath: ["0x55d398326f99059fF775485246999027B3197955", "0x55d398326f99059fF775485246999027B3197955"]
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0xFBEC86882e1F3DdeCa6eD598F9D0585352421fE8",
                    stake: "stCAKE/CAKE",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/stCAKE.png", "/img/coin/CAKE.png"],
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                    usdtPath: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"],
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x5Ed12f9187412b28A68a49fa619d5AaD10D3cE1f",
                    stake: "OHM/FEI",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/OHM.png", "/img/coin/FEI.png"],
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                    usdtPath: ["0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"],
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0xd0a29C30Fce91CcFc3C8c7416f6b57935c5717Fc",
                    stake: "X2Y2/FEI",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/X2Y2.png", "/img/coin/FEI.png"],
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                    usdtPath: ["0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"],
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x087FfE61a5d6395b9CFd1E0D95150f77ef28af60",
                    stake: "stX2Y2/X2Y2",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/stX2Y2.png", "/img/coin/X2Y2.png"],
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                    usdtPath: ["0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"],
                },
                {
                    contractType: "PoolingWithToken",
                    contractAddress: "0x8BfA34bDB2C9553f82Bc0eFA542d2D7Cc92D9CDE",
                    stake: "stOHM/OHM",//cake -usdt  rewar usdt1
                    stakeIcon: ["/img/coin/stOHM.png", "/img/coin/OHM.png"],
                    earn: "MT",
                    earnIcon: "/img/coin/MT.png",
                    path: ["0x85bb59A8e466B55946841d3258d412aEF5927865", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7"],
                    usdtPath: ["0x85bb59A8e466B55946841d3258d412aEF5927865", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"],
                },
                /*{
                    type:1,
                     contractType: "MiningWithTokenLPBeefy",
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
                    stake: "OHM",//cake -usdt  rewar usdt1
                    stakeIcon: "/img/coin/OHM.png",
                    contractAddress: "0x1D851745c0fbC61e4365fe8b8a941F2A4f389c97",
                    contractType: "NewQuanticNext",
                    token: [
                        {
                            key: "OHM",
                            address: "0x85bb59A8e466B55946841d3258d412aEF5927865",
                            path: ["0x85bb59A8e466B55946841d3258d412aEF5927865", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"]
                        },]

                },
                {
                    stake: "X2Y2",//cake -usdt  rewar usdt1
                    stakeIcon: "/img/coin/X2Y2.png",
                    contractAddress: "0xB734909F7cE687D941A9E314376AF4A57067C433",
                    contractType: "NewQuanticNext",
                    token: [
                        {
                            key: "X2Y2",
                            address: "0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7",
                            path: ["0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"]
                        },]

                },
                {
                    stake: "CAKE",//cake -usdt  rewar usdt1
                    stakeIcon: "/img/coin/CAKE.png",
                    contractAddress: "0x049E72a56B5dE5bEc91eB4a894bE626e3cA44a94",
                    token: [
                        {
                            key: "CAKE",
                            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
                            path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"]
                        },]

                },
                {
                    stake: "LDOS",//cake -usdt  rewar usdt1
                    stakeIcon: "/img/coin/LUDO.png",
                    contractAddress: '0x7520943BdB473C1A84E8F618D747C60a19FF44a2',
                    token: [
                        {
                            key: "USDT",
                            address: "0x55d398326f99059fF775485246999027B3197955",
                            path: ["0x55d398326f99059fF775485246999027B3197955", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "stCAKE",
                            address: "0x22Bd6EE0015251957A34399F6b1140232BF08bC2",
                            path: ["0x22Bd6EE0015251957A34399F6b1140232BF08bC2", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "LDOS",
                            address: "0x7F9Bc502E56271D5933b4BEAdA34d604B75d39B6",
                            path: ["0x7F9Bc502E56271D5933b4BEAdA34d604B75d39B6", "0x0000000000000000000000000000000000000000"]
                        },

                        {
                            key: "FEI",
                            address: "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111",
                            path: ["0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "MT",
                            address: "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7",
                            path: ["0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "OHM",
                            address: "0x85bb59A8e466B55946841d3258d412aEF5927865",
                            path: ["0x85bb59A8e466B55946841d3258d412aEF5927865", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "X2Y2",
                            address: "0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7",
                            path: ["0xD1F15855bdFf2Fcc06c1a3715B66012306658Ea7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "CAKE",
                            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
                            path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"]
                        },

                        /* {
                             key: "MT/USDT",
                             address: "0x0000000000000000000000000000000000000000",
                             path: ["0x0000000000000000000000000000000000000000","0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"]
                         },*/
                        /*{
                            key: "OHM/USDT",
                            address: "0x0000000000000000000000000000000000000000",
                            path: ["0x0000000000000000000000000000000000000000", "0x55d398326f99059fF775485246999027B3197955"]
                        },*/
                        {
                            key: "CAKE/USDT",
                            address: "0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b",
                            path: ["0x55d398326f99059fF775485246999027B3197955", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        /* {
                             key: "LDOS/USDT",
                             address: "0x0000000000000000000000000000000000000000",
                             path: ["0x0000000000000000000000000000000000000000", "0x55d398326f99059fF775485246999027B3197955"]
                         },*/
                        /* {
                             key: "LDOS/CAKE",
                             address: "0x0000000000000000000000000000000000000000",
                             path: ["0x0000000000000000000000000000000000000000", "0x55d398326f99059fF775485246999027B3197955"]
                         },*/
                        /* {
                             key: "LDOS/FEI",
                             address: "0x0000000000000000000000000000000000000000",
                             path: ["0x0000000000000000000000000000000000000000", "0x55d398326f99059fF775485246999027B3197955"]
                         },*/
                        {
                            key: "OHM/FEI",
                            address: "0x2aFC3049ff9304980a8560794909442B26A4651F",
                            path: ["0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        /*{
                            key: "CAKE/FEI",
                            address: "0x0000000000000000000000000000000000000000",
                            path: ["0x0000000000000000000000000000000000000000", "0x55d398326f99059fF775485246999027B3197955"]
                        },*/
                        {
                            key: "CAKE/stCAKE",
                            address: "0xb09e0EA8bDb618E191BE52e789116384CC8f92e2",
                            path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "MT/FEI",
                            address: "0x023466EDcF0725A776e4A13f909c6cD4f5088F93",
                            path: ["0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "FEI/USDT",
                            address: "0x811d47D92A845f98DFf9bB08e031A3257deeeee9",
                            path: ["0x55d398326f99059fF775485246999027B3197955", "0x55d398326f99059fF775485246999027B3197955"]
                        }, {
                            key: "X2Y2/FEI",
                            address: "0xd69587Ec54B34515f01718E2bFb7f20b25e01e25",
                            path: ["0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"]
                        }
                    ]

                },
                {
                    stake: "MT",//cake -usdt  rewar usdt1
                    stakeIcon: "/img/coin/MT.png",
                    contractAddress: '0x6638e7a149183b52685b07f392e51A93EE83e901',
                    token: [
                        {
                            key: "USDT",
                            address: "0x55d398326f99059fF775485246999027B3197955",
                            path: ["0x55d398326f99059fF775485246999027B3197955", "0x55d398326f99059fF775485246999027B3197955"]
                        },

                        {
                            key: "MT",
                            address: "0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7",
                            path: ["0x4FbE5E48E0D20f9131D3553E46b8f410ef40Aed7", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "OHM",
                            address: "0x85bb59A8e466B55946841d3258d412aEF5927865",
                            path: ["0x85bb59A8e466B55946841d3258d412aEF5927865", "0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "CAKE",
                            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
                            path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "CAKE/USDT",
                            address: "0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b",
                            path: ["0x55d398326f99059fF775485246999027B3197955", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "MT/FEI",
                            address: "0x023466EDcF0725A776e4A13f909c6cD4f5088F93",
                            path: ["0xaE9fC0dc85A0731Baf9DCaE0E759F819C5f23111", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                    ]

                },
                {
                    stake: "APK",//cake -usdt  rewar usdt1
                    stakeIcon: "/img/coin/apk.png",
                    contractAddress: '0xA60B9DFb1A7725DF739BA179635e2d4443e5b74e',
                    usdt: "0x55d398326f99059fF775485246999027B3197955",

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
                            path: ["0xae862Dd46146217A756776B2b2CEB1c324E41153", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "CAKE",
                            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
                            path: ["0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"]
                        },

                        {
                            key: "VAPK/CAKE",
                            address: "0x8c94bA6209538AB6d9c664e3144Fc58990A601e5",
                            path: ["0xae862Dd46146217A756776B2b2CEB1c324E41153", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "APK/CAKE",
                            address: "0x4609F07E14464653457C665a8953BFc2641F7469",
                            path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "APK/USDT",
                            address: "0x17663004b549027cF9205022e0f2b9aE8441236d",
                            path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x55d398326f99059fF775485246999027B3197955"]
                        },
                        {
                            key: "APK/BUSD",
                            address: "0x7f7c79954Dd5BC3AE4CaAc93F3eDe6CD4F325787",
                            path: ["0x92d8f01EB0c7123384362E8ff84DFd761444Fa3E", "0x55d398326f99059fF775485246999027B3197955"]
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
        node: {
            bsc: [
                {
                    contractType: "MiningWithCakeFixedTerm",
                    contractAddress: "0x8A2cdC6088E545d5055468a547cda4c5F6614f43",
                    stake: "CAKE",
                    stakeDecimals: 18,
                    stakeIcon: "/img/coin/CAKE.png",
                    projectName: "Locked",
                },

            ],
            ethereum: [
                {
                    contractType: "MiningWithOHM",
                    contractAddress: "0xc3fc47dC9B465f2EF6F185EdF3147e2711673E77",
                    stake: "OHM",
                    stakeDecimals: 9,
                    stakeIcon: "/img/coin/OHM.png",
                    projectName: "Locked",
                },
                {
                    contractType: "MiningWithX2Y2",
                    contractAddress: "0xB2790908Dc099A5a3cA883EE56c320371a158706",
                    stake: "X2Y2",
                    stakeDecimals: 18,
                    stakeIcon: "/img/coin/X2Y2.png",
                    projectName: "Locked",
                },
            ],

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
