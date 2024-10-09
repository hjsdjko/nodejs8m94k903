<template>
<view class="content">
	<view class="box" :style='{"width":"100%","padding":"24rpx","position":"relative","background":"url(http://codegen.caihongy.cn/20240112/23f959aa396c4607b2f20ed40caa81e9.jpg) no-repeat center top / 100% auto,#f5f5f5","height":"100%"}'>
		<view :style='{"width":"100%","padding":"24rpx","borderRadius":"16rpx","background":"#fff","display":"block","height":"auto"}'>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>用户账号</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}' disabled="true"  v-model="ruleForm.yonghuzhanghao" placeholder="用户账号"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>用户姓名</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.yonghuxingming" placeholder="用户姓名"></input>
			</view>
			<view v-if="tableName=='yonghu'" :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">性别</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}'  @change="yonghuxingbieChange" :value="yonghuxingbieIndex" :range="yonghuxingbieOptions">
					<view :style='{"border":"2rpx solid #fff","padding":"0 20rpx","color":"#666","borderRadius":"8rpx","background":"rgba(255,255,255,.6)","width":"100%","lineHeight":"80rpx","fontSize":"28rpx"}' class="uni-input picker-select-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>年龄</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.nianling" placeholder="年龄"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>电话</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.dianhua" placeholder="电话"></input>
			</view>
			<view v-if="tableName=='yonghu'" :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">家属账号</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}'  @change="yonghujiashuzhanghaoChange" :value="yonghujiashuzhanghaoIndex" :range="yonghujiashuzhanghaoOptions">
					<view :style='{"border":"2rpx solid #fff","padding":"0 20rpx","color":"#666","borderRadius":"8rpx","background":"rgba(255,255,255,.6)","width":"100%","lineHeight":"80rpx","fontSize":"28rpx"}' class="uni-input picker-select-input">{{ruleForm.jiashuzhanghao?ruleForm.jiashuzhanghao:"请选择家属账号"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>家属姓名</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}' disabled="true"  v-model="ruleForm.jiashuxingming" placeholder="家属姓名"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" @tap="yonghutouxiangTap" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>头像</view>
				<image :style='{"width":"80rpx","margin":"0 0 0 20rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-if="ruleForm.touxiang" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
				<image :style='{"width":"80rpx","margin":"0 0 0 20rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-else class="avator" style="margin: 0;" src="../../static/gen/upload.png" mode=""></image>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiashu'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>家属账号</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}' disabled="true"  v-model="ruleForm.jiashuzhanghao" placeholder="家属账号"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiashu'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>家属姓名</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.jiashuxingming" placeholder="家属姓名"></input>
			</view>
			<view v-if="tableName=='jiashu'" :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">性别</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}'  @change="jiashuxingbieChange" :value="jiashuxingbieIndex" :range="jiashuxingbieOptions">
					<view :style='{"border":"2rpx solid #fff","padding":"0 20rpx","color":"#666","borderRadius":"8rpx","background":"rgba(255,255,255,.6)","width":"100%","lineHeight":"80rpx","fontSize":"28rpx"}' class="uni-input picker-select-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiashu'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>年龄</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.nianling" placeholder="年龄"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiashu'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>家属电话</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.jiashudianhua" placeholder="家属电话"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiashu'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>家庭住址</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.jiatingzhuzhi" placeholder="家庭住址"></input>
			</view>
			<view v-if="tableName=='jiashu'" :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">用户账号</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}'  @change="jiashuyonghuzhanghaoChange" :value="jiashuyonghuzhanghaoIndex" :range="jiashuyonghuzhanghaoOptions">
					<view :style='{"border":"2rpx solid #fff","padding":"0 20rpx","color":"#666","borderRadius":"8rpx","background":"rgba(255,255,255,.6)","width":"100%","lineHeight":"80rpx","fontSize":"28rpx"}' class="uni-input picker-select-input">{{ruleForm.yonghuzhanghao?ruleForm.yonghuzhanghao:"请选择用户账号"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiashu'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>用户姓名</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.yonghuxingming" placeholder="用户姓名"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jiashu'" @tap="jiashutouxiangTap" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>头像</view>
				<image :style='{"width":"80rpx","margin":"0 0 0 20rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-if="ruleForm.touxiang" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
				<image :style='{"width":"80rpx","margin":"0 0 0 20rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-else class="avator" style="margin: 0;" src="../../static/gen/upload.png" mode=""></image>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yanglaojigou'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>机构名称</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}' disabled="true"  v-model="ruleForm.jigoumingcheng" placeholder="机构名称"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yanglaojigou'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>机构地址</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.jigoudizhi" placeholder="机构地址"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yanglaojigou'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>机构规模</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.jigouguimo" placeholder="机构规模"></input>
			</view>
            <view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yanglaojigou'" class=" select">
                <view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">创立时间</view>
                <picker :style='{"width":"100%","flex":"1","height":"auto"}' mode="date" :value="ruleForm.chuanglishijian" @change="yanglaojigouchuanglishijianDateChange" >
                    <view :style='{"border":"2rpx solid #fff","padding":"0 20rpx","color":"#666","borderRadius":"8rpx","background":"rgba(255,255,255,.6)","width":"100%","lineHeight":"80rpx","fontSize":"28rpx"}' class="uni-input">{{ruleForm.chuanglishijian?ruleForm.chuanglishijian:"请选择创立时间"}}</view>
                </picker>
            </view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yanglaojigou'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>负责人</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.fuzeren" placeholder="负责人"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yanglaojigou'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>联系方式</view>
				<input :style='{"border":"2rpx solid #fff","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255,255,255,.6)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.lianxifangshi" placeholder="联系方式"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yanglaojigou'" @tap="yanglaojigoujigoutupianTap" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>机构图片</view>
				<image :style='{"width":"80rpx","margin":"0 0 0 20rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-if="ruleForm.jigoutupian" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.jigoutupian" mode=""></image>
				<image :style='{"width":"80rpx","margin":"0 0 0 20rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-else class="avator" style="margin: 0;" src="../../static/gen/upload.png" mode=""></image>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#eee","alignItems":"center","borderWidth":"0 0 2rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yanglaojigou'" class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">机构介绍</view>
                <xia-editor ref="editor" :style='{"border":"2rpx solid #ddd","minHeight":"360rpx","padding":"20rpx","color":"#666","borderRadius":"8rpx","background":"rgba(255,255,255,.6)","width":"100%","height":"auto"}' v-model="ruleForm.jigoujieshao" placeholder="机构介绍" @editorChange="jigoujieshaoChange"></xia-editor>
			</view>
			<view :style='{"width":"100%","flexWrap":"wrap","justifyContent":"center","display":"flex","height":"auto"}' class="btn">
				<button @tap="update()" class="cu-btn lg" :style='{"border":"0","padding":"0px","margin":"0 20rpx 40rpx","color":"#fff","borderRadius":"32rpx","background":"#4AB030","width":"100%","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}'>保存</button>
				<button @tap="logout()" class="cu-btn lg" :style='{"border":"0px solid rgb(255, 170, 51)","padding":"0px","margin":"0 20rpx","color":"#fff","borderRadius":"32rpx","background":"#bcbcbc","width":"100%","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}'>退出登录</button>
			</view>
		</view>
        <w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="yanglaojigouclicktimeConfirm" ref="yanglaojigouclicktime" themeColor="#333333"></w-picker>
	</view>
</view>
</template>

<script>

    import xiaEditor from '@/components/xia-editor/xia-editor';
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
				ruleForm: {
				},
				tableName:"",
				yonghuxingbieOptions: [],
				yonghuxingbieIndex: 0,
				yonghujiashuzhanghaoOptions: [],
				yonghujiashuzhanghaoIndex: 0,
				jiashuxingbieOptions: [],
				jiashuxingbieIndex: 0,
				jiashuyonghuzhanghaoOptions: [],
				jiashuyonghuzhanghaoIndex: 0,
			}
		},
        components: {
            multipleSelect,
			xiaEditor
        },
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad() {
			let table = uni.getStorageSync("nowTable");
			let that = this
			let res = {}
			this.tableName = table;
			this.getSession()
			// 自定义下拉框值
			if(this.tableName=='yonghu'){
				this.yonghuxingbieOptions = "男,女".split(',');
				this.yonghuxingbieOptions.forEach((item, index) => {
					if(item==this.ruleForm.xingbie) {
						this.yonghuxingbieIndex = index;
					}
				});
			}
			// 下2
			res = await this.$api.option(`jiashu`,`jiashuzhanghao`,{});
			this.yonghujiashuzhanghaoOptions = res.data;
			// 自定义下拉框值
			if(this.tableName=='jiashu'){
				this.jiashuxingbieOptions = "男,女".split(',');
				this.jiashuxingbieOptions.forEach((item, index) => {
					if(item==this.ruleForm.xingbie) {
						this.jiashuxingbieIndex = index;
					}
				});
			}
			// 下2
			res = await this.$api.option(`yonghu`,`yonghuzhanghao`,{});
			this.jiashuyonghuzhanghaoOptions = res.data;
            this.ruleForm.chuanglishijian = this.$utils.getCurDate();
			this.styleChange()
            this.$forceUpdate()
		},
		methods: {
			async getSession(){
				let res = await this.$api.session(this.tableName)
				this.ruleForm = res.data;
				uni.setStorageSync('userSession',JSON.stringify(res.data))
			},
            // 下拉变化
            yonghuxingbieChange(e) {
                    this.yonghuxingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.yonghuxingbieOptions[this.yonghuxingbieIndex]
            },
			yonghutouxiangTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.touxiang = 'upload/' + res.file;
					_this.$forceUpdate();
				});
			},
            // 下拉变化
            jiashuxingbieChange(e) {
                    this.jiashuxingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.jiashuxingbieOptions[this.jiashuxingbieIndex]
            },
			jiashutouxiangTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.touxiang = 'upload/' + res.file;
					_this.$forceUpdate();
				});
			},
            yanglaojigouchuanglishijianDateChange(e) {
                this.ruleForm.chuanglishijian = e.target.value;
                this.$forceUpdate();
            },
            jigoujieshaoChange(e) {
                this.ruleForm.jigoujieshao = e
            },
			yanglaojigoujigoutupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.jigoutupian = 'upload/' + res.file;
					_this.$forceUpdate();
				});
			},
            // 日长控件选择日期时间
            yanglaojigouclicktimeConfirm(val) {
                this.ruleForm.clicktime = val.result;
                this.$forceUpdate();
            },

            // 下二随
            async yonghujiashuzhanghaoChange (e) {
                this.yonghujiashuzhanghaoIndex = e.target.value
                this.ruleForm.jiashuzhanghao = this.yonghujiashuzhanghaoOptions[this.yonghujiashuzhanghaoIndex]
                let res = await this.$api.follow(`jiashu`, `jiashuzhanghao`,{
                    columnValue: this.ruleForm.jiashuzhanghao
                });
                if(res.data.jiashuxingming){
                    this.ruleForm.jiashuxingming = res.data.jiashuxingming
                }
            },
            // 下二随
            async jiashuyonghuzhanghaoChange (e) {
                this.jiashuyonghuzhanghaoIndex = e.target.value
                this.ruleForm.yonghuzhanghao = this.jiashuyonghuzhanghaoOptions[this.jiashuyonghuzhanghaoIndex]
                let res = await this.$api.follow(`yonghu`, `yonghuzhanghao`,{
                    columnValue: this.ruleForm.yonghuzhanghao
                });
                if(res.data.yonghuxingming){
                    this.ruleForm.yonghuxingming = res.data.yonghuxingming
                }
            },
            toggleTab(str) {
                this.$refs[str].show();
            },

			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('. .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.userInfoForm.list.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			logout() {
				uni.clearStorageSync()
				this.$utils.jump('../login/login');
			},
			// 注册
			async update() {

				if((!this.ruleForm.yonghuzhanghao) && `yonghu` == this.tableName){
					this.$utils.msg(`用户账号不能为空`);
					return
				}

				if((!this.ruleForm.mima) && `yonghu` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}

				if((!this.ruleForm.yonghuxingming) && `yonghu` == this.tableName){
					this.$utils.msg(`用户姓名不能为空`);
					return
				}


				if(`yonghu` == this.tableName && this.ruleForm.nianling&&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
					this.$utils.msg(`年龄应输入整数`);
					return
				}

				if(`yonghu` == this.tableName && this.ruleForm.dianhua&&(!this.$validate.isMobile(this.ruleForm.dianhua))){
					this.$utils.msg(`电话应输入手机格式`);
					return
				}




				if((!this.ruleForm.jiashuzhanghao) && `jiashu` == this.tableName){
					this.$utils.msg(`家属账号不能为空`);
					return
				}

				if((!this.ruleForm.mima) && `jiashu` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}

				if((!this.ruleForm.jiashuxingming) && `jiashu` == this.tableName){
					this.$utils.msg(`家属姓名不能为空`);
					return
				}


				if((!this.ruleForm.nianling) && `jiashu` == this.tableName){
					this.$utils.msg(`年龄不能为空`);
					return
				}
				if(`jiashu` == this.tableName && this.ruleForm.nianling&&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
					this.$utils.msg(`年龄应输入整数`);
					return
				}

				if((!this.ruleForm.jiashudianhua) && `jiashu` == this.tableName){
					this.$utils.msg(`家属电话不能为空`);
					return
				}
				if(`jiashu` == this.tableName && this.ruleForm.jiashudianhua&&(!this.$validate.isMobile(this.ruleForm.jiashudianhua))){
					this.$utils.msg(`家属电话应输入手机格式`);
					return
				}

				if((!this.ruleForm.jiatingzhuzhi) && `jiashu` == this.tableName){
					this.$utils.msg(`家庭住址不能为空`);
					return
				}




				if((!this.ruleForm.jigoumingcheng) && `yanglaojigou` == this.tableName){
					this.$utils.msg(`机构名称不能为空`);
					return
				}

				if((!this.ruleForm.mima) && `yanglaojigou` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}

				if((!this.ruleForm.jigoudizhi) && `yanglaojigou` == this.tableName){
					this.$utils.msg(`机构地址不能为空`);
					return
				}




				if(`yanglaojigou` == this.tableName && this.ruleForm.lianxifangshi&&(!this.$validate.isMobile(this.ruleForm.lianxifangshi))){
					this.$utils.msg(`联系方式应输入手机格式`);
					return
				}






				if(`yanglaojigou` == this.tableName && this.ruleForm.clicknum&&(!this.$validate.isIntNumer(this.ruleForm.clicknum))){
					this.$utils.msg(`点击次数应输入整数`);
					return
				}

				if(`yanglaojigou` == this.tableName && this.ruleForm.storeupnum&&(!this.$validate.isIntNumer(this.ruleForm.storeupnum))){
					this.$utils.msg(`收藏数应输入整数`);
					return
				}
				let table = uni.getStorageSync("nowTable");
				await this.$api.update(table, this.ruleForm);
				this.$utils.msgBack('修改成功');;
				this.getSession()
			},

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
