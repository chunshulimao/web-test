(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14861e9e"],{"2c28":function(t,a,e){"use strict";e("c6ed")},"365c":function(t,a,e){"use strict";var r=e("b775");a["a"]={getTokenList:function(t){return r["a"].get("https://apiv5.paraswap.io/tokens/"+t)},getBscTokenList1:function(){return r["a"].get("https://tokens.pancakeswap.finance/pancakeswap-extended.json")},getBscTokenList2:function(){return r["a"].get("https://tokens.pancakeswap.finance/pancakeswap-top-100.json")},getEtherTokenList1:function(){return r["a"].get("https://tokenlist-aave-eth.ipns.dweb.link/")},getEtherTokenList2:function(){return r["a"].get("https://gateway.ipfs.io/ipns/tokens.uniswap.org")},getTokenPrice:function(t,a){return r["a"].get("https://apiv5.paraswap.io/prices",t,a)},getTransaction:function(t,a){return r["a"].post("https://api.paraswap.io/transactions/"+t,a)},getChart:function(t,a,e,i){return a=a.toLowerCase(),"bsc"===t?(a==="0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLowerCase()&&(a="0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"),r["a"].get("https://coingecko.ludos.app/coingecko/api/v3/coins/binance-smart-chain/contract/"+a+"/market_chart/range?vs_currency=usd&from="+e+"&to="+i,{},!1)):"ethereum"===t?r["a"].get("https://api.coingecko.com/api/v3/coins/ethereum/contract/"+a+"/market_chart/range?vs_currency=usd&from="+e+"&to="+i):void 0},getAirdropTotal:function(t){return r["a"].get("/api/v1/web/staking/getAirdropTotal",t)},getSignClaim:function(t){return r["a"].post("/api/v1/web/staking/signClaim",t)},getAirdropTotal1:function(t,a){return r["a"].get(("MT"===a?"/mtapi":"/api")+"/v1/web/airdrop/airdropwithstake/getAirdropTotal",t)},getSignClaim1:function(t,a){return r["a"].post(("MT"===a?"/mtapi":"/api")+"/v1/web/airdrop/airdropwithstake/signClaim",t)},getAirdropTotalFast:function(t){return r["a"].get("/mtapi/v1/web/airdrop/airdropfast/getAirdropFastTotal",t)},getSignClaimFast:function(t){return r["a"].post("/mtapi/v1/web/airdrop/airdropfast/signClaim",t)},getMsg:function(t,a){return r["a"].get(("MT"===a?"/mtapi":"/api")+"/v1/web/getMsg",t)},getUpgradeMsg:function(t){return r["a"].get("/api/v1/web/getUpgradeMsg",t)},getStatistics:function(t,a){return r["a"].get(("MT"===a?"/mtapi":"/api")+"/v1/web/statistics/memberStatistics?addr="+t+"&contractAddr=0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82")},getQuanticNextSymbolConfig:function(t){return r["a"].get("/api/v1/web/launchdao/getQuanticNextSymbolConfig?contractAddr="+t)},getUserInfo:function(t,a){return r["a"].get("/api/v1/web/pool/miningwithtoken/getUserInfo?contractAddr="+t+"&addr="+a)},getTokenInfo:function(t){return r["a"].get("https://api.bscscan.com/api?module=token&action=tokeninfo&apikey=AYHH23498FIKTXD9UMRBMPQIYCHU7DEXVF&contractaddress="+t)},getUserBoundWL:function(t){return r["a"].get("/api/v1/web/bound/getUserBoundWL?addr="+t)},bridgeSignClaim:function(t){return r["a"].post("/crossapi/v1/web/signClaim",t)}}},af77:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[t._m(0),e("div",{staticClass:"airdrop"},[e("div",[e("img",{attrs:{src:t.detail.icon}}),e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(t.detail.coin)+" "+t._s(t.$t(t.detail.projectName))+" ")])]),e("div",{staticClass:"withdraw"},[e("div",[t._v(t._s(t.$t("Totalclaim"))+":")]),e("div",[t._v(t._s(t._f("transformationNumber1")(t.airdropData?t.airdropData.total:0,4)))])]),e("div",{staticClass:"withdraw"},[e("div",[t._v(t._s(t.$t("promotionReward"))+":")]),e("div",[t._v(t._s(t._f("transformationNumber1")(t.airdropData?t.airdropData.reward:0,4)))])]),t.airdropData&&t.airdropData.superNodeAReward&&t.airdropData.superNodeBReward?e("div",{staticClass:"withdraw"},[e("div",[t._v(t._s(t.$t("launcharidrop2"))+":")]),e("div",[t._v(t._s(t._f("add")(4,t.airdropData.superNodeAReward,t.airdropData.superNodeBReward)))])]):t._e(),e("div",{staticClass:"withdraw"},[e("div",[t._v(t._s(t.$t("Claimable"))+":")]),e("div",[t._v(t._s(t._f("transformationNumber")(t._f("sub")(t._f("transformationNumber18")(t.airdropData?t.airdropData.total:0),t.userInfo._claimTotal),4))+" ")])]),e("div",{staticClass:"withdraw"},[e("div",[t._v(t._s(t.$t("Claimed"))+":")]),e("div",[t._v(t._s(t._f("transformationNumber")(t.userInfo._claimTotal,4)))])]),e("div",{staticClass:"withdraw"},[e("div",[t._v(t._s(t.$t("Withdrawable"))+":")]),e("div",[t._v(t._s(t._f("transformationNumber")(t.userInfo._withdrawable,4)))])]),e("div",{staticClass:"withdraw"},[e("div",[t._v(t._s(t.$t("Withdrawn"))+":")]),e("div",[t._v(t._s(t._f("transformationNumber")(t.userInfo._withdrawnTotal,4)))])]),e("div",{staticClass:"flex",staticStyle:{width:"100%"}},[e("div",{staticClass:"claim flex1 btn",on:{click:t.claim}},[t._v(t._s(t.$t("Claim")))]),e("div",{staticClass:"claim flex1 btn",staticStyle:{"margin-left":"25px"},on:{click:t.withdraw}},[t._v(t._s(t.$t("Withdraw")))])]),e("div",{staticClass:"ruler",staticStyle:{display:"block",width:"100%"}},[e("p",[t._v(" "+t._s(t.$t(t.detail.ruler))+" ")])])])])},i=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("header",{staticClass:"header"},[r("img",{staticClass:"titleImg",attrs:{src:e("d16d"),alt:""}})])}],n=e("1da1"),s=(e("a9e3"),e("96cf"),e("b775")),o=e("365c"),c=e("d399"),d={data:function(){return{detail:this.$config.project.airdrop.bsc[this.$route.query.index],userInfo:{},airdropContract:{},cliamData:{},estimatedAnnualIncome:0,airdropData:null}},mounted:function(){this.airdropContract=new this.$web3Obj.web3.eth.Contract(this.$config.abi.airdropWithStake,this.detail.contractAddress),this.getUserData()},methods:{getUserData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.airdropContract.methods.getUserInfoBasic(t.$web3Obj.currentAddress).call();case 2:t.userInfo=a.sent,o["a"].getAirdropTotal1({addr:t.$web3Obj.currentAddress,contractAddr:t.detail.contractAddress},t.detail.coin).then((function(a){t.airdropData=a.data})),o["a"].getSignClaim1({to:t.$web3Obj.currentAddress,contractAddr:t.detail.contractAddress},t.detail.coin).then((function(a){t.cliamData=a.data}));case 5:case"end":return a.stop()}}),a)})))()},toDetail:function(t){this.$router.push("/airdropDetail?contractAddress="+t)},claim:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!(Number(t.airdropData.total)*Math.pow(10,18)-t.userInfo._claimTotal<=0)){a.next=3;break}return Object(c["a"])("Claimable: 0"),a.abrupt("return");case 3:return a.prev=3,a.next=6,s["a"].contractSend(t.airdropContract.methods.claim(t.cliamData.value,t.cliamData.deadline,t.cliamData.signature).send({from:t.$web3Obj.currentAddress,value:0}));case 6:return a.next=8,t.getUserData(t.$route.query.address);case 8:a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](3),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[3,10]])})))()},withdraw:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(0!==Number(t.userInfo._withdrawable)){a.next=3;break}return Object(c["a"])("Withdrawable : 0"),a.abrupt("return");case 3:return a.prev=3,a.next=6,s["a"].contractSend(t.airdropContract.methods.withdraw().send({from:t.$web3Obj.currentAddress,value:0}));case 6:return a.next=8,t.getUserData(t.$route.query.address);case 8:a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](3),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[3,10]])})))()}}},u=d,p=(e("2c28"),e("2877")),l=Object(p["a"])(u,r,i,!1,null,"d1b858e0",null);a["default"]=l.exports},c6ed:function(t,a,e){},d16d:function(t,a,e){t.exports=e.p+"static/img/airdrop.ca38b8d8.png"}}]);