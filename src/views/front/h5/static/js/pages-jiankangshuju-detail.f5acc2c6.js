(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jiankangshuju-detail"],{"187a":function(t,i,e){"use strict";e.r(i);var a=e("92e3"),n=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);i["default"]=n.a},"1c91":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-02d47630]{--animate-duration:1s;--animate-delay:1s;--animate-repeat:1}.content[data-v-02d47630]{min-height:calc(100vh - 44px);box-sizing:border-box}.seat-list[data-v-02d47630]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;background:#fff;margin:%?20?%;border-radius:%?20?%;padding:%?20?%;font-size:%?30?%}.seat-list .seat-item[data-v-02d47630]{width:33.33%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?20?%}.seat-list .seat-item .seat-icon[data-v-02d47630]{width:%?50?%;height:%?50?%;margin-bottom:%?10?%}uni-audio[data-v-02d47630]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.audio[data-v-02d47630] .uni-audio-default{width:inherit}',""]),t.exports=i},"25b9":function(t,i,e){"use strict";var a={"mescroll-uni":e("f05e").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption},on:{init:function(i){arguments[0]=i=t.$handleEvent(i),t.mescrollInit.apply(void 0,arguments)},down:function(i){arguments[0]=i=t.$handleEvent(i),t.downCallback.apply(void 0,arguments)},up:function(i){arguments[0]=i=t.$handleEvent(i),t.upCallback.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"container",style:{minHeight:"100vh",width:"100%",padding:"0",position:"relative",background:"url(http://codegen.caihongy.cn/20240112/23f959aa396c4607b2f20ed40caa81e9.jpg) no-repeat center top / 100% auto,#f5f5f5",height:"auto"}},[e("v-uni-swiper",{staticClass:"swiper",style:{width:"100%",background:"none",height:"480rpx"},attrs:{"indicator-dots":!0,autoplay:!0,circular:!0,"indicator-active-color":"#339933","indicator-color":"rgba(0, 0, 0, .3)",duration:500,interval:5e3,vertical:!1}},t._l(t.swiperList,(function(i,a){return e("v-uni-swiper-item",{key:a,style:{width:"100%",background:"none",height:"100%"}},["http"==i.substring(0,4)?e("v-uni-image",{style:{width:"100%",objectFit:"contain",background:"none",display:"block",height:"100%"},attrs:{mode:"aspectFill",src:i}}):e("v-uni-image",{style:{width:"100%",objectFit:"contain",background:"none",display:"block",height:"100%"},attrs:{mode:"aspectFill",src:t.baseUrl+i}})],1)})),1),e("v-uni-view",{staticClass:"detail-content",style:{padding:"0px",flexWrap:"wrap",background:"none",display:"flex",width:"100%",justifyContent:"space-between",height:"auto"}},[e("v-uni-view",{staticClass:"detail-list-item title",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 2rpx 0",background:"#fff",display:"flex",width:"calc(100% - 48rpx)",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 10rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("机构名称：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.jigoumingcheng))])],1),e("v-uni-view",{staticClass:"detail-list-item title",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 2rpx 0",background:"#fff",display:"flex",width:"calc(100% - 48rpx)",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 10rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("床位号：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.chuangweihao))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 2rpx 0",background:"#fff",display:"flex",width:"calc(100% - 48rpx)",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 10rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("日期：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.riqi))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 2rpx 0",background:"#fff",display:"flex",width:"calc(100% - 48rpx)",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 10rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("体温：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.tiwen))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 2rpx 0",background:"#fff",display:"flex",width:"calc(100% - 48rpx)",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 10rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("血压：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.xueya))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 2rpx 0",background:"#fff",display:"flex",width:"calc(100% - 48rpx)",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 10rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("血脂：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.xuezhi))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 2rpx 0",background:"#fff",display:"flex",width:"calc(100% - 48rpx)",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 10rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("血糖：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.xuetang))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 2rpx 0",background:"#fff",display:"flex",width:"calc(100% - 48rpx)",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 10rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("心率：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.xinlv))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 2rpx 0",background:"#fff",display:"flex",width:"calc(100% - 48rpx)",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 10rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("备注：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.beizhu))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 2rpx 0",background:"#fff",display:"flex",width:"calc(100% - 48rpx)",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 10rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("用户账号：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.yonghuzhanghao))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 2rpx 0",background:"#fff",display:"flex",width:"calc(100% - 48rpx)",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 10rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("用户姓名：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.yonghuxingming))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 2rpx 0",background:"#fff",display:"flex",width:"calc(100% - 48rpx)",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 10rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("家属账号：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.jiashuzhanghao))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 2rpx 0",background:"#fff",display:"flex",width:"calc(100% - 48rpx)",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 10rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("家属姓名：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.jiashuxingming))])],1),e("v-uni-view",{staticClass:"bottom-content bg-white tabbar border shop",style:{padding:"0px 24rpx",margin:"20rpx 0 24rpx 0",borderRadius:"16rpx",flexWrap:"wrap",background:"none",display:"flex",width:"100%",height:"auto",order:"9"}})],1)],1)],1)],1)],1)},r=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return a}))},"92e3":function(t,i,e){"use strict";var a=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("28a5"),e("ac6a"),e("f559"),e("55dd"),e("96cf");var n=a(e("3b8d")),r={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},count:0,timer:null,title:""}},components:{},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(i){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(e);case 3:a=t.sent,this.user=a.data,this.id=i.id,i.userid&&(this.userid=i.userid),this.init();case 8:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}(),onUnload:function(){this.timer&&clearInterval(this.timer)},onShow:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(i){var e,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(e);case 3:if(a=t.sent,this.user=a.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),n=uni.getStorageSync("crossCleanType"),!n){t.next=14;break}return uni.removeStorageSync("crossCleanType"),t.next=11,this.$api.info("jiankangshuju",this.id);case 11:a=t.sent,this.detail=a.data,this.title=this.detail.jigoumingcheng;case 14:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}(),destroyed:function(){},methods:{callClick:function(t){uni.makePhoneCall({phoneNumber:t})},onPayTap:function(){var t=this;if(!this.user)return this.$utils.msg("请先登录"),setTimeout((function(){t.$utils.jump("../login/login")}),1500),!1;uni.setStorageSync("paytable","jiankangshuju"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(t){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(t.id,"&userid=")+this.userid)},onAcrossTap:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(i,e,a,n,r,l){var s,o,d,u=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(u.length>6&&void 0!==u[6]?u[6]:1,s=this,this.user){t.next=6;break}return this.$utils.msg("请先登录"),setTimeout((function(){s.$utils.jump("../login/login")}),1500),t.abrupt("return",!1);case 6:if(uni.setStorageSync("crossTable","jiankangshuju"),uni.setStorageSync("crossObj",this.detail),uni.setStorageSync("statusColumnName",n),uni.setStorageSync("statusColumnValue",l),uni.setStorageSync("tips",r),""==n||n.startsWith("[")){t.next=21;break}o=uni.getStorageSync("crossObj"),t.t0=regeneratorRuntime.keys(o);case 14:if((t.t1=t.t0()).done){t.next=21;break}if(d=t.t1.value,d!=n||o[d]!=l){t.next=19;break}return this.$utils.msg(r),t.abrupt("return");case 19:t.next=14;break;case 21:this.$utils.jump("../".concat(i,"/add-or-update?cross=true"));case 22:case"end":return t.stop()}}),t,this)})));function i(i,e,a,n,r,l){return t.apply(this,arguments)}return i}(),init:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){var i,e,a=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=a.length>0&&void 0!==a[0]?a[0]:1,this.timer&&clearInterval(this.timer),t.next=4,this.$api.info("jiankangshuju",this.id);case 4:if(e=t.sent,this.detail=e.data,this.title=this.detail.jigoumingcheng,this.swiperList=this.detail.tupian?this.detail.tupian.split(","):[],2!=i){t.next=12;break}return this.detail.discussnum++,t.next=12,this.$api.update("jiankangshuju",this.detail);case 12:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i.endSuccess(i.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var i=this;t=i.$base.url+t,uni.downloadFile({url:t,success:function(e){200===e.statusCode&&(i.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")}}};i.default=r},a2ea:function(t,i,e){var a=e("1c91");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("90313daa",a,!0,{sourceMap:!1,shadowMode:!1})},b639f:function(t,i,e){"use strict";var a=e("a2ea"),n=e.n(a);n.a},c596:function(t,i,e){"use strict";e.r(i);var a=e("25b9"),n=e("187a");for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);e("b639f");var l,s=e("f0c5"),o=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"02d47630",null,!1,a["a"],l);i["default"]=o.exports}}]);