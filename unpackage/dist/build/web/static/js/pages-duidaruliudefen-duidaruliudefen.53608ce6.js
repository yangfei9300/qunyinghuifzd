(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-duidaruliudefen-duidaruliudefen"],{"7d7e":function(t,e,i){"use strict";var n=i("d569"),o=i.n(n);o.a},"7dd9":function(t,e,i){t.exports=i.p+"static/datibottom.jpg"},"966f":function(t,e,i){"use strict";i.r(e);var n=i("eb5c"),o=i("cd73");for(var s in o)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("7d7e");var a=i("828b"),c=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"00ff66c4",null,!1,n["a"],void 0);e["default"]=c.exports},aea2:function(t,e,i){t.exports=i.p+"static/datitop.jpg"},b98d:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"Hello",screenHeightPx:0,img1:0,img2:0,List:[]}},onLoad:function(){var t=uni.getSystemInfoSync(),e=t.screenWidth,i=t.screenHeight;console.log("屏幕的原始高");var n=750/e,o=n*i;this.screenHeightPx=o,console.log(n,e,i,o),this.getTestList()},methods:{getTestList:function(){var t=this,e={uuid:uni.getStorageSync("userId")};this.$axios.axios("POST",this.$paths.getTestList,e).then((function(e){1==e.code?t.List=e.data:t.$tools.showToast(e.info)})).catch((function(t){console.log("错误回调",t)}))},imgload:function(t,e){console.log("阿萨德",t,e),1==e&&(this.img1=t.detail.height/2),2==e&&(this.img2=t.detail.height/2),this.img1>0&&this.img2>0&&(console.log("默认高",this.screenHeightPx),console.log("img1",this.img1),console.log("img2",this.img2))}}};e.default=n},cd73:function(t,e,i){"use strict";i.r(e);var n=i("b98d"),o=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=o.a},d569:function(t,e,i){var n=i("f7bf");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("967d").default;o("5a43a9ba",n,!0,{sourceMap:!1,shadowMode:!1})},eb5c:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"colonn"},[n("v-uni-image",{staticClass:"w-750",attrs:{src:i("aea2"),mode:"widthFix"},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.imgload(e,1)}}}),n("v-uni-view",{staticClass:"colonn w-750 cenbterbg  center_center",style:{height:t.screenHeightPx-t.img1-t.img2+"rpx"}},[n("v-uni-scroll-view",{style:{height:t.screenHeightPx-t.img1-t.img2-200+"rpx"},attrs:{"scroll-y":!0}},[t._l(t.List,(function(e,i){return[n("v-uni-view",{staticClass:"roww rowsa p-bottom-40"},[n("v-uni-view",{staticClass:"w-100 cebtees"},[t._v(t._s(i+1)+".")]),n("v-uni-view",{staticClass:"w-208 cebtees"},[t._v(t._s(e.username))]),e.score?n("v-uni-view",{staticClass:"fw-700 w-208 cebtees",staticStyle:{color:"green"}},[t._v(t._s(e.score)+"分")]):n("v-uni-view",{staticClass:"w-208 cebtees"},[t._v("未打分")])],1)]}))],2)],1),n("v-uni-image",{staticClass:"w-750",attrs:{src:i("7dd9"),mode:"widthFix"},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.imgload(e,2)}}})],1)],1)},o=[]},f7bf:function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,".cenbterbg[data-v-00ff66c4]{background-image:url(/static/centerlogin.jpg);background-size:100% 100%}.inputview[data-v-00ff66c4]{border:1px solid #c9c9c9;width:%?650?%;padding:%?25?% %?25?%;border-radius:%?15?%}.btns[data-v-00ff66c4]{\r\n\t/* background-color:     #E17535; */background-color:#e7942e;color:#fff;height:%?100?%;width:%?650?%;border-radius:%?15?%;text-align:center;line-height:%?100?%}.textawa[data-v-00ff66c4]{border:1px solid #c9c9c9;padding:%?25?% %?25?%;border-radius:%?15?%;width:%?690?%}.btns1[data-v-00ff66c4]{\r\n\t/* background-color:     #E17535; */\r\n\t/* background-color:#E7942E; */color:#fff;\r\n\t/* height: 70rpx; */\r\n\t/* width: 250rpx; */border-radius:%?15?%;text-align:center;line-height:%?70?%;color:#e7942e;font-weight:700}.type1[data-v-00ff66c4]{font-size:%?40?%;height:%?90?%;border:%?5?% solid #e7942e;width:%?400?%;text-align:center;line-height:%?90?%;font-weight:700;color:#e7942e;border-radius:%?15?%;box-shadow:#e7942e 0 0 %?8?% %?5?%}.cebtees[data-v-00ff66c4]{text-align:center}",""]),t.exports=e}}]);