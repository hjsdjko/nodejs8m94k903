<template>
<view class="content">
	<view :style='{"minHeight":"100vh","width":"100%","padding":"24rpx","position":"relative","background":"url(http://codegen.caihongy.cn/20240112/23f959aa396c4607b2f20ed40caa81e9.jpg) no-repeat center top / 100% auto,#f5f5f5","height":"auto"}'>
		<form :style='{"width":"100%","padding":"24rpx","borderRadius":"16rpx","background":"#fff","display":"block","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"0px 24rpx 12rpx","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="title">机构名称</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.jigoumingcheng" v-model="ruleForm.jigoumingcheng" placeholder="机构名称"  type="text"></input>
			</view>
			<view :style='{"padding":"0px 24rpx 12rpx","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="title">床位号</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.chuangweihao" v-model="ruleForm.chuangweihao" placeholder="床位号"  type="text"></input>
			</view>
			<view :style='{"padding":"0px 24rpx 12rpx","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="title">位置</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.weizhi" v-model="ruleForm.weizhi" placeholder="位置"  type="text"></input>
			</view>
			<view :style='{"padding":"0px 24rpx 12rpx","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="title">状态</view>
				<picker :disabled="ro.zhuangtai" :style='{"border":"2rpx solid #fff","width":"100%","padding":"0","flex":"1","background":"rgba(255,255,255,.6)","height":"auto"}' @change="zhuangtaiChange" :value="zhuangtaiIndex" :range="zhuangtaiOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#666"}' class="uni-input">{{ruleForm.zhuangtai?ruleForm.zhuangtai:"请选择状态"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0px 24rpx 12rpx","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="title">价格/天</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.jiage" v-model.number="ruleForm.jiage" placeholder="价格/天" type="number"></input>
			</view>
			<view :style='{"padding":"0px 24rpx 12rpx","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="title">呼叫电话</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.hujiaodianhua" v-model="ruleForm.hujiaodianhua" placeholder="呼叫电话"  type="text"></input>
			</view>
			<view :style='{"padding":"0px 24rpx 12rpx","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="" @tap="tupianTap">
				<view :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="title">图片</view>
				<image :style='{"width":"80rpx","margin":"0","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-if="ruleForm.tupian" :src="baseUrl+ruleForm.tupian.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"80rpx","margin":"0","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
 

			<view :style='{"padding":"0px 24rpx 12rpx","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="title">设备设施</view>
				<textarea :style='{"border":"2rpx solid #ddd","padding":"24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"360rpx"}' v-model="ruleForm.shebeisheshi" placeholder="设备设施"></textarea>
			</view>
			
			<view :style='{"width":"100%","flexWrap":"wrap","justifyContent":"space-between","display":"flex","height":"auto"}' class="btn" >
				<button :style='{"border":"0","padding":"0px","margin":"0 0 40rpx","color":"#fff","borderRadius":"32rpx","background":"#4AB030","width":"100%","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

	</view>
</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
    import xiaEditor from '@/components/xia-editor/xia-editor';
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				jigoumingcheng: '',
				chuangweihao: '',
				weizhi: '',
			        zhuangtai: '空闲' ,
				jiage: '',
				hujiaodianhua: '',
				shebeisheshi: '',
				tupian: '',
				discussnum: '',
				},
				zhuangtaiOptions: [],
				zhuangtaiIndex: 0,
				// 登录用户信息
				user: {},
                ro:{
                   jigoumingcheng : false,
                   chuangweihao : false,
                   weizhi : false,
                   zhuangtai : false,
                   jiage : false,
                   hujiaodianhua : false,
                   shebeisheshi : false,
                   tupian : false,
                   discussnum : false,
                },
			}
		},
		components: {
			wPicker,
            xiaEditor,
            multipleSelect,
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
			
			// ss读取
			this.ruleForm.jigoumingcheng = this.user.jigoumingcheng
			this.ro.jigoumingcheng = true;


			// 自定义下拉框值
			this.zhuangtaiOptions = "占用,空闲".split(',')

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
				res = await this.$api.info(`chuangweixinxi`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='jigoumingcheng'){
					this.ruleForm.jigoumingcheng = obj[o];
					this.ro.jigoumingcheng = true;
					continue;
					}
					if(o=='chuangweihao'){
					this.ruleForm.chuangweihao = obj[o];
					this.ro.chuangweihao = true;
					continue;
					}
					if(o=='weizhi'){
					this.ruleForm.weizhi = obj[o];
					this.ro.weizhi = true;
					continue;
					}
					if(o=='zhuangtai'){
					this.ruleForm.zhuangtai = obj[o];
					this.ro.zhuangtai = true;
					continue;
					}
					if(o=='jiage'){
					this.ruleForm.jiage = obj[o];
					this.ro.jiage = true;
					continue;
					}
					if(o=='hujiaodianhua'){
					this.ruleForm.hujiaodianhua = obj[o];
					this.ro.hujiaodianhua = true;
					continue;
					}
					if(o=='shebeisheshi'){
					this.ruleForm.shebeisheshi = obj[o];
					this.ro.shebeisheshi = true;
					continue;
					}
					if(o=='tupian'){
					this.ruleForm.tupian = obj[o].split(",")[0];
					this.ro.tupian = true;
					continue;
					}
					if(o=='discussnum'){
					this.ruleForm.discussnum = obj[o];
					this.ro.discussnum = true;
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
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数



			// 下拉变化
			zhuangtaiChange(e) {
				this.zhuangtaiIndex = e.target.value
				this.ruleForm.zhuangtai = this.zhuangtaiOptions[this.zhuangtaiIndex]
			},

			tupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.tupian = 'upload/' + res.file;
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
//跨表计算判断
				var obj;
				if(this.ruleForm.jiage&&(!this.$validate.isIntNumer(this.ruleForm.jiage))){
					this.$utils.msg(`价格/天应输入整数`);
					return
				}
				if(this.ruleForm.hujiaodianhua&&(!this.$validate.isMobile(this.ruleForm.hujiaodianhua))){
					this.$utils.msg(`呼叫电话应输入手机格式`);
					return
				}
				if(this.ruleForm.discussnum&&(!this.$validate.isIntNumer(this.ruleForm.discussnum))){
					this.$utils.msg(`评论数应输入整数`);
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
					let res = await this.$api.list(`chuangweixinxi`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
                        uni.removeStorageSync('crossCleanType');
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`chuangweixinxi`, this.ruleForm);
						}else{
							await this.$api.add(`chuangweixinxi`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`chuangweixinxi`, this.ruleForm);
					}else{
						await this.$api.add(`chuangweixinxi`, this.ruleForm);
					}
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
