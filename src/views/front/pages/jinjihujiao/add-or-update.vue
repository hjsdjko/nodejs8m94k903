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
			<view :style='{"padding":"0px 24rpx 12rpx","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="" @tap="tupianTap">
				<view :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="title">图片</view>
				<image :style='{"width":"80rpx","margin":"0","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-if="ruleForm.tupian" :src="baseUrl+ruleForm.tupian.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"80rpx","margin":"0","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"0px 24rpx 12rpx","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="title">呼叫时间</view>
				<input :disabled="ro.hujiaoshijian" :style='{"border":"2rpx solid #fff","padding":"0","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}' v-model="ruleForm.hujiaoshijian" placeholder="呼叫时间" @tap="toggleTab('hujiaoshijian')"></input>
			</view>
			<view :style='{"padding":"0px 24rpx 12rpx","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="title">呼叫原因</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.hujiaoyuanyin" v-model="ruleForm.hujiaoyuanyin" placeholder="呼叫原因"  type="text"></input>
			</view>
			<view :style='{"padding":"0px 24rpx 12rpx","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="title">用户账号</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.yonghuzhanghao" v-model="ruleForm.yonghuzhanghao" placeholder="用户账号"  type="text"></input>
			</view>
			<view :style='{"padding":"0px 24rpx 12rpx","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="title">用户姓名</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.yonghuxingming" v-model="ruleForm.yonghuxingming" placeholder="用户姓名"  type="text"></input>
			</view>
			<view :style='{"padding":"0px 24rpx 12rpx","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="title">家属账号</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.jiashuzhanghao" v-model="ruleForm.jiashuzhanghao" placeholder="家属账号"  type="text"></input>
			</view>
			<view :style='{"padding":"0px 24rpx 12rpx","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="title">家属姓名</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.jiashuxingming" v-model="ruleForm.jiashuxingming" placeholder="家属姓名"  type="text"></input>
			</view>
 
			<view :style='{"padding":"0px 24rpx 12rpx","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}' class="title">地址</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}' readonly @tap="fulladdressTap" v-model="ruleForm.fulladdress" placeholder="请选择地址"></input>
			</view>

			
			<view :style='{"width":"100%","flexWrap":"wrap","justifyContent":"space-between","display":"flex","height":"auto"}' class="btn" >
				<button :style='{"border":"0","padding":"0px","margin":"0 0 40rpx","color":"#fff","borderRadius":"32rpx","background":"#4AB030","width":"100%","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

		<w-picker  mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="hujiaoshijianConfirm" ref="hujiaoshijian" themeColor="#333333"></w-picker>
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
				tupian: '',
				hujiaoshijian: '',
				hujiaoyuanyin: '',
				yonghuzhanghao: '',
				yonghuxingming: '',
				jiashuzhanghao: '',
				jiashuxingming: '',
				shhf: '',
				longitude: '',
				latitude: '',
				fulladdress: '',
				},
				// 登录用户信息
				user: {},
                ro:{
                   jigoumingcheng : false,
                   chuangweihao : false,
                   tupian : false,
                   hujiaoshijian : false,
                   hujiaoyuanyin : false,
                   yonghuzhanghao : false,
                   yonghuxingming : false,
                   jiashuzhanghao : false,
                   jiashuxingming : false,
                   shhf : false,
                   longitude : false,
                   latitude : false,
                   fulladdress : false,
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
            this.ruleForm.hujiaoshijian =  this.$utils.getCurDateTime();
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取
			this.ruleForm.yonghuzhanghao = this.user.yonghuzhanghao
			this.ro.yonghuzhanghao = true;
			this.ruleForm.yonghuxingming = this.user.yonghuxingming
			this.ro.yonghuxingming = true;
			this.ruleForm.jiashuzhanghao = this.user.jiashuzhanghao
			this.ro.jiashuzhanghao = true;
			this.ruleForm.jiashuxingming = this.user.jiashuxingming
			this.ro.jiashuxingming = true;

            this.ro.hujiaoshijian = true;


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
				res = await this.$api.info(`jinjihujiao`, this.ruleForm.id);
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
					if(o=='tupian'){
					this.ruleForm.tupian = obj[o].split(",")[0];
					this.ro.tupian = true;
					continue;
					}
					if(o=='hujiaoshijian'){
					this.ruleForm.hujiaoshijian = obj[o];
					this.ro.hujiaoshijian = true;
					continue;
					}
					if(o=='hujiaoyuanyin'){
					this.ruleForm.hujiaoyuanyin = obj[o];
					this.ro.hujiaoyuanyin = true;
					continue;
					}
					if(o=='yonghuzhanghao'){
					this.ruleForm.yonghuzhanghao = obj[o];
					this.ro.yonghuzhanghao = true;
					continue;
					}
					if(o=='yonghuxingming'){
					this.ruleForm.yonghuxingming = obj[o];
					this.ro.yonghuxingming = true;
					continue;
					}
					if(o=='jiashuzhanghao'){
					this.ruleForm.jiashuzhanghao = obj[o];
					this.ro.jiashuzhanghao = true;
					continue;
					}
					if(o=='jiashuxingming'){
					this.ruleForm.jiashuxingming = obj[o];
					this.ro.jiashuxingming = true;
					continue;
					}
					if(o=='longitude'){
					this.ruleForm.longitude = obj[o];
					this.ro.longitude = true;
					continue;
					}
					if(o=='latitude'){
					this.ruleForm.latitude = obj[o];
					this.ro.latitude = true;
					continue;
					}
					if(o=='fulladdress'){
					this.ruleForm.fulladdress = obj[o];
					this.ro.fulladdress = true;
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
			fulladdressTap () {
				uni.chooseLocation({
					success: (data) => {
						console.log(data);
						this.ruleForm.fulladdress = data.address;
						this.ruleForm.longitude = data.longitude;
						this.ruleForm.latitude = data.latitude;
					}
				})
			},

			// 多级联动参数


			// 日长控件选择日期时间
			hujiaoshijianConfirm(val) {
				console.log(val)
				this.ruleForm.hujiaoshijian = val.result;
				this.$forceUpdate();
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
				if(this.ruleForm.longitude&&(!this.$validate.isNumber(this.ruleForm.longitude))){
					this.$utils.msg(`经度应输入数字`);
					return
				}
				if(this.ruleForm.latitude&&(!this.$validate.isNumber(this.ruleForm.latitude))){
					this.$utils.msg(`纬度应输入数字`);
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
					let res = await this.$api.list(`jinjihujiao`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
                        uni.removeStorageSync('crossCleanType');
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`jinjihujiao`, this.ruleForm);
						}else{
							await this.$api.add(`jinjihujiao`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`jinjihujiao`, this.ruleForm);
					}else{
						await this.$api.add(`jinjihujiao`, this.ruleForm);
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
