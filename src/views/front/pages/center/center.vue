<template>
	<view class="content">
		<view :style='{"minHeight":"100vh","width":"100%","padding":"24rpx","position":"relative","background":"url(http://codegen.caihongy.cn/20240112/23f959aa396c4607b2f20ed40caa81e9.jpg) no-repeat center top / 100% auto,#f5f5f5","height":"auto"}'>
			<view v-if="user&&user.id" :style='{"minHeight":"400rpx","padding":"24rpx 24rpx","margin":"0 0 40rpx 0","borderRadius":"16rpx","alignItems":"flex-start","background":"url(http://codegen.caihongy.cn/20240218/c777c4f688d54027abea88d9089b6789.jpg) no-repeat center top / 100% 100%,#fff","display":"flex","width":"100%","position":"relative","height":"auto"}' @tap="onPageTap('../user-info/user-info')" class="header" v-bind:class="{'status':isH5Plus}">
				<view :style='{"alignContent":"center","padding":"0px 0 0","margin":"0","alignItems":"center","flexWrap":"wrap","textAlign":"center","flex":"1","background":"none","display":"flex","width":"100%","position":"relative","height":"auto"}' v-if="tableName=='yonghu'" class="userinfo">
					<image :style='{"width":"88rpx","padding":"0","margin":"0 20rpx 0 0","borderRadius":"100%","height":"88rpx"}' :src="user.touxiang?baseUrl+user.touxiang:'/static/gen/upload.png'"></image>
					<view :style='{"width":"240rpx","margin":"10rpx auto 0","flex":"1","flexDirection":"column","display":"flex"}' class="info">
						<view :style='{"width":"100%","lineHeight":"36rpx","fontSize":"28rpx","color":"#fff","textAlign":"left"}'>{{user.yonghuzhanghao}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
					</view>
					
					<view :style='{"width":"100%","margin":"40rpx 0 0","flexWrap":"wrap","flexDirection":"row","display":"flex"}' class="info">
						<view :style='{"width":"auto","margin":"0 20rpx 20rpx 0","lineHeight":"36rpx","fontSize":"28rpx","color":"#eee"}'>电话：{{user.dianhua}}</view>
					</view>
				</view>
				<view :style='{"alignContent":"center","padding":"0px 0 0","margin":"0","alignItems":"center","flexWrap":"wrap","textAlign":"center","flex":"1","background":"none","display":"flex","width":"100%","position":"relative","height":"auto"}' v-if="tableName=='jiashu'" class="userinfo">
					<view :style='{"width":"240rpx","margin":"10rpx auto 0","flex":"1","flexDirection":"column","display":"flex"}' class="info">
						<view :style='{"width":"100%","lineHeight":"36rpx","fontSize":"28rpx","color":"#fff","textAlign":"left"}'>{{user.jiashuzhanghao}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
					</view>
					
					<view :style='{"width":"100%","margin":"40rpx 0 0","flexWrap":"wrap","flexDirection":"row","display":"flex"}' class="info">
						<view :style='{"width":"auto","margin":"0 20rpx 20rpx 0","lineHeight":"36rpx","fontSize":"28rpx","color":"#eee"}'>家属电话：{{user.jiashudianhua}}</view>
					</view>
				</view>
				<view :style='{"alignContent":"center","padding":"0px 0 0","margin":"0","alignItems":"center","flexWrap":"wrap","textAlign":"center","flex":"1","background":"none","display":"flex","width":"100%","position":"relative","height":"auto"}' v-if="tableName=='yanglaojigou'" class="userinfo">
					<image :style='{"width":"88rpx","padding":"0","margin":"0 20rpx 0 0","borderRadius":"100%","height":"88rpx"}' :src="user.jigoutupian?baseUrl+user.jigoutupian:'/static/gen/upload.png'"></image>
					<view :style='{"width":"240rpx","margin":"10rpx auto 0","flex":"1","flexDirection":"column","display":"flex"}' class="info">
						<view :style='{"width":"100%","lineHeight":"36rpx","fontSize":"28rpx","color":"#fff","textAlign":"left"}'>{{user.jigoumingcheng}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
						<view :style='{"overflow":"hidden","whiteSpace":"nowrap","color":"#eee","textAlign":"left","width":"100%","lineHeight":"36rpx","fontSize":"28rpx","textOverflow":"ellipsis"}'>{{user.shhf}}</view>
					</view>
					
					<view :style='{"width":"100%","margin":"40rpx 0 0","flexWrap":"wrap","flexDirection":"row","display":"flex"}' class="info">
						<view :style='{"width":"auto","margin":"0 20rpx 20rpx 0","lineHeight":"36rpx","fontSize":"28rpx","color":"#eee"}'>联系方式：{{user.lianxifangshi}}</view>
					</view>
					<view :style='{"width":"100%","padding":"0px 0","margin":"0px 0","borderRadius":"16rpx","background":"none","display":"none"}'>
					  <view :style='{"padding":"12rpx 24rpx","borderRadius":"16rpx","background":"none","display":"flex"}'>
					    <text class="icon iconfont icon-shoucang04" :style='{"margin":"0 16rpx 0 0","lineHeight":"1.5","fontSize":"28rpx","color":"#fff"}'></text>
					    <text :style='{"color":"#fff","lineHeight":"1.5","fontSize":"28rpx"}'>收藏 {{user.storenum}}</text>
					  </view>
					</view>
				</view>
				<view :style='{"padding":"8rpx 20rpx","alignItems":"center","borderRadius":"16rpx","background":"none","flexDirection":"column","display":"flex","width":"auto","justifyContent":"center","height":"auto"}' class="setting">
					<text class="icon iconfont icon-qita6" :style='{"border":"0","margin":"0 6rpx 0 0","color":"#eee","borderRadius":"0","display":"inline-block","width":"48rpx","lineHeight":"48rpx","fontSize":"56rpx"}'></text>
					<text :style='{"lineHeight":"2","fontSize":"28rpx","color":"#eee","display":"inline-block"}'>设置</text>
				</view>
			</view>
			
			<view v-else :style='{"minHeight":"400rpx","padding":"24rpx 24rpx","margin":"0 0 40rpx 0","borderRadius":"16rpx","alignItems":"flex-start","background":"url(http://codegen.caihongy.cn/20240218/c777c4f688d54027abea88d9089b6789.jpg) no-repeat center top / 100% 100%,#fff","display":"flex","width":"100%","position":"relative","height":"auto"}' @tap="loginClick" class="header" v-bind:class="{'status':isH5Plus}">
				<view :style='{"alignItems":"center","color":"#666","display":"flex","width":"100%","fontSize":"36rpx","justifyContent":"center","height":"100%"}'>登录/注册</view>
			</view>
			
			<view :style='{"width":"100%","background":"none","height":"auto"}' class="list">
				
				<view :style='{"width":"100%","padding":"20rpx","margin":"0","borderRadius":"16rpx","background":"#fff","height":"auto"}'>
					<view :style='{"padding":"0 20rpx","margin":"0 0 20rpx","background":"none","display":"none","width":"100%","justifyContent":"space-between","height":"auto"}'>
						<view :style='{"fontSize":"32rpx","lineHeight":"72rpx","color":"#333","fontWeight":"600"}'>我的服务</view>
					</view>
					<view :style='{"padding":"0","flexWrap":"wrap","flexDirection":"row","display":"flex","width":"100%","justifyContent":"flex-start","height":"auto"}'>
					
						<block v-for="item in menuList" v-bind:key="item.roleName">
							<block v-if="role==item.roleName" v-bind:key="menu.menu" v-for="(menu,index) in item.backMenu">
								<block v-bind:key="child.tableName" v-for=" (child,sort) in menu.child">
									<view :style='{"padding":"10rpx 0 20rpx","borderColor":"#eee","margin":"0 20rpx 20rpx 0","borderRadius":"0","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","background":"#fff","display":"flex","width":"calc(100% - 0px)","borderStyle":"solid","height":"100%"}' v-if="child.tableName!='orders/已发货' && child.tableName!='orders/已退款' &&child.tableName!='orders/已取消' && child.tableName!='orders/未支付' && child.tableName!='orders/已支付' && child.tableName!='orders/已完成' && child.tableName!='exampaper' && child.tableName!='examquestion' " @tap="onPageTap('../'+child.tableName+'/list?userid='+user.id+'&menuJump='+child.menuJump)" class="li" hover-class="hover">
										<view :style='{"width":"auto","lineHeight":"1","fontSize":"44rpx","color":"#333","textAlign":"center","display":"inline-block"}' :class="child.appFrontIcon"></view>
										<view :style='{"padding":"0 20rpx","margin":"0px 0 0","color":"#555","textAlign":"left","flex":"1","display":"inline-block","width":"auto","fontSize":"32rpx"}' class="text">{{child.menu}}</view>
										<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"32rpx","color":"#bbb","display":"block"}' class="icon iconfont icon-jinru"></view>
									</view>
								</block>
							</block>
						</block>
						
						<view @tap="onPageTap('../chat/chat')" :style='{"padding":"10rpx 0 20rpx","borderColor":"#eee","margin":"0 20rpx 20rpx 0","borderRadius":"0","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","background":"#fff","display":"flex","width":"calc(100% - 0px)","borderStyle":"solid","height":"100%"}' class="li" hover-class="hover">
							<view :style='{"width":"auto","lineHeight":"1","fontSize":"44rpx","color":"#333","textAlign":"center","display":"inline-block"}' class="cuIcon-service"></view>
							<view class="text" :style='{"padding":"0 20rpx","margin":"0px 0 0","color":"#555","textAlign":"left","flex":"1","display":"inline-block","width":"auto","fontSize":"32rpx"}'>在线客服</view>
							<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"32rpx","color":"#bbb","display":"block"}' class="icon iconfont icon-jinru"></view>
						</view>
						
						<view @tap="onPageTap('../forum-my/forum-my')" :style='{"padding":"10rpx 0 20rpx","borderColor":"#eee","margin":"0 20rpx 20rpx 0","borderRadius":"0","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","background":"#fff","display":"flex","width":"calc(100% - 0px)","borderStyle":"solid","height":"100%"}' class="li"
						 hover-class="hover">
							<view :style='{"width":"auto","lineHeight":"1","fontSize":"44rpx","color":"#333","textAlign":"center","display":"inline-block"}' class="cuIcon-scan"></view>
							<view class="text" :style='{"padding":"0 20rpx","margin":"0px 0 0","color":"#555","textAlign":"left","flex":"1","display":"inline-block","width":"auto","fontSize":"32rpx"}'>我的发贴</view>
							<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"32rpx","color":"#bbb","display":"block"}' class="icon iconfont icon-jinru"></view>
						</view>
						<view v-if="changeHasChat()" @tap="getRecordList(1)" :style='{"padding":"10rpx 0 20rpx","borderColor":"#eee","margin":"0 20rpx 20rpx 0","borderRadius":"0","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","background":"#fff","display":"flex","width":"calc(100% - 0px)","borderStyle":"solid","height":"100%"}' class="li" hover-class="hover">
							<view :style='{"width":"auto","lineHeight":"1","fontSize":"44rpx","color":"#333","textAlign":"center","display":"inline-block"}' class="cuIcon-news"></view>
							<view class="text" :style='{"padding":"0 20rpx","margin":"0px 0 0","color":"#555","textAlign":"left","flex":"1","display":"inline-block","width":"auto","fontSize":"32rpx"}'>聊天记录</view>
							<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"32rpx","color":"#bbb","display":"block"}' class="icon iconfont icon-jinru"></view>
						</view>
						<view v-if="user&&user.id" @tap="passwordShow()" :style='{"padding":"10rpx 0 20rpx","borderColor":"#eee","margin":"0 20rpx 20rpx 0","borderRadius":"0","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","background":"#fff","display":"flex","width":"calc(100% - 0px)","borderStyle":"solid","height":"100%"}' class="li" hover-class="hover">
							<view :style='{"width":"auto","lineHeight":"1","fontSize":"44rpx","color":"#333","textAlign":"center","display":"inline-block"}' class="cuIcon-lock"></view>
							<view class="text" :style='{"padding":"0 20rpx","margin":"0px 0 0","color":"#555","textAlign":"left","flex":"1","display":"inline-block","width":"auto","fontSize":"32rpx"}'>修改密码</view>
							<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"32rpx","color":"#bbb","display":"block"}' class="icon iconfont icon-jinru"></view>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 推荐 -->
			<view class="recommend" :style='{"width":"100%","padding":"0","margin":"40rpx 0","borderRadius":"16rpx","background":"none","height":"auto"}' v-if="recommendList.length">
				<view :style='{"padding":"0 24rpx","color":"#333","textAlign":"center","background":"none","width":"100%","lineHeight":"1","fontSize":"32rpx","fontWeight":"600","height":"auto"}'>为你推荐</view>
				<view :style='{"padding":"0","margin":"40rpx 0 0","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
					<view v-for="(item,index) in recommendList" :key="index" :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 40rpx","borderRadius":"16rpx","background":"#fff","width":"48%","height":"auto"}' @click="recommendDetail(item.id)">
						<image :style='{"width":"100%","objectFit":"cover","borderRadius":"16rpx 16rpx 0 0","float":"right","display":"block","height":"220rpx"}' :src="item[recommendPicture]?(baseUrl + item[recommendPicture].split(',')[0]):''"></image>
						<view :style='{"padding":"0 12rpx","margin":"0","overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis"}'>{{item[recommendTitle]}}</view>
						<view :style='{"width":"100%","padding":"0 12rpx","lineHeight":"48rpx","fontSize":"26rpx","color":"#999","textAlign":"right"}'>{{item.addtime}}</view>
					</view>
				</view>
			</view>
			<view style="width: 100%;height: 80px"></view>
		</view>
		<uni-popup class="popup-content" ref="recordPopup" type="bottom">
			<view class="z-box">
				<view class="section-content" v-for="item in recordList" :key="item.id" @click="chatClick(item)">
					<view style="display: flex;align-items: center;">
						<img :src="item.picture?baseUrl + item.picture:''" style="width: 60px;height: 60px;border-radius: 50%;object-fit: cover;"
							alt="">
						<view style="margin: 0 0 0 10px;display: flex;flex-direction: column;align-items: flex-start;">
							<view :style='{"fontSize":"14px","color":"#000","flex":"1","fontWeight":"bold"}'
								class="item-style">{{item.name}}</view>
							<view style="display: flex;align-items: center;" :style='{"color":"#666","flex":"1","fontSize":"14px","lineHeight":"1.5"}'
								class="item-style">
								<view v-if="item.notreadnum"
									style="padding: 0 5px;height: 16px;border-radius: 50%;text-align: center;line-height: 16px;font-size: 12px;background: #f00;color:#fff;width: auto;display: flex; align-items: center">
									{{item.notreadnum}}
								</view>
								{{item.content.split('/').length&&item.content.split('/')[0]=='upload'?'[图片]':item.content}}
							</view>
						</view>
					</view>
				</view> 
				<view v-if="!recordList.length" style="padding: 30px 0;width: 100%;text-align: center;font-size: 14px;color: #666;">
					暂无聊天记录
				</view>
			</view>
		</uni-popup>
		<uni-popup class="popup-content" ref="chatPopup" type="bottom" :maskClick="true" @change="clearChat">
			<view class="popup-chat">
				<view class="chat-content" id="chat-content">
					<view v-bind:key="item.id" v-for="item in chatList">
						<view v-if="item.uid==user.id" class="right-content">
							<view v-if="item.format==1" class="text-content">{{item.content}}</view>
							<img v-else :src="item.content?baseUrl + item.content:''" @click="preViewImg(baseUrl + item.content)"
								style="width: 100px;height: 100px;object-fit: cover;" />
							<img :src="mypic?baseUrl + mypic:''" alt=""
								style="width: 30px;border-radius: 50%;height: 30px;margin: 0 0 0 10px;object-fit: cover;" />
						</view>
						<view v-else class="left-content">
							<img :src="nowfpic?baseUrl + nowfpic:''" alt=""
								style="width: 30px;border-radius: 50%;height: 30px;margin: 0 10px 0 0;object-fit: cover;" />
							<view v-if="item.format==1" class="text-content">{{item.content}}</view>
							<img v-else :src="item.content?baseUrl + item.content:''" @click="preViewImg(baseUrl + item.content)"
								style="width: 100px;height: 100px;object-fit: cover;" />
						</view>
						<view class="clear-float"></view>
					</view>
				</view>
				<view style="padding: 0 0 20px;">
					<input v-model="chatForm.content" placeholder="请输入内容" confirm-type="send" @confirm="addChat"
						style="width: calc(100% - 20px);font-size: 14px;background: #eee;margin: 0 10px 10px;padding: 0 10px;">
					</input>
					<view style="display: flex;justify-content: center;">
						<button @click="addChat" style="width: auto;padding: 0 10px;background: #29A19C;font-size: 14px;border: none;color: #fff;">发送</button>
						<button @click="uploadSuccess" style="width: auto;padding: 0 10px;background: #0BB2C7;font-size: 14px;border: none;color: #fff;">上传图片</button>
						<button @click="closeChat" style="width: auto;padding: 0 10px;background: #c774b1;font-size: 14px;border: none;color: #fff;">返回</button>
					</view>
					
				</view>
			</view>
		</uni-popup>
		<uni-popup class="popup-content" ref="passwordPopup" type="bottom">
			<view class="passwordForm">
				<view class="passwordInput">
					<input type="password" v-model="passwordForm.mima" placeholder="原密码" />
				</view>
				<view class="passwordInput">
					<input type="password" v-model="passwordForm.newmima" placeholder="新密码" />
				</view>
				<view class="passwordInput">
					<input type="password" v-model="passwordForm.newmima1" placeholder="确认密码" />
				</view>
				<view class="passwordBtnView">
					<button class="passwordBtn" @click="updatePassword">更新</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>
