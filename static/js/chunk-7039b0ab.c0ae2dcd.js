(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7039b0ab"],{1539:function(t,e,r){},"365c":function(t,e,r){"use strict";var a=r("b775");e["a"]={getTokenList:function(t){return a["a"].get("https://apiv5.paraswap.io/tokens/"+t)},getBscTokenList1:function(){return a["a"].get("https://tokens.pancakeswap.finance/pancakeswap-extended.json")},getBscTokenList2:function(){return a["a"].get("https://tokens.pancakeswap.finance/pancakeswap-top-100.json")},getEtherTokenList1:function(){return a["a"].get("https://tokenlist-aave-eth.ipns.dweb.link/")},getEtherTokenList2:function(){return a["a"].get("https://gateway.ipfs.io/ipns/tokens.uniswap.org")},getTokenPrice:function(t,e){return a["a"].get("https://apiv5.paraswap.io/prices",t,e)},getTransaction:function(t,e){return a["a"].post("https://api.paraswap.io/transactions/"+t,e)},getChart:function(t,e,r,n){return e=e.toLowerCase(),"bsc"===t?(e==="0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLowerCase()&&(e="0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"),a["a"].get("https://coingecko.ludos.app/coingecko/api/v3/coins/binance-smart-chain/contract/"+e+"/market_chart/range?vs_currency=usd&from="+r+"&to="+n,{},!1)):"ethereum"===t?a["a"].get("https://api.coingecko.com/api/v3/coins/ethereum/contract/"+e+"/market_chart/range?vs_currency=usd&from="+r+"&to="+n):void 0},getAirdropTotal:function(t){return a["a"].get("/api/v1/web/staking/getAirdropTotal",t)},getSignClaim:function(t){return a["a"].post("/api/v1/web/staking/signClaim",t)},getAirdropTotal1:function(t,e){return a["a"].get(("MT"===e?"/mtapi":"/api")+"/v1/web/airdrop/airdropwithstake/getAirdropTotal",t)},getSignClaim1:function(t,e){return a["a"].post(("MT"===e?"/mtapi":"/api")+"/v1/web/airdrop/airdropwithstake/signClaim",t)},getAirdropTotalFast:function(t){return a["a"].get("/mtapi/v1/web/airdrop/airdropfast/getAirdropFastTotal",t)},getSignClaimFast:function(t){return a["a"].post("/mtapi/v1/web/airdrop/airdropfast/signClaim",t)},getMsg:function(t,e){return a["a"].get(("MT"===e?"/mtapi":"/api")+"/v1/web/getMsg",t)},getUpgradeMsg:function(t){return a["a"].get("/api/v1/web/getUpgradeMsg",t)},getStatistics:function(t,e){return a["a"].get(("MT"===e?"/mtapi":"/api")+"/v1/web/statistics/memberStatistics?addr="+t+"&contractAddr=0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82")},getQuanticNextSymbolConfig:function(t){return a["a"].get("/api/v1/web/launchdao/getQuanticNextSymbolConfig?contractAddr="+t)},getUserInfo:function(t,e){return a["a"].get("/api/v1/web/pool/miningwithtoken/getUserInfo?contractAddr="+t+"&addr="+e)},getTokenInfo:function(t){return a["a"].get("https://api.bscscan.com/api?module=token&action=tokeninfo&apikey=AYHH23498FIKTXD9UMRBMPQIYCHU7DEXVF&contractaddress="+t)},getUserBoundWL:function(t){return a["a"].get("/api/v1/web/bound/getUserBoundWL?addr="+t)},bridgeSignClaim:function(t){return a["a"].post("/crossapi/v1/web/signClaim",t)}}},"8f58":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[t._m(0),r("div",{staticClass:"airdrop"},[r("div",[r("img",{attrs:{src:t.airdrop.icon}}),r("span",{staticStyle:{"margin-left":"10px"}},[t._v(" "+t._s(t.airdrop.coin)+" "+t._s(t.$t(t.airdrop.projectName)+(null==t.lockTime||null==t.lockNum?"":"("+(t.lockTime*t.lockNum===0?t.$t("unlock"):t.lockTime*t.lockNum+t.$t("day"))+")"))+" ")])]),r("div",{staticClass:"withdraw"},[r("div",[t._v(t._s(t.$t("Totalreward"))+":")]),r("div",[t._v(t._s(t._f("transformationNumber1")(t.userInfo.total,4)))])]),r("div",{staticClass:"withdraw"},[r("div",[t._v(t._s(t.$t("Withdrawn"))+":")]),r("div",[t._v(t._s(t._f("transformationNumber1")(t.userInfo.withdrawn,4)))])]),r("div",{staticClass:"withdraw"},[r("div",[t._v(t._s(t.$t("Withdrawable"))+":")]),r("div",[t._v(t._s(t._f("transformationNumber1")(t.userInfo.withdrawable,4)))])]),r("div",{staticClass:"withdraw"},[r("div",[t._v(t._s(t.$t("referalReward"))+":")]),r("div",[t._v(t._s(t._f("transformationNumber1")(t.userInfo.referalReward,4)))])]),t._v(" "),r("div",{staticClass:"withdraw"},[r("div",[t._v(t._s(t.$t("promotionReward"))+":")]),r("div",[t._v(t._s(t._f("transformationNumber1")(t.userInfo.reward,4)))])]),t.userInfo.nodeReward?r("div",{staticClass:"withdraw"},[r("div",[t._v(t._s(t.$t("nodeReward"))+":")]),r("div",[t._v(t._s(t._f("transformationNumber1")(t.userInfo.nodeReward,4)))])]):t._e(),t.userInfo.superNodeAReward&&t.userInfo.superNodeBReward?r("div",{staticClass:"withdraw"},[r("div",[t._v(t._s(t.$t("launcharidrop2"))+":")]),r("div",[t._v(t._s(t._f("add")(4,t.userInfo.superNodeAReward,t.userInfo.superNodeBReward)))])]):t._e(),r("div",{staticClass:"ruler"},[r("p",[t._v(t._s(null==t.lockTime||null==t.lockNum?"":t.lockTime*t.lockNum===0?t.$t("stakingairdropruler4"):t.$t("aridroprouler",[t.lockTime,t.lockNum])))])]),r("div",{staticClass:"claim",on:{click:t.claim}},[t._v(t._s(t.$t("Withdraw")))])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("img",{staticClass:"titleImg",attrs:{src:r("d16d"),alt:""}})])}],i=r("1da1"),o=(r("a9e3"),r("96cf"),r("b775")),s=r("d399"),d=r("365c"),c=r("a232"),u={data:function(){return{airdrop:this.$config.project.airdrop[this.$route.query.network][this.$route.query.index],userInfo:{},airdropContract:{},lockTime:null,lockNum:null,cliamData:{}}},mounted:function(){this.airdropContract=new this.$web3Obj.web3.eth.Contract(this.$config.abi[this.airdrop.contractType],this.airdrop.contractAddress),this.getUserData()},methods:{getUserData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("AirdropFast"!==t.airdrop.contractType){e.next=9;break}return e.next=3,t.airdropContract.methods.getUserInfo(t.$web3Obj.currentAddress).call();case 3:t.userInfo=e.sent,t.userInfo.withdrawn=Object(c["transformationNumber"])(t.userInfo._withdrawnTotal),d["a"].getAirdropTotalFast({addr:t.$web3Obj.currentAddress,contractAddr:t.airdrop.contractAddress}).then((function(e){t.lockNum=e.data.releaseTimes;var r=e.data.releasePeriod;if(t.lockTime=Object(c["transformationNumber1"])(r/86400,4),t.$set(t.userInfo,"superNodeAReward",e.data.superNodeAReward),t.$set(t.userInfo,"superNodeBReward",e.data.superNodeBReward),t.$set(t.userInfo,"nodeReward",e.data.nodeReward),t.$set(t.userInfo,"reward",e.data.reward),t.$set(t.userInfo,"total",e.data.total),t.$set(t.userInfo,"referalReward",e.data.referalReward),!t.userInfo.withdrawable){var a=Object(c["sub"])(e.data.airdropRelease,t.userInfo.withdrawn);t.$set(t.userInfo,"withdrawable",a>0?a:0)}})),d["a"].getSignClaimFast({to:t.$web3Obj.currentAddress,contractAddr:t.airdrop.contractAddress}).then((function(e){t.cliamData=e.data;var r=Object(c["sub"])(Object(c["transformationNumber"])(e.data.value),t.userInfo.withdrawn);t.$set(t.userInfo,"withdrawable",r>0?r:0)})),e.next=18;break;case 9:return e.next=11,t.airdropContract.methods.getUser(t.$web3Obj.currentAddress).call();case 11:return t.userInfo=e.sent,e.next=14,t.airdropContract.methods.getWithdrawable(t.$web3Obj.currentAddress).call();case 14:r=e.sent,t.userInfo.withdrawable=r._token1Withdrawable,t.userInfo.withdrawn=Object(c["transformationNumber"])(t.userInfo._token1Withdrawn),t.userInfo.total=Object(c["transformationNumber"])(t.userInfo._token1Amount);case 18:case"end":return e.stop()}}),e)})))()},claim:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==Number(t.userInfo.withdrawable)){e.next=3;break}return Object(s["a"])("Withdrawable : 0"),e.abrupt("return");case 3:if(e.prev=3,"AirdropFast"!==t.airdrop.contractType){e.next=9;break}return e.next=7,o["a"].contractSend(t.airdropContract.methods.withdraw(t.cliamData.value,t.cliamData.deadline,t.cliamData.signature).send({from:t.$web3Obj.currentAddress,value:0}));case 7:e.next=11;break;case 9:return e.next=11,o["a"].contractSend(t.airdropContract.methods.withdraw().send({from:t.$web3Obj.currentAddress,value:0}));case 11:return e.next=13,t.getUserData(t.$route.query.address);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](3),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))()}}},p=u,l=(r("eba9"),r("2877")),f=Object(l["a"])(p,a,n,!1,null,"745b400e",null);e["default"]=f.exports},d16d:function(t,e,r){t.exports=r.p+"static/img/airdrop.ca38b8d8.png"},eba9:function(t,e,r){"use strict";r("1539")}}]);