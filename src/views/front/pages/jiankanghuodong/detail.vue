
<template>
<view>
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view class="container" :style='{"minHeight":"100vh","width":"100%","padding":"0","position":"relative","background":"url(http://codegen.caihongy.cn/20240112/23f959aa396c4607b2f20ed40caa81e9.jpg) no-repeat center top / 100% auto,#f5f5f5","height":"auto"}'>
						<swiper :style='{"width":"100%","background":"none","height":"480rpx"}' class="swiper" :indicator-dots='true' :autoplay='true' :circular='true' indicator-active-color='#339933' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
				<swiper-item :style='{"width":"100%","background":"none","height":"100%"}' v-for="(swiper,index) in swiperList" :key="index">
					<image :style='{"width":"100%","objectFit":"contain","background":"none","display":"block","height":"100%"}' mode="aspectFill" v-if="swiper.substring(0,4)=='http'" :src="swiper"></image>
					<image :style='{"width":"100%","objectFit":"contain","background":"none","display":"block","height":"100%"}' mode="aspectFill" v-else :src="baseUrl+swiper"></image>
				</swiper-item>
			</swiper>
												            <view :style='{"padding":"0px","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}' class="detail-content">
				<view :style='{"padding":"0","margin":"40rpx auto 0","borderColor":"#d8d8d8","borderRadius":"16rpx 16rpx 0 0","flexWrap":"wrap","borderWidth":"0 0 0px 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"solid","justifyContent":"space-between","height":"auto"}' class="detail-list-item price">
					<view :style='{"width":"auto","padding":"0 24rpx"}' v-if="storeupFlag==1" @click="shoucang">
						<text class="icon iconfont icon-shoucang12" :style='{"margin":"0 4rpx 0 0","lineHeight":"48rpx","fontSize":"36rpx","color":"#f9860b"}'></text>
						<text :style='{"color":"#f9860b","lineHeight":"80rpx","fontSize":"28rpx"}'>已收藏</text>
					</view>
					<view :style='{"padding":"0 24rpx","margin":"0px 0 0","textAlign":"right","background":"none","width":"auto","minWidth":"160rpx","lineHeight":"80rpx","height":"80rpx"}' v-if="storeupFlag==0" @click="shoucang">
						<text class="icon iconfont icon-shoucang11" :style='{"padding":"0px","margin":"0","color":"#f60","borderRadius":"100%","textAlign":"right","background":"#fff","width":"auto","lineHeight":"48rpx","fontSize":"36rpx","height":"48rpx"}'></text>
						<text :style='{"padding":"0px 0px","lineHeight":"80rpx","fontSize":"28rpx","color":"#f60","borderRadius":"40rpx","background":"#fff"}'>收藏</text>
					</view>
				</view>

				<view :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}' class="detail-list-item title">
					<view :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="lable">活动名称：</view>
					<view :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}' class="text">{{detail.huodongmingcheng}}</view>
				</view>
				<view :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}' class="detail-list-item title">
					<view :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="lable">活动类型：</view>
					<view :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}' class="text">{{detail.huodongleixing}}</view>
				</view>
                <view :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}' class="detail-list-item" v-if="count<=0">
                	<view :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="lable">倒计时：</view>
                	<view :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}' class="text">该活动已结束</view>
                </view>
                <view :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}' class="detail-list-item" v-if="count>0">
                	<view :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="lable">倒计时：</view>
                	<view :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}' class="text">{{SecondToDate}}</view>
                </view>

				<view class="detail-list-item" :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>活动地点：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>{{detail.huodongdidian}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>活动状态：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>{{detail.huodongzhuangtai}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>可报人数：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>{{detail.kebaorenshu}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>联系方式：</view>
					<view style="text-decoration: underline" @tap="callClick(detail.lianxifangshi)"  class="text" :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>{{detail.lianxifangshi}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>点击次数：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>{{detail.clicknum}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>收藏数：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>{{detail.storeupnum}}</view>
				</view>





				<view class="detail-list-item rich" :style='{"padding":"0 24rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>活动内容：</view>
					<view class="rich-text" :style='{"width":"auto","padding":"0px 24rpx 24rpx 0","margin":"0","lineHeight":"48rpx","color":"#666","flex":"1"}'>
						<rich-text :nodes="detail.huodongneirong"></rich-text>
					</view>
				</view>



				<view class="bottom-content bg-white tabbar border shop" :style='{"padding":"0px 24rpx","margin":"20rpx 0 24rpx 0","borderRadius":"16rpx","flexWrap":"wrap","background":"none","display":"flex","width":"100%","height":"auto","order":"9"}'>

					<button :style='{"border":"0","padding":"0 20rpx","margin":"0 3% 20rpx 0","color":"#fff","borderRadius":"16rpx","background":"#38bf3e","width":"auto","fontSize":"28rpx","minWidth":"21%","lineHeight":"80rpx","height":"80rpx"}' v-if="userid&&isAuth('jiankanghuodong','报名')" @tap="onAcrossTap('huodongbaoming','','','[1]','已报名')" class="cu-btn bg-brown round shadow-blur" >报名</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0 3% 20rpx 0","color":"#fff","borderRadius":"16rpx","background":"#38bf3e","width":"auto","fontSize":"28rpx","minWidth":"21%","lineHeight":"80rpx","height":"80rpx"}' v-if="!userid&&isAuthFront('jiankanghuodong','报名')" @tap="onAcrossTap('huodongbaoming','','','[1]','已报名')" class="cu-btn bg-brown round shadow-blur" >报名</button>
					
				</view>
			</view>
		</view>
	</view>
</mescroll-uni>
</view>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				id: '',
                userid: '',
				detail: {},
				swiperList: [],
				commentList: [],
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 3, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				user: {},
				storeupFlag: 0,
				count: 0,
				timer: null,
				title:'',
			}
		},
		components: {
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
			SecondToDate: function() {
				var time = this.count;
				if (null != time && "" != time) {
					if (time > 60 && time < 60 * 60) {
						time =
							parseInt(time / 60.0) +
							"分钟" +
							parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60) +
							"秒";
					} else if (time >= 60 * 60 && time < 60 * 60 * 24) {
						time =
							parseInt(time / 3600.0) +
							"小时" +
							parseInt(
								(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
							) +
							"分钟" +
							parseInt(
								(parseFloat(
										(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
									) -
									parseInt(
										(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
									)) *
								60
							) +
							"秒";
					} else if (time >= 60 * 60 * 24) {
						time =
							parseInt(time / 3600.0 / 24) +
							"天" +
							parseInt(
								(parseFloat(time / 3600.0 / 24) - parseInt(time / 3600.0 / 24)) *
								24
							) +
							"小时" +
							parseInt(
								(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
							) +
							"分钟" +
							parseInt(
								(parseFloat(
										(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
									) -
									parseInt(
										(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
									)) *
								60
							) +
							"秒";
					} else {
						time = parseInt(time) + "秒";
					}
				}
				return time;
			},
		},
		async onLoad(options) {
			// #ifdef APP-PLUS
			let page = getCurrentPages()
			this.href = this.baseUrl + 'front/h5/#/' + page[page.length - 1].route
			// #endif
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			this.id = options.id;
            if(options.userid) {
                this.userid = options.userid;
            }
			// 渲染数据
			this.init();
		},
		// #ifdef MP-WEIXIN
		onShareAppMessage(){
			var obj = {
				title: this.title,
				imageUrl: this.swiperList[0]?this.baseUrl + this.swiperList[0]: ''
			}
			return obj
		},
		// #endif
        onUnload() {
            if(this.timer) {
                clearInterval(this.timer);
            }
        },
		async onShow(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			this.btnColor = this.btnColor.sort(()=> {
				return (0.5-Math.random());
			});
			this.getStoreup();
			let crossCleanType = uni.getStorageSync('crossCleanType')
            if(crossCleanType) {
				uni.removeStorageSync('crossCleanType')
                res = await this.$api.info('jiankanghuodong', this.id);
                this.detail = res.data;
				this.title = this.detail.huodongmingcheng
            }
		},
		destroyed: function() {
			//window.clearInterval(this.inter);
		},
		methods: {
			// 拨打电话
			callClick(row){
				uni.makePhoneCall({
					phoneNumber: row
				})
			},
			// 支付
			onPayTap(){
				let that = this
				if(!this.user){
					this.$utils.msg("请先登录")
					setTimeout(()=>{
						that.$utils.jump('../login/login')
					},1500)
					return false
				}
				uni.setStorageSync('paytable','jiankanghuodong');
				uni.setStorageSync('payObject',this.detail);
				this.$utils.jump('../pay-confirm/pay-confirm?type=1')
			},
            onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
                this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
            },
			// 收藏
			async getStoreup() {
				if(!this.user){
					return false
				}
				let params = {
					page: 1,
					limit: 1,
					refid : this.id,
					tablename : 'jiankanghuodong',
					userid: this.user.id,
					type: 1,
				}
				let res = await this.$api.list(`storeup`, params);
				this.storeupFlag = res.data.list.length;
			},
			async shoucang(){
				let that = this
				if(!this.user){
					this.$utils.msg("请先登录")
					setTimeout(()=>{
						that.$utils.jump('../login/login')
					},1500)
					return false
				}
				let _this = this;
				let params = {
					page: 1,
					limit: 1,
					refid : _this.detail.id,
					tablename : 'jiankanghuodong',
					userid: _this.user.id,
					type: 1,
				}
				let res = await _this.$api.list(`storeup`, params);
				if (res.data.list.length == 1) {
					let storeupId = res.data.list[0].id;
					uni.showModal({
						title: '提示',
						content: '是否取消',
						success: async function(res) {
							if (res.confirm) {
								_this.detail.storeupnum--
								await _this.$api.update('jiankanghuodong',_this.detail)
								await _this.$api.del('storeup', JSON.stringify([storeupId]));
								_this.$utils.msg('取消成功');
								_this.getStoreup();
							}
						}
					});
					return;
				}
				uni.showModal({
					title: '提示',
					content: '是否收藏',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.add('storeup', {
								userid: _this.user.id,
								name: _this.detail.huodongmingcheng,
								picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'jiankanghuodong',
                                type: 1
							});
							_this.detail.storeupnum++
							await _this.$api.update('jiankanghuodong',_this.detail)
							_this.$utils.msg('收藏成功');
							_this.getStoreup();
						}
					}
				});
			},
			// 跨表
			async onAcrossTap(tableName,crossOptAudit,crossOptPay,statusColumnName,tips,statusColumnValue,type=1){
				let that = this
				if(!this.user){
					this.$utils.msg("请先登录")
					setTimeout(()=>{
						that.$utils.jump('../login/login')
					},1500)
					return false
				}
				if (this.count <= 0) {
					this.$utils.msg('倒计时已结束')
					return
				}
				uni.setStorageSync('crossTable','jiankanghuodong');
				uni.setStorageSync(`crossObj`, this.detail);
				uni.setStorageSync(`statusColumnName`, statusColumnName);
				uni.setStorageSync(`statusColumnValue`, statusColumnValue);
				uni.setStorageSync(`tips`, tips);
				if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
					var obj = uni.getStorageSync('crossObj');
					for (var o in obj){
						if(o==statusColumnName && obj[o]==statusColumnValue){
							this.$utils.msg(tips);
							return
						}
					}
				}
				this.$utils.jump(`../${tableName}/add-or-update?cross=true`);
			},
			// 获取详情
			async init(type=1){
                if(this.timer) {
                    clearInterval(this.timer);
                }
				let res = await this.$api.info('jiankanghuodong', this.id);
				this.detail = res.data;

				this.title = this.detail.huodongmingcheng
				//修改富文本的图片样式
				this.detail.huodongneirong = this.detail.huodongneirong.replace(/img src/gi,"img style=\"width:100%;\" src");
				// 轮播图片
				this.swiperList = this.detail.huodongtupian ? this.detail.huodongtupian.split(",") : [];
				

				let reversetime = new Date(this.detail.reversetime).getTime()
				let now = new Date().getTime();
				let count = reversetime - now;
				if (count > 0) {
					this.count = count / 1000
					var _this = this;
					this.timer = setInterval( () => {
					    _this.count = _this.count - 1;
					    if (_this.count < 0) {
						clearInterval(this.timer);
					    	uni.showModal({
					    		title: '活动结束',
					    		content: '该活动已结束',
					    		showCancel: false,
					    		success: async function(res) {}
					    	});
					    }
					}, 1000);
				}
				if(type==2){
					this.detail.discussnum++
					await this.$api.update('jiankanghuodong',this.detail)
				}
			},
			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},

			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				mescroll.resetUpScroll()
			},

			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				mescroll.endSuccess(mescroll.size, this.hasNext);

            },



			onChatTap() {
				this.$utils.jump('../chat/chat')
			},
			// 下载
			download(url){
				let _this = this;
				url=_this.$base.url +  url;
				uni.downloadFile({
					url: url,
					success: (res) => {
						if (res.statusCode === 200) {
							_this.$utils.msg('下载成功');
							 window.open(url);
						}
					}
				});
			},
			//
			onCartTabTap() {
				this.$utils.tab('../shop-cart/shop-cart')
			},
		}
	}
</script>

<style lang="scss">
	page {
	  --animate-duration: 1s;
	  --animate-delay: 1s;
	  --animate-repeat: 1;
	}
	
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.seat-list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		background: #FFFFFF;
		margin: 20upx;
		border-radius: 20upx;
		padding: 20upx;
		font-size: 30upx;
		.seat-item {
			width: 33.33%;
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-bottom: 20upx;
	
			.seat-icon {
				width: 50upx;
				height: 50upx;
				margin-bottom: 10upx;
			}
		}
	}
	
	audio {
		display: flex;
		flex-direction: column;
	}
	
	.audio /deep/ .uni-audio-default {
		width: inherit;
	}
	

</style>
