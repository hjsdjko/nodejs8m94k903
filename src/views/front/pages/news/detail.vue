
<template>
<view>
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view class="container" :style='{"minHeight":"100vh","width":"100%","padding":"0","position":"relative","background":"url(http://codegen.caihongy.cn/20240112/23f959aa396c4607b2f20ed40caa81e9.jpg) no-repeat center top / 100% auto,#f5f5f5","height":"auto"}'>
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


				<view class="detail-list-item" :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>标题：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>{{detail.title}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>分类名称：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>{{detail.typename}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>发布人：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>{{detail.name}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"0 24rpx 24rpx","margin":"0 auto","borderColor":"#ccc","borderRadius":"0 0 16rpx 16rpx","borderWidth":"0 0 0px 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"solid","height":"auto","order":"4"}'>
      		        <image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-if="detail.headportrait" :src="baseUrl+detail.headportrait"></image>
				</view>
				<view class="detail-list-item" :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>点击次数：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>{{detail.clicknum}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>收藏数：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>{{detail.storeupnum}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"0 24rpx 24rpx","margin":"0 auto","borderColor":"#ccc","borderRadius":"0 0 16rpx 16rpx","borderWidth":"0 0 0px 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"solid","height":"auto","order":"4"}'>
      		        <image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-if="detail.picture" :src="baseUrl+detail.picture"></image>
				</view>

				<view :style='{"padding":"0 40rpx","margin":"40rpx 0 24rpx 5%","borderColor":"#eee","textAlign":"center","display":"inline-block","minWidth":"40%","float":"left","borderRadius":"16rpx","borderWidth":"2rpx","background":"#fff","width":"auto","borderStyle":"solid","height":"auto","order":"5"}' class="detail-list-item" v-if="!thumbsupFlag&&!crazilyFlag" @tap="zan">
					<view :style='{"padding":"0 10rpx 0 0","color":"#333","display":"inline-block","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"500"}' class="lable">赞：</view>
					<view :style='{"width":"auto","flex":"1","justifyContent":"space-between","display":"inline-block","height":"auto"}'>
						<view :style='{"lineHeight":"80rpx","fontSize":"32rpx","color":"#333","display":"inline-block"}'>{{detail.thumbsupnum}}</view>
						<view :style='{"margin":"0 0 0 20rpx","lineHeight":"80rpx","fontSize":"36rpx","color":"#38bf3e","display":"inline-block"}' class="cuIcon-appreciate"></view>
					</view>
				</view>
				<view :style='{"padding":"0 40rpx","margin":"40rpx 0 24rpx 5%","borderColor":"#eee","textAlign":"center","display":"inline-block","minWidth":"40%","float":"left","borderRadius":"16rpx","borderWidth":"2rpx","background":"#fff","width":"auto","borderStyle":"solid","height":"auto","order":"5"}' class="detail-list-item" v-if="thumbsupFlag" @tap="zan">
					<view :style='{"padding":"0 10rpx 0 0","color":"#333","display":"inline-block","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"500"}' class="lable">已赞：</view>
					<view :style='{"width":"auto","flex":"1","justifyContent":"space-between","display":"inline-block","height":"auto"}'>
						<view :style='{"lineHeight":"80rpx","fontSize":"32rpx","color":"#333","display":"inline-block"}'>{{detail.thumbsupnum}}</view>
						<view :style='{"margin":"0 0 0 20rpx","lineHeight":"80rpx","fontSize":"36rpx","color":"#38bf3e","display":"inline-block"}' class="cuIcon-appreciate"></view>
					</view>
				</view>
				<view :style='{"padding":"0 40rpx","margin":"40rpx 5% 24rpx 0","borderColor":"#eee","textAlign":"center","display":"inline-block","minWidth":"40%","float":"right","borderRadius":"16rpx","borderWidth":"2rpx","background":"#fff","width":"auto","borderStyle":"solid","height":"auto","order":"6"}' class="detail-list-item" v-if="!thumbsupFlag&&!crazilyFlag" @tap="cai">
					<view :style='{"padding":"0 10rpx 0 0","color":"#333","display":"inline-block","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"500"}' class="lable">踩：</view>
					<view :style='{"width":"auto","flex":"1","justifyContent":"space-between","display":"inline-block","height":"auto"}'>
						<view :style='{"lineHeight":"80rpx","fontSize":"32rpx","color":"#333","display":"inline-block"}'>{{detail.crazilynum}}</view>
						<view style="transform: rotate(180deg);" :style='{"margin":"0 0 0 20rpx","lineHeight":"80rpx","fontSize":"36rpx","color":"#38bf3e","display":"inline-block"}' class="cuIcon-appreciate"></view>
					</view>
				</view>
				<view :style='{"padding":"0 40rpx","margin":"40rpx 5% 24rpx 0","borderColor":"#eee","textAlign":"center","display":"inline-block","minWidth":"40%","float":"right","borderRadius":"16rpx","borderWidth":"2rpx","background":"#fff","width":"auto","borderStyle":"solid","height":"auto","order":"6"}' class="detail-list-item" v-if="crazilyFlag" @tap="cai">
					<view :style='{"padding":"0 10rpx 0 0","color":"#333","display":"inline-block","width":"auto","lineHeight":"80rpx","fontSize":"32rpx","fontWeight":"500"}' class="lable">踩：</view>
					<view :style='{"width":"auto","flex":"1","justifyContent":"space-between","display":"inline-block","height":"auto"}'>
						<view :style='{"lineHeight":"80rpx","fontSize":"32rpx","color":"#333","display":"inline-block"}'>{{detail.crazilynum}}</view>
						<view style="transform: rotate(180deg);" :style='{"margin":"0 0 0 20rpx","lineHeight":"80rpx","fontSize":"36rpx","color":"#38bf3e","display":"inline-block"}' class="cuIcon-appreciate"></view>
					</view>
				</view>


				<view class="detail-list-item" :style='{"padding":"4rpx 24rpx 8rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>简介：</view>
					<view class="text" :style='{"padding":"0px","margin":"0px","color":"#666","textAlign":"left","flex":"1","width":"auto","lineHeight":"48rpx","fontSize":"28rpx"}'>{{detail.introduction}}</view>
				</view>


				<view class="detail-list-item rich" :style='{"padding":"0 24rpx","margin":"0 auto","borderColor":"#d8d8d8","borderWidth":"0 0 2rpx 0","background":"#fff","display":"flex","width":"calc(100% - 48rpx)","borderStyle":"dashed","height":"auto"}'>
					<view class="lable" :style='{"width":"auto","padding":"0 10rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>内容：</view>
					<view class="rich-text" :style='{"width":"auto","padding":"0px 24rpx 24rpx 0","margin":"0","lineHeight":"48rpx","color":"#666","flex":"1"}'>
						<rich-text :nodes="detail.content"></rich-text>
					</view>
				</view>



				<view class="bottom-content bg-white tabbar border shop" :style='{"padding":"0px 24rpx","margin":"20rpx 0 24rpx 0","borderRadius":"16rpx","flexWrap":"wrap","background":"none","display":"flex","width":"100%","height":"auto","order":"9"}'>

					
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
				thumbsupFlag: 0,
				crazilyFlag: 0,
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
			this.getStoreup();
			this.getThumbsup();
			let crossCleanType = uni.getStorageSync('crossCleanType')
            if(crossCleanType) {
				uni.removeStorageSync('crossCleanType')
                res = await this.$api.info('news', this.id);
                this.detail = res.data;
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
				uni.setStorageSync('paytable','news');
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
					tablename : 'news',
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
					tablename : 'news',
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
								await _this.$api.update('news',_this.detail)
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
                                inteltype: _this.detail.typename,
								picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'news',
                                type: 1
							});
							_this.detail.storeupnum++
							await _this.$api.update('news',_this.detail)
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
				uni.setStorageSync('crossTable','news');
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
				let res = await this.$api.info('news', this.id);
				this.detail = res.data;

				//修改富文本的图片样式
				this.detail.content = this.detail.content.replace(/img src/gi,"img style=\"width:100%;\" src");
				if(type==2){
					this.detail.discussnum++
					await this.$api.update('news',this.detail)
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
			// 获取赞踩
			async getThumbsup() {
				if(!this.user){
					return false
				}
				let params = {
					page: 1,
					limit: 1,
					refid: this.id,
					tablename: 'news',
					userid: this.user.id,
					type: '%2%',
				}
				let res = await this.$api.list(`storeup`, params);
				if (res.data.list.length > 0) {
					if(res.data.list[0].type=='21') {
						this.thumbsupFlag = 1;
					} else {
						this.crazilyFlag = 1;
					}
				}

			},
			// 点赞
			async zan() {
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
					refid: _this.detail.id,
					tablename : 'news',
					userid: _this.user.id,
					type: '%2%',
				}
				let res = await _this.$api.list(`storeup`, params);
				if (res.data.list.length > 0) {
					let storeupId = res.data.list[0].id;
					uni.showModal({
						title: '提示',
						content: '是否取消点赞',
						success: async function(res) {
							if (res.confirm) {
								await _this.$api.del('storeup', JSON.stringify([storeupId]));
								_this.detail.thumbsupnum = parseInt(_this.detail.thumbsupnum) - 1;
								await _this.$api.update('news', _this.detail);
								_this.$utils.msg('取消成功');
								_this.thumbsupFlag=0;
							}
						}
					});
					return;
				}
				uni.showModal({
					title: '提示',
					content: '是否点赞',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.add('storeup', {
								userid: _this.user.id,
								picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'news',
								type: '21'
							});
							_this.detail.thumbsupnum = parseInt(_this.detail.thumbsupnum) + 1;
							await _this.$api.update('news', _this.detail);
							_this.$utils.msg('点赞成功');
							_this.thumbsupFlag=1;
						}
					}
				});
			},
			// 踩
			async cai() {
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
					refid: _this.detail.id,
					tablename: 'news',
					userid: _this.user.id,
					type: '%2%',
				}
				let res = await _this.$api.list(`storeup`, params);
				if (res.data.list.length > 0) {
					let storeupId = res.data.list[0].id;
					uni.showModal({
						title: '提示',
						content: '是否取消点踩',
						success: async function(res) {
							if (res.confirm) {
								await _this.$api.del('storeup', JSON.stringify([storeupId]));
								_this.detail.crazilynum = parseInt(_this.detail.crazilynum) - 1;
								await _this.$api.update('news', _this.detail);
								_this.$utils.msg('取消成功');
								_this.crazilyFlag=0;
							}
						}
					});
					return;
				}
				uni.showModal({
					title: '提示',
					content: '是否点踩',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.add('storeup', {
								userid: _this.user.id,
								picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'news',
								type: '22'
							});
							_this.detail.crazilynum = parseInt(_this.detail.crazilynum) + 1;
							await _this.$api.update('news', _this.detail);
							_this.$utils.msg('点踩成功');
							_this.crazilyFlag=1;
						}
					}
				});
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
