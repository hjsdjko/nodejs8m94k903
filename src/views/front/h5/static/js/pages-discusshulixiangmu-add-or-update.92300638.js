(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-discusshulixiangmu-add-or-update"],{"09b1":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-rate[data-v-23cde6a7]{display:-webkit-box;display:-webkit-flex;display:flex;line-height:1;font-size:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;cursor:pointer}.uni-rate__icon[data-v-23cde6a7]{position:relative;line-height:1;font-size:0}.uni-rate__icon-on[data-v-23cde6a7]{overflow:hidden;position:absolute;top:0;left:0;line-height:1;text-align:left}.uni-cursor-not-allowed[data-v-23cde6a7]{cursor:not-allowed!important}',""]),e.exports=t},"13f1":function(e,t,n){"use strict";var i={"uni-icons":n("2ba4").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{ref:"uni-rate",staticClass:"uni-rate"},e._l(e.stars,(function(t,i){return n("v-uni-view",{key:i,staticClass:"uni-rate__icon",class:{"uni-cursor-not-allowed":e.disabled},style:{"margin-right":e.marginNumber+"px"},on:{touchstart:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.touchstart.apply(void 0,arguments)},touchmove:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.touchmove.apply(void 0,arguments)},mousedown:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.mousedown.apply(void 0,arguments)},mousemove:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.mousemove.apply(void 0,arguments)},mouseleave:function(t){arguments[0]=t=e.$handleEvent(t),e.mouseleave.apply(void 0,arguments)}}},[n("uni-icons",{attrs:{color:e.color,size:e.size,type:e.isFill?"star-filled":"star"}}),n("v-uni-view",{staticClass:"uni-rate__icon-on",style:{width:t.activeWitch}},[n("uni-icons",{attrs:{color:e.disabled?e.disabledColor:e.activeColor,size:e.size,type:"star-filled"}})],1)],1)})),1)],1)},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},"1a74":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("f559"),n("a481"),n("3b2b"),n("ac6a"),n("28a5"),n("c5f6"),n("96cf");var r=i(n("3b8d")),a=i(n("f96a")),s=i(n("e2b1")),o=i(n("064f")),u=i(n("bd56")),c={data:function(){return{cross:"",ruleForm:{refid:"",userid:"",avatarurl:"",nickname:"",content:"",score:"",reply:""},user:{},ro:{refid:!1,userid:!1,avatarurl:!1,nickname:!1,content:!1,score:!1,reply:!1}}},components:{wPicker:s.default,xiaEditor:o.default,multipleSelect:u.default,uniRate:a.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(t){var n,i,r,a,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(n);case 3:if(i=e.sent,this.user=i.data,this.ruleForm.userid=uni.getStorageSync("appUserid"),t.refid&&(this.ruleForm.refid=Number(t.refid),this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=13;break}return this.ruleForm.id=t.id,e.next=11,this.$api.info("discusshulixiangmu",this.ruleForm.id);case 11:i=e.sent,this.ruleForm=i.data;case 13:if(this.cross=t.cross,!t.cross){e.next=49;break}r=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(r);case 17:if((e.t1=e.t0()).done){e.next=49;break}if(a=e.t1.value,"refid"!=a){e.next=23;break}return this.ruleForm.refid=r[a],this.ro.refid=!0,e.abrupt("continue",17);case 23:if("userid"!=a){e.next=27;break}return this.ruleForm.userid=r[a],this.ro.userid=!0,e.abrupt("continue",17);case 27:if("avatarurl"!=a){e.next=31;break}return this.ruleForm.avatarurl=r[a].split(",")[0],this.ro.avatarurl=!0,e.abrupt("continue",17);case 31:if("nickname"!=a){e.next=35;break}return this.ruleForm.nickname=r[a],this.ro.nickname=!0,e.abrupt("continue",17);case 35:if("content"!=a){e.next=39;break}return this.ruleForm.content=r[a],this.ro.content=!0,e.abrupt("continue",17);case 39:if("score"!=a){e.next=43;break}return this.ruleForm.score=r[a],this.ro.score=!0,e.abrupt("continue",17);case 43:if("reply"!=a){e.next=47;break}return this.ruleForm.reply=r[a],this.ro.reply=!0,e.abrupt("continue",17);case 47:e.next=17;break;case 49:this.styleChange(),this.$forceUpdate(),uni.getStorageSync("raffleType")&&null!=uni.getStorageSync("raffleType")&&(uni.removeStorageSync("raffleType"),setTimeout((function(){s.onSubmitTap()}),300));case 52:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{contentChange:function(e){this.ruleForm.content=e},styleChange:function(){this.$nextTick((function(){}))},avatarurlTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.avatarurl="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){var t,n,i,r,a,s,o,u,c,l,d,h,f,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(this.ruleForm.avatarurl=uni.getStorageSync("headportrait")?uni.getStorageSync("headportrait"):"",t="",n=[],t&&(n=t.split(",")),i=0;i<n.length;i++)r=new RegExp(n[i],"g"),this.ruleForm.content.indexOf(n[i])>-1&&(this.ruleForm.content=this.ruleForm.content.replace(r,"**"));if(this.ruleForm.refid){e.next=8;break}return this.$utils.msg("关联表id不能为空"),e.abrupt("return");case 8:if(this.ruleForm.userid){e.next=11;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 11:if(this.ruleForm.content){e.next=14;break}return this.$utils.msg("评论内容不能为空"),e.abrupt("return");case 14:if(!this.ruleForm.score||this.$validate.isNumber(this.ruleForm.score)){e.next=17;break}return this.$utils.msg("评分应输入数字"),e.abrupt("return");case 17:if(!this.cross){e.next=34;break}if(uni.setStorageSync("crossCleanType",!0),c=uni.getStorageSync("statusColumnName"),l=uni.getStorageSync("statusColumnValue"),""==c){e.next=34;break}if(a||(a=uni.getStorageSync("crossObj")),c.startsWith("[")){e.next=30;break}for(d in a)d==c&&(a[d]=l);return h=uni.getStorageSync("crossTable"),e.next=28,this.$api.update("".concat(h),a);case 28:e.next=34;break;case 30:s=Number(uni.getStorageSync("appUserid")),o=a["id"],u=uni.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 34:if(!o||!s){e.next=58;break}return this.ruleForm.crossuserid=s,this.ruleForm.crossrefid=o,f={page:1,limit:10,crossuserid:s,crossrefid:o},e.next=40,this.$api.list("discusshulixiangmu",f);case 40:if(p=e.sent,!(p.data.total>=u)){e.next=47;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 47:if(!this.ruleForm.id){e.next=52;break}return e.next=50,this.$api.update("discusshulixiangmu",this.ruleForm);case 50:e.next=54;break;case 52:return e.next=54,this.$api.add("discusshulixiangmu",this.ruleForm);case 54:uni.setStorageSync("discusshulixiangmuCleanType",!0),this.$utils.msgBack("提交成功");case 56:e.next=67;break;case 58:if(!this.ruleForm.id){e.next=63;break}return e.next=61,this.$api.update("discusshulixiangmu",this.ruleForm);case 61:e.next=65;break;case 63:return e.next=65,this.$api.add("discusshulixiangmu",this.ruleForm);case 65:uni.setStorageSync("discusshulixiangmuCleanType",!0),this.$utils.msgBack("提交成功");case 67:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)},toggleTab:function(e){if(this.ro[e])return!1;this.$refs[e].show()}}};t.default=c},2861:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-739b2d3c]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t},"3aa7":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("c5f6");var r=i(n("2ba4")),a={name:"UniRate",props:{isFill:{type:[Boolean,String],default:!0},color:{type:String,default:"#ececec"},activeColor:{type:String,default:"#ffca3e"},disabledColor:{type:String,default:"#c0c0c0"},size:{type:[Number,String],default:24},value:{type:[Number,String],default:0},modelValue:{type:[Number,String],default:0},max:{type:[Number,String],default:5},margin:{type:[Number,String],default:0},disabled:{type:[Boolean,String],default:!1},readonly:{type:[Boolean,String],default:!1},allowHalf:{type:[Boolean,String],default:!1},touchable:{type:[Boolean,String],default:!0}},data:function(){return{valueSync:"",userMouseFristMove:!0,userRated:!1,userLastRate:1}},watch:{value:function(e){this.valueSync=Number(e)},modelValue:function(e){this.valueSync=Number(e)}},computed:{stars:function(){for(var e=this.valueSync?this.valueSync:0,t=[],n=Math.floor(e),i=Math.ceil(e),r=0;r<this.max;r++)n>r?t.push({activeWitch:"100%"}):i-1===r?t.push({activeWitch:100*(e-n)+"%"}):t.push({activeWitch:"0"});return t},marginNumber:function(){return Number(this.margin)}},components:{uniIcons:r.default},created:function(){this.valueSync=Number(this.value||this.modelValue),this._rateBoxLeft=0,this._oldValue=null},mounted:function(){var e=this;setTimeout((function(){e._getSize()}),100),this.PC=this.IsPC()},methods:{touchstart:function(e){if(!this.IsPC()&&!this.readonly&&!this.disabled){var t=e.changedTouches[0],n=t.clientX,i=t.screenX;this._getRateCount(n||i)}},touchmove:function(e){if(!this.IsPC()&&!this.readonly&&!this.disabled&&this.touchable){var t=e.changedTouches[0],n=t.clientX,i=t.screenX;this._getRateCount(n||i)}},mousedown:function(e){if(this.IsPC()&&!this.readonly&&!this.disabled){var t=e.clientX;this.userLastRate=this.valueSync,this._getRateCount(t),this.userRated=!0}},mousemove:function(e){if(this.IsPC()&&!this.userRated&&(this.userMouseFristMove&&(console.log("---mousemove----",this.valueSync),this.userLastRate=this.valueSync,this.userMouseFristMove=!1),!this.readonly&&!this.disabled&&this.touchable)){var t=e.clientX;this._getRateCount(t)}},mouseleave:function(e){this.IsPC()&&(this.readonly||this.disabled||!this.touchable||(this.userRated?this.userRated=!1:this.valueSync=this.userLastRate))},IsPC:function(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0,i=0;i<t.length-1;i++)if(e.indexOf(t[i])>0){n=!1;break}return n},_getRateCount:function(e){this._getSize();var t=Number(this.size);if(isNaN(t))return new Error("size 属性只能设置为数字");var n=e-this._rateBoxLeft,i=parseInt(n/(t+this.marginNumber));i=i<0?0:i,i=i>this.max?this.max:i;var r=parseInt(n-(t+this.marginNumber)*i),a=0;(this._oldValue!==i||this.PC)&&(this._oldValue=i,a=this.allowHalf?r>t/2?i+1:i+.5:i+1,a=Math.max(.5,Math.min(a,this.max)),this.valueSync=a,this._onChange())},_onChange:function(){this.$emit("input",this.valueSync),this.$emit("update:modelValue",this.valueSync),this.$emit("change",{value:this.valueSync})},_getSize:function(){var e=this;uni.createSelectorQuery().in(this).select(".uni-rate").boundingClientRect().exec((function(t){t&&(e._rateBoxLeft=t[0].left)}))}}};t.default=a},"3c90":function(e,t,n){var i=n("09b1");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("67835ab7",i,!0,{sourceMap:!1,shadowMode:!1})},"80b9":function(e,t,n){var i=n("2861");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("69f87dcd",i,!0,{sourceMap:!1,shadowMode:!1})},bde0:function(e,t,n){"use strict";n.r(t);var i=n("1a74"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},d75d:function(e,t,n){"use strict";var i={"xia-editor":n("064f").default,"uni-rate":n("f96a").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{style:{minHeight:"100vh",width:"100%",padding:"24rpx",position:"relative",background:"url(http://codegen.caihongy.cn/20240112/23f959aa396c4607b2f20ed40caa81e9.jpg) no-repeat center top / 100% auto,#f5f5f5",height:"auto"}},[n("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx",borderRadius:"16rpx",background:"#fff",display:"block",height:"auto"}},[n("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",borderWidth:"0 0 0px 0",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{margin:"0 0 0 24rpx",color:"#999",width:"auto",lineHeight:"80rpx",fontSize:"28rpx",minWidth:"160rpx",fontWeight:"500"}},[e._v("评论内容")]),n("xia-editor",{ref:"editor",style:{border:"2rpx solid #ddd",minHeight:"360rpx",padding:"20rpx",color:"#666",borderRadius:"8rpx",background:"rgba(255,255,255,.6)",width:"100%",height:"auto"},attrs:{placeholder:"评论内容"},on:{editorChange:function(t){arguments[0]=t=e.$handleEvent(t),e.contentChange.apply(void 0,arguments)}},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),n("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",borderWidth:"0 0 0px 0",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{margin:"0 0 0 24rpx",color:"#999",width:"auto",lineHeight:"80rpx",fontSize:"28rpx",minWidth:"160rpx",fontWeight:"500"}},[e._v("评分")]),n("uni-rate",{model:{value:e.ruleForm.score,callback:function(t){e.$set(e.ruleForm,"score",t)},expression:"ruleForm.score"}})],1),n("v-uni-view",{staticClass:"btn",style:{width:"100%",flexWrap:"wrap",justifyContent:"space-between",display:"flex",height:"auto"}},[n("v-uni-button",{staticClass:"bg-red",style:{border:"0",padding:"0px",margin:"0 0 40rpx",color:"#fff",borderRadius:"32rpx",background:"#4AB030",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},e57c:function(e,t,n){"use strict";n.r(t);var i=n("d75d"),r=n("bde0");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("f168");var s,o=n("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"739b2d3c",null,!1,i["a"],s);t["default"]=u.exports},ee20:function(e,t,n){"use strict";var i=n("3c90"),r=n.n(i);r.a},f168:function(e,t,n){"use strict";var i=n("80b9"),r=n.n(i);r.a},f599:function(e,t,n){"use strict";n.r(t);var i=n("3aa7"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},f96a:function(e,t,n){"use strict";n.r(t);var i=n("13f1"),r=n("f599");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("ee20");var s,o=n("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"23cde6a7",null,!1,i["a"],s);t["default"]=u.exports}}]);