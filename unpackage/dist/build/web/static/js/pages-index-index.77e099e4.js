(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"092d":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"Hello",screenHeightPx:0,img1:0,img2:0}},onLoad:function(){var t=uni.getSystemInfoSync(),e=t.screenWidth,i=t.screenHeight;console.log("屏幕的原始高");var n=750/e,o=n*i;this.screenHeightPx=o,console.log(n,e,i,o)},methods:{topage:function(t){1==t?uni.navigateTo({url:"/pages/duidaruliudefen/duidaruliudefen"}):2==t&&uni.navigateTo({url:"/pages/fangxiang/fangxiang"})},imgload:function(t,e){console.log("阿萨德",t,e),1==e&&(this.img1=t.detail.height/2),2==e&&(this.img2=t.detail.height/2),this.img1>0&&this.img2>0&&(console.log("默认高",this.screenHeightPx),console.log("img1",this.img1),console.log("img2",this.img2))}}};e.default=n},"0d01":function(t,e,i){var n=i("b9c7");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("967d").default;o("cdd16ef2",n,!0,{sourceMap:!1,shadowMode:!1})},"54be":function(t,e,i){"use strict";i.r(e);var n=i("fcd2"),o=i("6d6a");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("8687");var r=i("828b"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"79e23279",null,!1,n["a"],void 0);e["default"]=c.exports},"6d6a":function(t,e,i){"use strict";i.r(e);var n=i("092d"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"7dd9":function(t,e,i){t.exports=i.p+"static/datibottom.jpg"},8687:function(t,e,i){"use strict";var n=i("0d01"),o=i.n(n);o.a},aea2:function(t,e,i){t.exports=i.p+"static/datitop.jpg"},b9c7:function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,".cenbterbg[data-v-79e23279]{background-image:url(/static/centerlogin.jpg);background-size:100% 100%}.inputview[data-v-79e23279]{border:1px solid #c9c9c9;width:%?650?%;padding:%?25?% %?25?%;border-radius:%?15?%}.btns[data-v-79e23279]{\r\n\t/* background-color:     #E17535; */background-color:#e7942e;color:#fff;height:%?100?%;width:%?650?%;border-radius:%?15?%;text-align:center;line-height:%?100?%}.textawa[data-v-79e23279]{border:1px solid #c9c9c9;padding:%?25?% %?25?%;border-radius:%?15?%;width:%?690?%}.btns1[data-v-79e23279]{\r\n\t/* background-color:     #E17535; */\r\n\t/* background-color:#E7942E; */color:#fff;\r\n\t/* height: 70rpx; */\r\n\t/* width: 250rpx; */border-radius:%?15?%;text-align:center;line-height:%?70?%;color:#e7942e;font-weight:700}.type1[data-v-79e23279]{font-size:%?40?%;height:%?90?%;border:%?5?% solid #e7942e;width:%?400?%;text-align:center;line-height:%?90?%;font-weight:700;color:#e7942e;border-radius:%?15?%;box-shadow:#e7942e 0 0 %?8?% %?5?%}",""]),t.exports=e},fcd2:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"colonn"},[n("v-uni-image",{staticClass:"w-750",attrs:{src:i("aea2"),mode:"widthFix"},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.imgload(e,1)}}}),n("v-uni-view",{staticClass:"colonn w-750 cenbterbg  center_center",style:{height:t.screenHeightPx-t.img1-t.img2+"rpx"}},[n("v-uni-view",{staticClass:"colonn"},[n("v-uni-view",{staticClass:"type1",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.topage(1)}}},[t._v("对答如流得分")]),n("v-uni-view",{staticClass:"h-100"}),n("v-uni-view",{staticClass:"type1",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.topage(2)}}},[t._v("方向列表")])],1)],1),n("v-uni-image",{staticClass:"w-750",attrs:{src:i("7dd9"),mode:"widthFix"},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.imgload(e,2)}}})],1)],1)},o=[]}}]);