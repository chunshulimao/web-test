(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bfb92b2"],{"03e8":function(t,e,a){"use strict";a("7c70")},"04d1":function(t,e,a){var r=a("342f"),s=r.match(/firefox\/(\d+)/i);t.exports=!!s&&+s[1]},"164c":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex justify-between"},[a("div",{staticClass:"status flex",staticStyle:{"justify-content":"left"}},[a("div",{class:t.status?"active status1":"status1",on:{click:function(e){return t.setStatus(!0)}}},[t._v(t._s(t.$t("procssing")))]),a("div",{class:t.status?"status2":"active status2",on:{click:function(e){return t.setStatus(!1)}}},[t._v(t._s(t.$t("ended")))])]),a("div",{staticClass:"select"},[a("div",{staticClass:"selecttitle"},[a("div",[t._v(t._s(t.$t("sortby"))+" :")]),a("div",{class:t.showSelect?"title1 active":"title1",on:{click:function(e){t.showSelect=!t.showSelect}}},[t._v(t._s(t.$t(t.sort)))])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showSelect,expression:"showSelect"}],staticClass:"selectcontent"},[a("div",{on:{click:function(e){return t.setSort("HOT")}}},[t._v(t._s(t.$t("HOT")))]),a("div",{on:{click:function(e){return t.setSort("APR")}}},[t._v(t._s(t.$t("APR")))])])])])},s=[],n=(a("4e82"),{data:function(){return{sort:"APR",status:!0,showSelect:!1}},methods:{setStatus:function(t){this.status=t,this.$emit("setStatus",t)},setSort:function(t){this.sort=t,this.showSelect=!1,this.$emit("setSort",t)}}}),c=n,i=(a("a0b7"),a("2877")),o=Object(i["a"])(c,r,s,!1,null,"76a654ed",null);e["a"]=o.exports},"34e6":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"farm"},[a("div",{staticClass:"home"},[t._m(0),a("SelectList",{on:{setStatus:t.setStatus,setSort:t.setSort}}),a("div",{staticClass:"farm"},[a("div",{staticClass:"farmDec"},[a("div",{staticClass:"farmDecLeft flex1"},[t._v(t._s(t.$t("Stake")))]),a("div",{staticClass:"farmDecMid flex1"},[t._v(t._s(t.$t("Earn")))]),a("div",{staticClass:"farmDecRight flex1"},[t._v(t._s(t.$t("APR")))])]),t._l(t.farmList,(function(e,r){return a("div",{directives:[{name:"show",rawName:"v-show",value:t.showActive?1!==e.status:1===e.status,expression:"showActive?item.status!==1:item.status===1"}],on:{click:function(a){return t.toDetail(e)}}},[a("div",{staticClass:"farmContent centerText"},[a("div",{staticClass:"farmContentLeft left-center-text flex1"},[a("div",{staticClass:"flex"},[a("img",{staticStyle:{"border-radius":"50%"},attrs:{src:e.stakeIcon[0]}}),a("img",{staticStyle:{"margin-left":"-16px","margin-top":"8px","border-radius":"50%"},attrs:{src:e.stakeIcon[1]}})]),a("span",[t._v(t._s(e.stake))])]),a("div",{staticClass:"farmContentMid left-center-text flex1"},[a("img",{attrs:{src:e.earnIcon}}),a("span",[t._v(t._s(e.earn))])]),a("div",{staticClass:"farmContentRight right-center-text flex1"},[t._v(t._s(e.apr?e.apr:0)+" %")])]),a("div",{staticClass:"airdrop right-center-text padding13"},[t._v(" "+t._s(1==e.status?"Paused":">>"+t.$t("Enter"))+" ")])])}))],2)],1)])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("img",{staticClass:"titleImg",attrs:{src:a("b1fe"),alt:""}})])}],n=a("5530"),c=a("1da1"),i=(a("4e82"),a("96cf"),a("2f62")),o=a("164c"),f=a("84d7"),u=a("a232"),d=a("ed8c"),l={components:{SelectList:o["a"]},data:function(){return{network:"bsc",farmList:[],routerContact:null,showActive:!0}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.network=t.$route.query.network,"0x000000000000"!==t.did){e.next=6;break}t.setShowRegister(!0),t.setMustRegister(!0),e.next=9;break;case 6:return e.next=8,t.getfarmsData(t.network);case 8:t.setSort("APR");case 9:case"end":return e.stop()}}),e)})))()},computed:Object(n["a"])({},Object(i["c"])(["did"])),methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])(["setShowRegister","setMustRegister"])),{},{setStatus:function(t){this.showActive=t},setSort:function(t){switch(t){case"HOT":this.farmList.sort((function(t,e){return t.index-e.index}));break;case"APR":this.farmList.sort((function(t,e){return e.apr-t.apr}));break}},getfarmsData:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var r,s,n,c,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r=e.$config.project.farms[t],s=e.$route.query.token,e.routerContact=new e.$web3Obj.web3.eth.Contract(e.$config.abi.router,e.$config.project.network[t].router),n=0;case 4:if(!(n<r.length)){a.next=20;break}if(c=r[n],c.earn===s){a.next=8;break}return a.abrupt("continue",17);case 8:if("MT"!==c.earn||Object(u["isWhite"])(d["a"],e.$web3Obj.currentAddress)){a.next=10;break}return a.abrupt("continue",17);case 10:return e.farmList.push(c),c.index=n,i=new e.$web3Obj.web3.eth.Contract(e.$config.abi[c.contractType],c.contractAddress),a.next=15,i.methods.overview().call();case 15:o=a.sent,e.getApr(c,o);case 17:n++,a.next=4;break;case 20:case"end":return a.stop()}}),a)})))()},getApr:function(t,e){var a=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var s,n,c,i,o,d,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,1!==t.status){r.next=5;break}a.$set(t,"apr",0),r.next=26;break;case 5:if("MiningWithO3"===t.contractType?(n=e.poolInfo.rewardPerBlock,c=e.poolInfo.stakeToken,i=e.poolInfo.currentStaked):(n=e._rewardPerBlock,c=e._stakeToken,i=e._currentStaked),o=0,0==i){r.next=25;break}if(!t.poolAddress){r.next=14;break}return r.next=11,Object(f["getO3PairTokenAmount"])(t.poolAddress,i,t.path[0]);case 11:s=r.sent,r.next=17;break;case 14:return r.next=16,Object(f["getPairTokenAmount"])(c,i,t.path[0]);case 16:s=r.sent;case 17:return r.next=19,Object(f["getUSDTValue"])(t.path,a.$config.project.network[a.$route.query.network].router);case 19:return o=r.sent,d=new a.$web3Obj.web3.eth.Contract(a.$config.abi.token,t.path[0]),r.next=23,d.methods.decimals().call();case 23:l=r.sent,o=Object(u["divs"])(2,100*n*365*24*60*60/3.2,Object(u["transformationNumber"])(2*s,18,l),o);case 25:a.$set(t,"apr",o);case 26:r.next=31;break;case 28:r.prev=28,r.t0=r["catch"](0),console.log(r.t0);case 31:case"end":return r.stop()}}),r,null,[[0,28]])})))()},toDetail:function(t){"PoolingWithToken"===t.contractType||"MiningWithTokenV2"===t.contractType?this.$router.push("/farmDetail?index="+t.index):"MiningWithTokenLPBeefy"===t.contractType?this.$router.push("/farmDetail1?index="+t.index):"MiningWithTokenLPDog"===t.contractType?this.$router.push("/farmDetail2?index="+t.index):this.$router.push("/farmDetail3?index="+t.index)}})},b=l,h=(a("03e8"),a("2877")),x=Object(h["a"])(b,r,s,!1,null,"7f30af0a",null);e["default"]=x.exports},"4e82":function(t,e,a){"use strict";var r=a("23e7"),s=a("e330"),n=a("59ed"),c=a("7b0b"),i=a("07fa"),o=a("577e"),f=a("d039"),u=a("addb"),d=a("a640"),l=a("04d1"),b=a("d998"),h=a("2d00"),x=a("512c"),v=[],p=s(v.sort),A=s(v.push),C=f((function(){v.sort(void 0)})),m=f((function(){v.sort(null)})),F=d("sort"),w=!f((function(){if(h)return h<70;if(!(l&&l>3)){if(b)return!0;if(x)return x<603;var t,e,a,r,s="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(r=0;r<47;r++)v.push({k:e+r,v:a})}for(v.sort((function(t,e){return e.v-t.v})),r=0;r<v.length;r++)e=v[r].k.charAt(0),s.charAt(s.length-1)!==e&&(s+=e);return"DGBEFHACIJK"!==s}})),E=C||!m||!F||!w,D=function(t){return function(e,a){return void 0===a?-1:void 0===e?1:void 0!==t?+t(e,a)||0:o(e)>o(a)?1:-1}};r({target:"Array",proto:!0,forced:E},{sort:function(t){void 0!==t&&n(t);var e=c(this);if(w)return void 0===t?p(e):p(e,t);var a,r,s=[],o=i(e);for(r=0;r<o;r++)r in e&&A(s,e[r]);u(s,D(t)),a=s.length,r=0;while(r<a)e[r]=s[r++];while(r<o)delete e[r++];return e}})},"512c":function(t,e,a){var r=a("342f"),s=r.match(/AppleWebKit\/(\d+)\./);t.exports=!!s&&+s[1]},"6ed0":function(t,e,a){},"7c70":function(t,e,a){},a0b7:function(t,e,a){"use strict";a("6ed0")},addb:function(t,e,a){var r=a("f36a"),s=Math.floor,n=function(t,e){var a=t.length,o=s(a/2);return a<8?c(t,e):i(t,n(r(t,0,o),e),n(r(t,o),e),e)},c=function(t,e){var a,r,s=t.length,n=1;while(n<s){r=n,a=t[n];while(r&&e(t[r-1],a)>0)t[r]=t[--r];r!==n++&&(t[r]=a)}return t},i=function(t,e,a,r){var s=e.length,n=a.length,c=0,i=0;while(c<s||i<n)t[c+i]=c<s&&i<n?r(e[c],a[i])<=0?e[c++]:a[i++]:c<s?e[c++]:a[i++];return t};t.exports=n},b1fe:function(t,e,a){t.exports=a.p+"static/img/farms.a462518b.png"},d998:function(t,e,a){var r=a("342f");t.exports=/MSIE|Trident/.test(r)},ed8c:function(t,e,a){"use strict";e["a"]={open:!1,address:["0xc5998AC4E00e89E8F122949757f03E796eE97220","0x30435EebfD1372bF850EF93E0567B8f96eb775B0","0xF3B98134F4Dff80EC5D7767b942a9e3A1ee468D3","0xF731507F0d5C150905d2004931a56703eD7dFE0E","0xDA8262a46257B1103f5D59a2f7EA09b8bD21142F","0x34558283eF3dD370c8F2c9D4B57Aa3B828c256A4","0x37A9A58105cBbfF51f30c196b85C6E60EBa74210","0xB60fc82be992dc39C0732AE41c72f384F437bA06","0x1787f7377453eb2fFE2bDb1f68d43C8d169E9757","0x308244C68e73F99436cC9E458f14E4f0e96369f9","0x52573eb4B84E1a4C07E437e273388F55009d1aC1","0x96CcbEcEfD84F03Ba57F74e65d909DA539f16B82","0x0852989Be0BF6Ec85C1612a6117196CA75CC5665","0xbe0b82a5FD22D5Ad87EcdA7307F185e905934559","0xa2932aF43B320030ec3587Bf6f1894F0E068f056","0xF5747395b634f2D278417E941F01963FBd05d6fe","0x24FBB398AdAdF6F84Ed8a9D177f8A73d17622899","0xa36Ca8A6a603d8B066277B4BB50ea62686451a3c","0x04F27FC38502c44ff9A716F3096D442A1AF13E8d","0x3Ee6A8BFDC39421669E65c45f3779eBBBb686A8a","0xf1436181F6df263c542265796d9d8491d31fD0f3","0xe831a3901Da2DDcFd94E1f0717b3416942fEE7ef","0x3c83C15fabb2B6a5d2D094483233629807DA7fce","0x98013506CF00dca432C2c7ee34a6a990Ff21b85a","0x4b6b67B47674337f9b43E8673E00bd970D27A472","0xFbbF3bC6EaccA985D9D07e5Eb843D5CD27DAdbf4","0x17a90d94F67a0EF2c7fCe579f03f14FB8564a2e1","0xC18cD8E6463f7Db3e604eB0D246907A5e81fDbcF","0xf5Ee3a031766E72f15206aC27cE7B6571d7768b6","0x002F7b176DC9cfFe74d0aB9f94492C1a4Ad27FAb","0x6247057D973F5429B0BA0A0DD94F7A3cE850833a","0x4446676b7FAe124311352Bc48dB66b3063A454fC","0x4C527B65780133AfB741Fc7F5AE1396314B86807","0x20B4043A3C8FB7C04A5cA07907CC1d0Fab59862D","0x0E7b69163f99AF031c913D6A9935FE5895a2ad9B","0xBE797a0fE7E044556C4ECBBB0FB8b9363AC8C2f8","0x24FBB398AdAdF6F84Ed8a9D177f8A73d17622899","0x0E7b69163f99AF031c913D6A9935FE5895a2ad9B"]}}}]);