<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				isH5Plus: true,
				user: {},
				tableName:'',
				role: '',
				menuList: [],
				iconArr: [
				  'cuIcon-same',
				  'cuIcon-deliver',
				  'cuIcon-evaluate',
				  'cuIcon-shop',
				  'cuIcon-ticket',
				  'cuIcon-cascades',
				  'cuIcon-discover',
				  'cuIcon-question',
				  'cuIcon-pic',
				  'cuIcon-filter',
				  'cuIcon-footprint',
				  'cuIcon-pulldown',
				  'cuIcon-pullup',
				  'cuIcon-moreandroid',
				  'cuIcon-refund',
				  'cuIcon-qrcode',
				  'cuIcon-remind',
				  'cuIcon-profile',
				  'cuIcon-home',
				  'cuIcon-message',
				  'cuIcon-link',
				  'cuIcon-lock',
				  'cuIcon-unlock',
				  'cuIcon-vip',
				  'cuIcon-weibo',
				  'cuIcon-activity',
				  'cuIcon-friendadd',
				  'cuIcon-friendfamous',
				  'cuIcon-friend',
				  'cuIcon-goods',
				  'cuIcon-selection'
				],
				recommendList: [],
				recommendTable: '',
				recommendTitle: '',
				recommendPicture: '',
				// 聊天
				recordList: [],
				nowfid: 0,
				nowfpic: '',
				nowname: '',
				nowtablename: '',
				chatList: [],
				chatForm: {
					content: ''
				},
				chatTimer: null,
				hasChatList: [
					'yonghu',
				],
				friendList: [],
				passwordForm: {
					mima: '',
					newmima: '',
					newmima1: '',
				},
			};
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
			mypic() {
				this.$forceUpdate()
				return uni.getStorageSync('headportrait')
			},
		},
		async onLoad(){
			let menus = menu.list();
			this.menuList = menus;
		},
		async onShow(){
            uni.removeStorageSync("useridTag");
			this.role = uni.getStorageSync("appRole");
			await this.getSession()
			this.getThumbsup()
			this.getStoreup()
			this.tableName = uni.getStorageSync("nowTable");
			let menus = menu.list();
			this.menuList = menus;
			this.getRecommendList()
		},
		methods: {
			async getSession(){
				let table = uni.getStorageSync("nowTable");
				let res = await this.$api.session(table);
				this.user = res.data;
				this.$forceUpdate()
			},
			async getThumbsup(){
				if(!this.user||!this.user.id){
					return false
				}
				let res = await this.$api.page('storeup',{userid: this.user.id,type: 21})
				this.user.thumbsnum = Number(res.data.total)
				this.$forceUpdate()
			},
			async getStoreup(){
				if(!this.user||!this.user.id){
					return false
				}
				let res = await this.$api.page('storeup',{userid: this.user.id,type: 1})
				this.user.storenum = Number(res.data.total)
				this.$forceUpdate()
			},
			loginClick(){
				uni.navigateTo({
					url: '../login/login'
				});
			},
			onPageTap(url) {
                uni.setStorageSync("useridTag",1);
				uni.navigateTo({
					url: url,
					fail: function() {
						uni.switchTab({
							url: url
						});
					}
				});
			},
			async getRecommendList(){
				let params = {
					page: 1,
					limit: 4
				}
				let res;
				res = await this.$api.recommend('yanglaojigou', params);
				this.recommendList = res.data.list
				this.recommendTable = 'yanglaojigou'
				this.recommendTitle = 'jigoumingcheng'
				this.recommendPicture = 'jigoutupian'
				this.$forceUpdate()
			},
			recommendDetail(id) {
				uni.navigateTo({
					url: `../${this.recommendTable}/detail?id=${id}`,
					fail: function() {
						uni.switchTab({
							url: `../${this.recommendTable}/detail?id=${id}`
						});
					}
				});
			},
			changeHasChat(){
				let table = uni.getStorageSync("nowTable")
				for(let x in this.hasChatList){
					if(this.hasChatList[x]==table){
						return true
					}
				}
				return false
			},
			async getRecordList(type=1) {
				let res = await this.$api.page2('friend',{
					uid: this.user.id,
					type: 2
				})
				this.recordList = res.data.list
				if(type==1){
					this.$refs.recordPopup.open()
				}
				
			},
			async chatClick(row) {
				if (row.type == 0) {
					return false
				}
				this.nowfid = row.fid
				this.nowfpic = row.picture
				this.nowname = row.name
				this.nowtablename = row.tablename
				await this.getChatList()
				this.$refs.chatPopup.open()
				this.$forceUpdate()
			},
			async getChatList() {
				let res = await this.$api.mlist('chatmessage',{
					page: 1,
					limit: 1000,
					uid: this.user.id,
					fid: this.nowfid
				})
				this.chatList = res.data.list
				// #ifndef MP-WEIXIN
				let div = document.getElementsByClassName('chat-content')[0]
				setTimeout(() => {
					if (div)
						div.scrollTop = div.scrollHeight
				}, 0)
				// #endif
				this.chatTimer = setTimeout(() => {
					this.getChatList()
				}, 5000)
			},
			preViewImg(img){
				uni.previewImage({
					urls: [img],
					current:img
				})
			},
			clearChat(e) {
				if(!e.show){
					this.getRecordList(0)
					clearTimeout(this.chatTimer)
				}
				
			},
			closeChat(){
				this.$refs.chatPopup.close()
			},
			async uploadSuccess() {
				clearTimeout(this.chatTimer)
				let _this = this;
				await this.$api.upload(async function(obj) {
					let res = await _this.$api.page('friend', {
						uid: _this.user.id,
						fid: _this.nowfid,
						type: 2
					})
					if(!res.data.list.length){
						await _this.$api.add('friend',{
							uid: _this.user.id,
							fid: _this.nowfid,
							name: _this.nowname,
							picture: _this.nowfpic,
							type: 2,
							tablename: 'yonghu'
						})
						await _this.$api.add('friend',{
							fid: _this.user.id,
							uid: _this.nowfid,
							name: uni.getStorageSync("nickname"),
							picture: _this.mypic,
							type: 2,
							tablename: uni.getStorageSync("nowTable")
						})
					}
					await _this.$api.add('chatmessage',{
						uid: _this.user.id,
						fid: _this.nowfid,
						content: 'upload/' + obj.file,
						format: 2
					})
					_this.chatForm = {
						content: ''
					}
					_this.getChatList()
				})
			},
			async addChat() {
				clearTimeout(this.chatTimer)
				let res = await this.$api.page('friend', {
					uid: this.user.id,
					fid: this.nowfid,
					type: 2
				})
				if(!res.data.list.length){
					await this.$api.add('friend',{
						uid: this.user.id,
						fid: this.nowfid,
						name: this.nowname,
						picture: this.nowfpic,
						type: 2,
						tablename: 'yonghu'
					})
					await this.$api.add('friend',{
						fid: this.user.id,
						uid: this.nowfid,
						name: uni.getStorageSync("nickname"),
						picture: this.mypic,
						type: 2,
						tablename: uni.getStorageSync("nowTable")
					})
				}
				await this.$api.add('chatmessage',{
					uid: this.user.id,
					fid: this.nowfid,
					content: this.chatForm.content,
					format: 1
				})
				this.chatForm = {
					content: ''
				}
				this.getChatList()
			},
			passwordShow() {
				this.passwordForm = {
					mima: '',
					newmima: '',
					newmima1: '',
				}
				this.$forceUpdate()
				this.$refs.passwordPopup.open()
			},
			async updatePassword() {
				if (this.passwordForm.mima == ''){
					this.$utils.msg('原密码不能为空')
					return false
				}
				if (this.passwordForm.newmima == ''){
					this.$utils.msg('新密码不能为空')
					return false
				}
				if (this.passwordForm.newmima1 == ''){
					this.$utils.msg('确认密码不能为空')
					return false
				}
				let password = ''
				if (this.user.mima) {
					password = this.user.mima;
				} else if (this.user.password) {
					password = this.user.password;
				}
				let newpassword = this.passwordForm.mima
				if(password != newpassword){
					this.$utils.msg('原密码不正确')
					return false
				}
				if (this.passwordForm.newmima != this.passwordForm.newmima1){
					this.$utils.msg('两次密码不一致')
					return false
				}
				if (this.passwordForm.mima == this.passwordForm.newmima){
					this.$utils.msg('新密码与原密码相同！')
					return false
				}
				if (this.tableName == 'yonghu') {
				}
				if (this.tableName == 'jiashu') {
				}
				this.user.password = this.passwordForm.newmima
				this.user.mima = this.passwordForm.newmima
				await this.$api.update(this.tableName,this.user)
				this.$utils.msg('修改密码成功,下次登录系统生效')
				this.$refs.passwordPopup.close()
				this.getSession()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: calc(100vh - 94px);
		box-sizing: border-box;
	}
	.z-box{
		background: #fff;
		width: 100%;
		padding: 10px 0 60px;
		max-height: 60vh;
		overflow-y: scroll;
		
		.section-content {
			cursor: pointer;
			padding: 10px;
			box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
			margin: 0 auto 20px;
			color: #333;
			background: #fff;
			display: flex;
			width: calc(100% - 20px);
			border-color: #efefef;
			border-width: 0;
			align-items: center;
			border-style: solid;
			position: relative;
			justify-content: space-between;
		}
	}
	.popup-chat{
		 background: #fff;
		 padding-bottom: 40px;
		 .chat-content {
		 	padding-bottom: 20px;
		 	width: 100%;
		 	margin-bottom: 10px;
		 	max-height: 400px;
		 	height: 400px;
		 	overflow-y: scroll;
		 	border: 1px solid #eeeeee;
		 	background: #eee;
			display: flex;
			flex-direction: column;
			
		 
		 	.left-content {
		 		float: left;
		 		margin-bottom: 10px;
		 		padding: 10px;
		 		max-width: 80%;
		 		display: flex;
		 		align-items: center;
				.text-content{
					background: #e5ffff;
					padding: 8px 12px;
					border-radius: 5px;
				}
		 	}
		 
		 	.right-content {
		 		float: right;
		 		margin-bottom: 10px;
		 		padding: 10px;
		 		max-width: 80%;
		 		display: flex;
		 		align-items: center;
				.text-content{
					background: #fff;
					padding: 8px 12px;
					border-radius: 5px;
				}
		 	}
		 }
		 
	}
	.passwordForm {
		width: 100%;
		padding: 10px 20px 60px;
		background: #fff;
	
		.passwordInput {
			background: #eee;
			margin: 0 0 10px;
			padding: 0 10px;
	
			input {
				height: 36px;
				line-height: 36px;
				font-size: 14px;
			}
		}
	
		.passwordBtnView {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 10px 0;
	
			.passwordBtn {
				padding: 0 20px;
				width: auto;
				height: 20px;
				line-height: 20px;
				font-size: 14px;
				color: #fff;
				background: #007aff;
				border: none;
				border-radius: 5px;
	
			}
		}
	}
</style>
