<template>
<view class="content">
	<view :style='{"minHeight":"100vh","width":"100%","padding":"24rpx","position":"relative","background":"url(http://codegen.caihongy.cn/20240112/23f959aa396c4607b2f20ed40caa81e9.jpg) no-repeat center top / 100% auto,#f5f5f5","height":"auto"}'>
		<form :style='{"width":"100%","padding":"24rpx","borderRadius":"16rpx","background":"#fff","display":"block","height":"auto"}' class="app-update-pv">
 

			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0 0 0px 0","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"margin":"0 0 0 24rpx","color":"#999","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","minWidth":"160rpx","fontWeight":"500"}' class="title">评论内容</view>
                <xia-editor ref="editor" :style='{"border":"2rpx solid #ddd","minHeight":"360rpx","padding":"20rpx","color":"#666","borderRadius":"8rpx","background":"rgba(255,255,255,.6)","width":"100%","height":"auto"}' v-model="ruleForm.content" placeholder="评论内容" @editorChange="contentChange"></xia-editor>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0 0 0px 0","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"margin":"0 0 0 24rpx","color":"#999","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","minWidth":"160rpx","fontWeight":"500"}' class="title">评分</view>
                <uni-rate v-model="ruleForm.score" />
			</view>
			
			<view :style='{"width":"100%","flexWrap":"wrap","justifyContent":"space-between","display":"flex","height":"auto"}' class="btn" >
				<button :style='{"border":"0","padding":"0px","margin":"0 0 40rpx","color":"#fff","borderRadius":"32rpx","background":"#4AB030","width":"100%","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

	</view>
</view>
</template>

<script>
	import uniRate from "@/components/uni-rate/uni-rate.vue";
	import wPicker from "@/components/w-picker/w-picker.vue";
    import xiaEditor from '@/components/xia-editor/xia-editor';
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				refid: '',
				userid: '',
				avatarurl: '',
				nickname: '',
				content: '',
				score: '',
				reply: '',
				},
				// 登录用户信息
				user: {},
                ro:{
                   refid : false,
                   userid : false,
                   avatarurl : false,
                   nickname : false,
                   content : false,
                   score : false,
                   reply : false,
                },
			}
		},
		components: {
			wPicker,
            xiaEditor,
            multipleSelect,
			uniRate,
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},



		},
		async onLoad(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			



			// 如果有登录，获取登录后保存的userid
			this.ruleForm.userid = uni.getStorageSync("appUserid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = Number(options.refid);
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`discusshulixiangmu`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='refid'){
					this.ruleForm.refid = obj[o];
					this.ro.refid = true;
					continue;
					}
					if(o=='userid'){
					this.ruleForm.userid = obj[o];
					this.ro.userid = true;
					continue;
					}
					if(o=='avatarurl'){
					this.ruleForm.avatarurl = obj[o].split(",")[0];
					this.ro.avatarurl = true;
					continue;
					}
					if(o=='nickname'){
					this.ruleForm.nickname = obj[o];
					this.ro.nickname = true;
					continue;
					}
					if(o=='content'){
					this.ruleForm.content = obj[o];
					this.ro.content = true;
					continue;
					}
					if(o=='score'){
					this.ruleForm.score = obj[o];
					this.ro.score = true;
					continue;
					}
					if(o=='reply'){
					this.ruleForm.reply = obj[o];
					this.ro.reply = true;
					continue;
					}
				}
			}
			this.styleChange()
            this.$forceUpdate()
			
			if (uni.getStorageSync('raffleType') && uni.getStorageSync('raffleType') != null) {
				uni.removeStorageSync('raffleType')
				setTimeout(() => {
					this.onSubmitTap()
				}, 300)
			}
		},
		methods: {
			contentChange(e) {
			    this.ruleForm.content = e
			},
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数




			avatarurlTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.avatarurl = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {
				this.ruleForm.avatarurl = uni.getStorageSync('headportrait')?uni.getStorageSync('headportrait'):'';
				var sensitiveWords = "";
				var sensitiveWordsArr = [];
				if(sensitiveWords) {
					sensitiveWordsArr = sensitiveWords.split(",");
				}
				for(var i=0; i<sensitiveWordsArr.length; i++){
					//全局替换
					var reg = new RegExp(sensitiveWordsArr[i],"g");
					//判断内容中是否包括敏感词      
					if (this.ruleForm.content.indexOf(sensitiveWordsArr[i]) > -1) {
						// 将敏感词替换为 **
						this.ruleForm.content = this.ruleForm.content.replace(reg,"**");
					}
				}
//跨表计算判断
				var obj;
				if((!this.ruleForm.refid)){
					this.$utils.msg(`关联表id不能为空`);
					return
				}
				if((!this.ruleForm.userid)){
					this.$utils.msg(`用户id不能为空`);
					return
				}
				if((!this.ruleForm.content)){
					this.$utils.msg(`评论内容不能为空`);
					return
				}
				if(this.ruleForm.score&&(!this.$validate.isNumber(this.ruleForm.score))){
					this.$utils.msg(`评分应输入数字`);
					return
				}
				//更新跨表属性
				var crossuserid;
				var crossrefid;
				var crossoptnum;
				if(this.cross){
                    uni.setStorageSync('crossCleanType',true);
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
                        if(!obj) {
						    obj = uni.getStorageSync('crossObj');
                        }
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('appUserid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`discusshulixiangmu`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
                        uni.removeStorageSync('crossCleanType');
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`discusshulixiangmu`, this.ruleForm);
						}else{
							await this.$api.add(`discusshulixiangmu`, this.ruleForm);
						}
						uni.setStorageSync('discusshulixiangmuCleanType',true);
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`discusshulixiangmu`, this.ruleForm);
					}else{
						await this.$api.add(`discusshulixiangmu`, this.ruleForm);
					}
					uni.setStorageSync('discusshulixiangmuCleanType',true);
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				if(this.ro[str]){
					return false
				}
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
