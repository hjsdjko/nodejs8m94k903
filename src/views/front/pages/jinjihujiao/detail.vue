
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

				<view :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}' class="detail-list-item title">
					<view :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="lable">机构名称：</view>
					<view :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}' class="text">{{detail.jigoumingcheng}}</view>
				</view>
				<view :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}' class="detail-list-item title">
					<view :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="lable">床位号：</view>
					<view :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}' class="text">{{detail.chuangweihao}}</view>
				</view>

				<view class="detail-list-item" :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>呼叫时间：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>{{detail.hujiaoshijian}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>呼叫原因：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>{{detail.hujiaoyuanyin}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>用户账号：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>{{detail.yonghuzhanghao}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>用户姓名：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>{{detail.yonghuxingming}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>家属账号：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>{{detail.jiashuzhanghao}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>家属姓名：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>{{detail.jiashuxingming}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>地址：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>{{detail.fulladdress}}</view>
				</view>




				<view v-if="userid" class="detail-list-item" :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>回复内容</view>
					<view class="text" :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>{{detail.shhf}}</view>
				</view>




				<view class="bottom-content bg-white tabbar border shop" :style='{"padding":"0px 24rpx","margin":"20rpx 0 24rpx 0","borderRadius":"16rpx","flexWrap":"wrap","background":"none","display":"flex","width":"100%","height":"auto","order":"9"}'>

					<button :style='{"border":"0","padding":"0 20rpx","margin":"0 3% 20rpx 0","color":"#fff","borderRadius":"16rpx","background":"#38bf3e","width":"auto","fontSize":"28rpx","minWidth":"20%","lineHeight":"80rpx","height":"80rpx"}' v-if="userid&&isAuth('jinjihujiao','审核')" @tap="onSHTap">回复</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0 3% 20rpx 0","color":"#fff","borderRadius":"16rpx","background":"#38bf3e","width":"auto","fontSize":"28rpx","minWidth":"20%","lineHeight":"80rpx","height":"80rpx"}' v-if="!userid&&isAuthFront('jinjihujiao','审核')" @tap="onSHTap">回复</button>
					
				</view>
			</view>
		</view>
		<!-- 确认完成弹窗 -->
		<uni-popup class="popup-content" ref="popup" type="center">
			<form class="popup-form" style="background: #fff;width: 300px;display: block;border-radius: 10px;padding: 20px;text-align: center;">
				<view class="">
					<!-- <view class="title">回复</view> -->
					<textarea style="width: 200px;" v-model="detail.shhf" placeholder="回复内容"></textarea>
					<!-- <input v-model="douyinId" placeholder="回复" name="input"></input> -->
				</view>
				<view class="btn-content">
					<button style="margin: 0 10px" @tap="onCloseWinTap" class="cu-btn bg-cyan">取消</button>
					<button style="margin: 0 10px" @tap="onFinishTap" class="cu-btn bg-red">确认</button>
				</view>
			</form>
		</uni-popup>
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
			let crossCleanType = uni.getStorageSync('crossCleanType')
            if(crossCleanType) {
				uni.removeStorageSync('crossCleanType')
                res = await this.$api.info('jinjihujiao', this.id);
                this.detail = res.data;
				this.title = this.detail.jigoumingcheng
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
				uni.setStorageSync('paytable','jinjihujiao');
				uni.setStorageSync('payObject',this.detail);
				this.$utils.jump('../pay-confirm/pay-confirm?type=1')
			},
            onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
                this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
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
				uni.setStorageSync('crossTable','jinjihujiao');
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
				let res = await this.$api.info('jinjihujiao', this.id);
				this.detail = res.data;

				this.title = this.detail.jigoumingcheng
				// 轮播图片
				this.swiperList = this.detail.tupian ? this.detail.tupian.split(",") : [];
				

				if(type==2){
					this.detail.discussnum++
					await this.$api.update('jinjihujiao',this.detail)
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
			onSHTap() {
				if(this.detail.sfsh=='是'||this.detail.sfsh=='否') {
				    this.$utils.msg('已审核完成');
				    return;
				}
				this.$refs.popup.open()
			},
			// 完成回复
			async onFinishTap() {
				if(!this.detail.shhf){
					this.$utils.msg('请填写审核回复');
					return
				}
				await this.$api.update('jinjihujiao', this.detail);
				this.$utils.msg('回复成功');
				this.$refs.popup.close();
			},
			// 关闭窗口
			onCloseWinTap() {
				this.$refs.popup.close()
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
