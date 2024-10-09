<template>
  <div :style='{"color":"#666","padding":"20px 30px 30px","fontSize":"14px"}'>
    <el-form
	  :style='{"border":"1px solid rgba(255,255,255,1)","padding":"30px","borderRadius":"4px","alignItems":"flex-start","flexWrap":"wrap","background":"rgba(255,255,255,.8)","display":"flex","fontSize":"inherit"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      label-width="150px"
    >  
     <el-row>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='yonghu'"  label="用户账号" prop="yonghuzhanghao">
          <el-input v-model="ruleForm.yonghuzhanghao" readonly              placeholder="用户账号" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='yonghu'"  label="用户姓名" prop="yonghuxingming">
          <el-input v-model="ruleForm.yonghuxingming"               placeholder="用户姓名" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="flag=='yonghu'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie"  placeholder="请选择性别">
            <el-option
                v-for="(item,index) in yonghuxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='yonghu'"  label="年龄" prop="nianling">
          <el-input v-model="ruleForm.nianling"               placeholder="年龄" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='yonghu'"  label="电话" prop="dianhua">
          <el-input v-model="ruleForm.dianhua"               placeholder="电话" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="flag=='yonghu'" label="家属账号" prop="jiashuzhanghao">
          <el-select  @change="yonghujiashuzhanghaoChange"  v-model="ruleForm.jiashuzhanghao" placeholder="请选择家属账号">
            <el-option
                v-for="(item,index) in yonghujiashuzhanghaoOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='yonghu'"  label="家属姓名" prop="jiashuxingming">
          <el-input v-model="ruleForm.jiashuxingming" readonly              placeholder="家属姓名" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="flag=='yonghu'" label="头像" prop="touxiang">
          <file-upload
          tip="点击上传头像"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
          @change="yonghutouxiangUploadChange"
          ></file-upload>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='jiashu'"  label="家属账号" prop="jiashuzhanghao">
          <el-input v-model="ruleForm.jiashuzhanghao" readonly              placeholder="家属账号" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='jiashu'"  label="家属姓名" prop="jiashuxingming">
          <el-input v-model="ruleForm.jiashuxingming"               placeholder="家属姓名" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="flag=='jiashu'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie"  placeholder="请选择性别">
            <el-option
                v-for="(item,index) in jiashuxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='jiashu'"  label="年龄" prop="nianling">
          <el-input v-model="ruleForm.nianling"               placeholder="年龄" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='jiashu'"  label="家属电话" prop="jiashudianhua">
          <el-input v-model="ruleForm.jiashudianhua"               placeholder="家属电话" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='jiashu'"  label="家庭住址" prop="jiatingzhuzhi">
          <el-input v-model="ruleForm.jiatingzhuzhi"               placeholder="家庭住址" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="flag=='jiashu'" label="用户账号" prop="yonghuzhanghao">
          <el-select  @change="jiashuyonghuzhanghaoChange"  v-model="ruleForm.yonghuzhanghao" placeholder="请选择用户账号">
            <el-option
                v-for="(item,index) in jiashuyonghuzhanghaoOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='jiashu'"  label="用户姓名" prop="yonghuxingming">
          <el-input v-model="ruleForm.yonghuxingming"               placeholder="用户姓名" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="flag=='jiashu'" label="头像" prop="touxiang">
          <file-upload
          tip="点击上传头像"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
          @change="jiashutouxiangUploadChange"
          ></file-upload>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='yanglaojigou'"  label="机构名称" prop="jigoumingcheng">
          <el-input v-model="ruleForm.jigoumingcheng" readonly              placeholder="机构名称" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='yanglaojigou'"  label="机构地址" prop="jigoudizhi">
          <el-input v-model="ruleForm.jigoudizhi"               placeholder="机构地址" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='yanglaojigou'"  label="机构规模" prop="jigouguimo">
          <el-input v-model="ruleForm.jigouguimo"               placeholder="机构规模" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'  v-if="flag=='yanglaojigou'" label="创立时间" prop="chuanglishijian">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.chuanglishijian" 
                type="date"
                placeholder="创立时间">
            </el-date-picker> 
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='yanglaojigou'"  label="负责人" prop="fuzeren">
          <el-input v-model="ruleForm.fuzeren"               placeholder="负责人" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='yanglaojigou'"  label="联系方式" prop="lianxifangshi">
          <el-input v-model="ruleForm.lianxifangshi"               placeholder="联系方式" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="flag=='yanglaojigou'" label="机构图片" prop="jigoutupian">
          <file-upload
          tip="点击上传机构图片"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.jigoutupian?ruleForm.jigoutupian:''"
          @change="yanglaojigoujigoutupianUploadChange"
          ></file-upload>
        </el-form-item>
		<el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="flag=='yanglaojigou'" label="机构介绍" prop="jigoujieshao">
		  <editor
		  	style="min-width: 200px; max-width: 600px;"
			 :style='{"width":"600px","boxShadow":"0 0 0px rgba(64, 158, 255, .5)","height":"auto"}'
		  	v-model="ruleForm.jigoujieshao" 
		  	class="editor" 
		  	action="file/upload">
		  </editor>
		</el-form-item>
		<el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="flag=='users'" label="用户名" prop="username">
			<el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
		</el-form-item>
		<el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="flag=='users'" label="头像" prop="image">
		  <file-upload
		  tip="点击上传头像"
		  action="file/upload"
		  :limit="1"
		  :multiple="false"
		  :fileUrls="ruleForm.image?ruleForm.image:''"
		  @change="usersimageUploadChange"
		  ></file-upload>
		</el-form-item>
		<el-form-item :style='{"padding":"0","margin":"30px 0","alignItems":"center","textAlign":"center","display":"flex","width":"100%","perspective":"320px","-webkitPerspective":"320px","fontSize":"48px","justifyContent":"center"}'>
			<el-button class="btn3" :style='{"border":"0px solid rgba(126, 96, 16, .2)","cursor":"pointer","padding":"0 20px","margin":"0px 4px","outline":"none","color":"#666","borderRadius":"0px","background":"#cee1f6","width":"auto","fontSize":"16px","lineHeight":"24px","height":"40px"}' type="primary" @click="onUpdateHandler">
				<span class="icon iconfont icon-tijiao16" :style='{"color":"inherit","margin":"0 2px","fontSize":"18px"}'></span>
				提交
			</el-button>
		</el-form-item>
      </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
      ruleForm: {},
      flag: '',
      usersFlag: false,
      yonghuxingbieOptions: [],
      yonghujiashuzhanghaoOptions: [],
      jiashuxingbieOptions: [],
      jiashuyonghuzhanghaoOptions: [],
    };
  },
  mounted() {
    var table = this.$storage.get("sessionTable");
    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.yonghuxingbieOptions = "男,女".split(',')
    this.$http({
      url: `option/jiashu/jiashuzhanghao`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.yonghujiashuzhanghaoOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.jiashuxingbieOptions = "男,女".split(',')
    this.$http({
      url: `option/yonghu/yonghuzhanghao`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.jiashuyonghuzhanghaoOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
  },
  methods: {
    // 下二随
    yonghujiashuzhanghaoChange () {
      this.$http({
        url: `follow/jiashu/jiashuzhanghao?columnValue=`+ this.ruleForm.jiashuzhanghao,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
              if(data.data.jiashuxingming){
                this.ruleForm.jiashuxingming = data.data.jiashuxingming
              }
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    // 下二随
    jiashuyonghuzhanghaoChange () {
      this.$http({
        url: `follow/yonghu/yonghuzhanghao?columnValue=`+ this.ruleForm.yonghuzhanghao,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
              if(data.data.yonghuxingming){
                this.ruleForm.yonghuxingming = data.data.yonghuxingming
              }
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    yonghutouxiangUploadChange(fileUrls) {
        this.ruleForm.touxiang = fileUrls;
    },
    jiashutouxiangUploadChange(fileUrls) {
        this.ruleForm.touxiang = fileUrls;
    },
    yanglaojigoujigoutupianUploadChange(fileUrls) {
        this.ruleForm.jigoutupian = fileUrls;
    },
	usersimageUploadChange(fileUrls) {
		this.ruleForm.image = fileUrls;
	},
    onUpdateHandler() {
      if((!this.ruleForm.yonghuzhanghao)&& 'yonghu'==this.flag){
        this.$message.error('用户账号不能为空');
        return
      }


      if((!this.ruleForm.mima)&& 'yonghu'==this.flag){
        this.$message.error('密码不能为空');
        return
      }


      if((!this.ruleForm.yonghuxingming)&& 'yonghu'==this.flag){
        this.$message.error('用户姓名不能为空');
        return
      }






      if( 'yonghu' ==this.flag && this.ruleForm.nianling&&(!isIntNumer(this.ruleForm.nianling))){
       this.$message.error(`年龄应输入整数`);
        return
      }


      if( 'yonghu' ==this.flag && this.ruleForm.dianhua&&(!isMobile(this.ruleForm.dianhua))){
        this.$message.error(`电话应输入手机格式`);
        return
      }






        if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
        }
      if((!this.ruleForm.jiashuzhanghao)&& 'jiashu'==this.flag){
        this.$message.error('家属账号不能为空');
        return
      }


      if((!this.ruleForm.mima)&& 'jiashu'==this.flag){
        this.$message.error('密码不能为空');
        return
      }


      if((!this.ruleForm.jiashuxingming)&& 'jiashu'==this.flag){
        this.$message.error('家属姓名不能为空');
        return
      }




      if((!this.ruleForm.nianling)&& 'jiashu'==this.flag){
        this.$message.error('年龄不能为空');
        return
      }


      if( 'jiashu' ==this.flag && this.ruleForm.nianling&&(!isIntNumer(this.ruleForm.nianling))){
       this.$message.error(`年龄应输入整数`);
        return
      }
      if((!this.ruleForm.jiashudianhua)&& 'jiashu'==this.flag){
        this.$message.error('家属电话不能为空');
        return
      }


      if( 'jiashu' ==this.flag && this.ruleForm.jiashudianhua&&(!isMobile(this.ruleForm.jiashudianhua))){
        this.$message.error(`家属电话应输入手机格式`);
        return
      }
      if((!this.ruleForm.jiatingzhuzhi)&& 'jiashu'==this.flag){
        this.$message.error('家庭住址不能为空');
        return
      }








        if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
        }
      if((!this.ruleForm.jigoumingcheng)&& 'yanglaojigou'==this.flag){
        this.$message.error('机构名称不能为空');
        return
      }


      if((!this.ruleForm.mima)&& 'yanglaojigou'==this.flag){
        this.$message.error('密码不能为空');
        return
      }


      if((!this.ruleForm.jigoudizhi)&& 'yanglaojigou'==this.flag){
        this.$message.error('机构地址不能为空');
        return
      }










      if( 'yanglaojigou' ==this.flag && this.ruleForm.lianxifangshi&&(!isMobile(this.ruleForm.lianxifangshi))){
        this.$message.error(`联系方式应输入手机格式`);
        return
      }




        if(this.ruleForm.jigoutupian!=null) {
                this.ruleForm.jigoutupian = this.ruleForm.jigoutupian.replace(new RegExp(this.$base.url,"g"),"");
        }








      if( 'yanglaojigou' ==this.flag && this.ruleForm.clicknum&&(!isIntNumer(this.ruleForm.clicknum))){
       this.$message.error(`点击次数应输入整数`);
        return
      }


      if( 'yanglaojigou' ==this.flag && this.ruleForm.storeupnum&&(!isIntNumer(this.ruleForm.storeupnum))){
       this.$message.error(`收藏数应输入整数`);
        return
      }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
	this.$message.error(`用户名不能为空`);
        return	
      }
	  if(this.flag=='users'){
	  	this.ruleForm.image = this.ruleForm.image.replace(new RegExp(this.$base.url,"g"),"")
	  }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
				if(this.flag=='users'){
					this.$storage.set('headportrait',this.ruleForm.image)
				}
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: inherit;
	  	  font-weight: 500;
	  	  display: inline-block;
	  	  width: 150px;
	  	  font-size: inherit;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 150px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 1px solid #ddd;
	  	  border-radius: 0px;
	  	  padding: 0 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: #fff;
	  	  width: auto;
	  	  font-size: 14px;
	  	  min-width: 350px;
	  	  height: 36px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 1px solid #ddd;
	  	  border-radius: 0px;
	  	  padding: 0 10px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: #fff;
	  	  width: auto;
	  	  font-size: 14px;
	  	  height: 36px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 1px solid #ddd;
	  	  border-radius: 0px;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: #fff;
	  	  width: auto;
	  	  font-size: 14px;
	  	  height: 36px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 1px solid #ddd;
	  	  cursor: pointer;
	  	  border-radius: 0px;
	  	  color: inherit;
	  	  background: #fff;
	  	  object-fit: cover;
	  	  width: 180px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 1px solid #ddd;
	  	  cursor: pointer;
	  	  border-radius: 0px;
	  	  color: inherit;
	  	  background: #fff;
	  	  object-fit: cover;
	  	  width: 180px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 1px solid #ddd;
	  	  border-radius: 0px;
	  	  padding: 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: #fff;
	  	  width: 500px;
	  	  font-size: 14px;
	  	  height: 140px;
	  	}
	
	.add-update-preview .btn3 {
				border: 0px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				border-radius: 0px;
				padding: 0 20px;
				margin: 0px 4px;
				outline: none;
				color: #666;
				background: #cee1f6;
				width: auto;
				font-size: 16px;
				line-height: 24px;
				height: 40px;
			}
	
	.add-update-preview .btn3:hover {
				opacity: 0.8;
			}
	
	.editor>.avatar-uploader {
		line-height: 0;
		height: 0;
	}
</style>
