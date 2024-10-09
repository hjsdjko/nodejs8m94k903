<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230823/a87703978f9442fb910c2c0279b4c84c.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center bottom","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
			<el-form v-if="pageFlag=='register'" :style='{"border":"1px solid #f6f6f6","padding":"50px 20px","boxShadow":"0 20px 20px rgba(0, 0, 0, .1)","margin":"20px 0","borderRadius":"20px","textAlign":"center","background":"rgba(255,255,255,1)","width":"650px","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm" :rules="rules">
				<div v-if="true" :style='{"padding":"0px","margin":"0px auto 30px","borderColor":"#eee","color":"rgba(93, 213, 200, 1)","textAlign":"center","display":"inline-block","background":"none","borderWidth":"0px","width":"100%","lineHeight":"40px","fontSize":"24px","borderStyle":"solid","fontWeight":"600"}' class="title">养老驿站服务平台注册</div>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('yonghuzhanghao')?'required':''">用户账号：</div>
					<el-input  v-model="ruleForm.yonghuzhanghao"  autocomplete="off" placeholder="用户账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('yonghuxingming')?'required':''">用户姓名：</div>
					<el-input  v-model="ruleForm.yonghuxingming"  autocomplete="off" placeholder="用户姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in yonghuxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('nianling')?'required':''">年龄：</div>
					<el-input  v-model.number="ruleForm.nianling"  autocomplete="off" placeholder="年龄"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('dianhua')?'required':''">电话：</div>
					<el-input  v-model="ruleForm.dianhua"  autocomplete="off" placeholder="电话"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('jiashuzhanghao')?'required':''">家属账号：</div>
                    <el-select @change="yonghujiashuzhanghaoChange" v-model="ruleForm.jiashuzhanghao" placeholder="请选择家属账号" >
                        <el-option
                            v-for="(item,index) in yonghujiashuzhanghaoOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('jiashuxingming')?'required':''">家属姓名：</div>
					<el-input  v-model="ruleForm.jiashuxingming" readonly autocomplete="off" placeholder="家属姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="yonghutouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('jiashuzhanghao')?'required':''">家属账号：</div>
					<el-input  v-model="ruleForm.jiashuzhanghao"  autocomplete="off" placeholder="家属账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('jiashuxingming')?'required':''">家属姓名：</div>
					<el-input  v-model="ruleForm.jiashuxingming"  autocomplete="off" placeholder="家属姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in jiashuxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('nianling')?'required':''">年龄：</div>
					<el-input  v-model.number="ruleForm.nianling"  autocomplete="off" placeholder="年龄"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('jiashudianhua')?'required':''">家属电话：</div>
					<el-input  v-model="ruleForm.jiashudianhua"  autocomplete="off" placeholder="家属电话"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('jiatingzhuzhi')?'required':''">家庭住址：</div>
					<el-input  v-model="ruleForm.jiatingzhuzhi"  autocomplete="off" placeholder="家庭住址"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('yonghuzhanghao')?'required':''">用户账号：</div>
                    <el-select @change="jiashuyonghuzhanghaoChange" v-model="ruleForm.yonghuzhanghao" placeholder="请选择用户账号" >
                        <el-option
                            v-for="(item,index) in jiashuyonghuzhanghaoOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('yonghuxingming')?'required':''">用户姓名：</div>
					<el-input  v-model="ruleForm.yonghuxingming" readonly autocomplete="off" placeholder="用户姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashu'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="jiashutouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yanglaojigou'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('jigoumingcheng')?'required':''">机构名称：</div>
					<el-input  v-model="ruleForm.jigoumingcheng"  autocomplete="off" placeholder="机构名称"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yanglaojigou'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yanglaojigou'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yanglaojigou'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('jigoudizhi')?'required':''">机构地址：</div>
					<el-input  v-model="ruleForm.jigoudizhi"  autocomplete="off" placeholder="机构地址"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yanglaojigou'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('jigouguimo')?'required':''">机构规模：</div>
					<el-input  v-model="ruleForm.jigouguimo"  autocomplete="off" placeholder="机构规模"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yanglaojigou'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('chuanglishijian')?'required':''">创立时间：</div>
                    <el-date-picker
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        v-model="ruleForm.chuanglishijian"
                        type="date"
                        placeholder="创立时间"
                    ></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yanglaojigou'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('fuzeren')?'required':''">负责人：</div>
					<el-input  v-model="ruleForm.fuzeren"  autocomplete="off" placeholder="负责人"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yanglaojigou'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('lianxifangshi')?'required':''">联系方式：</div>
					<el-input  v-model="ruleForm.lianxifangshi"  autocomplete="off" placeholder="联系方式"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yanglaojigou'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('jigoutupian')?'required':''">机构图片：</div>
                    <file-upload
                        tip="点击上传机构图片"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.jigoutupian?ruleForm.jigoutupian:''"
                        @change="yanglaojigoujigoutupianUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"flex","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yanglaojigou'">
					<div v-if="true" :style='{"padding":"0 6px","color":"#666","textAlign":"right","left":"-120px","display":"inline-block","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('jigoujieshao')?'required':''">机构介绍：</div>
					<editor
						style="min-width: 200px; max-width: 600px;"
						:style='{"width":"100%","height":"auto"}'
						v-model="ruleForm.jigoujieshao" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<button :style='{"border":"0","cursor":"pointer","padding":"0px","boxShadow":"0 0 0px rgba(64, 158, 255, .5)","margin":"30px auto 5px","color":"#fff","display":"block","outline":"none","borderRadius":"0px","background":"#5dd5c8","width":"280px","fontSize":"16px","height":"40px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0","margin":"10px 0 0","color":"rgba(159, 159, 159, 1)","textAlign":"right","display":"inline-block","width":"60%","lineHeight":"1","fontSize":"14px"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ruleForm: {
			},
			forgetForm: {},
            pageFlag : '',
			tableName:"",
			rules: {},
            yonghuxingbieOptions: [],
            yonghujiashuzhanghaoOptions: [],
            jiashuxingbieOptions: [],
            jiashuyonghuzhanghaoOptions: [],
		};
	},
	mounted(){
		this.pageFlag = this.$route.query.pageFlag
		if(this.$route.query.pageFlag=='register'){
			
			let table = this.$storage.get("loginTable");
			this.tableName = table;
			if(this.tableName=='yonghu'){
				this.ruleForm = {
					yonghuzhanghao: '',
					mima: '',
					yonghuxingming: '',
					xingbie: '',
					nianling: '',
					dianhua: '',
					jiashuzhanghao: '',
					jiashuxingming: '',
					touxiang: '',
				}
			}
			if(this.tableName=='jiashu'){
				this.ruleForm = {
					jiashuzhanghao: '',
					mima: '',
					jiashuxingming: '',
					xingbie: '',
					nianling: '',
					jiashudianhua: '',
					jiatingzhuzhi: '',
					yonghuzhanghao: '',
					yonghuxingming: '',
					touxiang: '',
				}
			}
			if(this.tableName=='yanglaojigou'){
				this.ruleForm = {
					jigoumingcheng: '',
					mima: '',
					jigoudizhi: '',
					jigouguimo: '',
					chuanglishijian: '',
					fuzeren: '',
					lianxifangshi: '',
					jigoujieshao: '',
					jigoutupian: '',
					sfsh: '',
					shhf: '',
					clicktime: '',
					clicknum: '',
					storeupnum: '',
				}
			}
			if ('yonghu' == this.tableName) {
				this.rules.yonghuzhanghao = [{ required: true, message: '请输入用户账号', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.rules.yonghuxingming = [{ required: true, message: '请输入用户姓名', trigger: 'blur' }]
			}
			if ('jiashu' == this.tableName) {
				this.rules.jiashuzhanghao = [{ required: true, message: '请输入家属账号', trigger: 'blur' }]
			}
			if ('jiashu' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('jiashu' == this.tableName) {
				this.rules.jiashuxingming = [{ required: true, message: '请输入家属姓名', trigger: 'blur' }]
			}
			if ('jiashu' == this.tableName) {
				this.rules.nianling = [{ required: true, message: '请输入年龄', trigger: 'blur' }]
			}
			if ('jiashu' == this.tableName) {
				this.rules.jiashudianhua = [{ required: true, message: '请输入家属电话', trigger: 'blur' }]
			}
			if ('jiashu' == this.tableName) {
				this.rules.jiatingzhuzhi = [{ required: true, message: '请输入家庭住址', trigger: 'blur' }]
			}
			if ('yanglaojigou' == this.tableName) {
				this.rules.jigoumingcheng = [{ required: true, message: '请输入机构名称', trigger: 'blur' }]
			}
			if ('yanglaojigou' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('yanglaojigou' == this.tableName) {
				this.rules.jigoudizhi = [{ required: true, message: '请输入机构地址', trigger: 'blur' }]
			}
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
			this.ruleForm.chuanglishijian = this.getCurDate()
		}
	},
	created() {
	},
	destroyed() {
		  	},
	methods: {
		changeRules(name){
			if(this.rules[name]){
				return true
			}
			return false
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
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
        yonghutouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
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
        jiashutouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },
        yanglaojigoujigoutupianUploadChange(fileUrls) {
            this.ruleForm.jigoutupian = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.yonghuzhanghao) && `yonghu` == this.tableName){
						this.$message.error(`用户账号不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `yonghu` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `yonghu` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.yonghuxingming) && `yonghu` == this.tableName){
						this.$message.error(`用户姓名不能为空`);
						return
					}
					if(`yonghu` == this.tableName && this.ruleForm.nianling &&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
						this.$message.error(`年龄应输入整数`);
						return
					}
					if(`yonghu` == this.tableName && this.ruleForm.dianhua &&(!this.$validate.isMobile(this.ruleForm.dianhua))){
						this.$message.error(`电话应输入手机格式`);
						return
					}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					if((!this.ruleForm.jiashuzhanghao) && `jiashu` == this.tableName){
						this.$message.error(`家属账号不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `jiashu` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `jiashu` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.jiashuxingming) && `jiashu` == this.tableName){
						this.$message.error(`家属姓名不能为空`);
						return
					}
					if((!this.ruleForm.nianling) && `jiashu` == this.tableName){
						this.$message.error(`年龄不能为空`);
						return
					}
					if(`jiashu` == this.tableName && this.ruleForm.nianling &&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
						this.$message.error(`年龄应输入整数`);
						return
					}
					if((!this.ruleForm.jiashudianhua) && `jiashu` == this.tableName){
						this.$message.error(`家属电话不能为空`);
						return
					}
					if(`jiashu` == this.tableName && this.ruleForm.jiashudianhua &&(!this.$validate.isMobile(this.ruleForm.jiashudianhua))){
						this.$message.error(`家属电话应输入手机格式`);
						return
					}
					if((!this.ruleForm.jiatingzhuzhi) && `jiashu` == this.tableName){
						this.$message.error(`家庭住址不能为空`);
						return
					}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
			  if(this.tableName=='yanglaojigou'){
				  this.ruleForm.sfsh = '待审核'
			  }
					if((!this.ruleForm.jigoumingcheng) && `yanglaojigou` == this.tableName){
						this.$message.error(`机构名称不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `yanglaojigou` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `yanglaojigou` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.jigoudizhi) && `yanglaojigou` == this.tableName){
						this.$message.error(`机构地址不能为空`);
						return
					}
					if(`yanglaojigou` == this.tableName && this.ruleForm.lianxifangshi &&(!this.$validate.isMobile(this.ruleForm.lianxifangshi))){
						this.$message.error(`联系方式应输入手机格式`);
						return
					}
            if(this.ruleForm.jigoutupian!=null) {
                this.ruleForm.jigoutupian = this.ruleForm.jigoutupian.replace(new RegExp(this.$base.url,"g"),"");
            }
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
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
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20230823/a87703978f9442fb910c2c0279b4c84c.jpg);

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 1px solid #eee;
						border-radius: 0px;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .3);
						outline: none;
						color: #666;
						background: #fff;
						width: 280px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 1px solid #eee;
						border-radius: 0px;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .3);
						outline: none;
						color: #666;
						background: #fff;
						width: 280px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #eee;
						border-radius: 0px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .3);
						outline: none;
						color: #666;
						background: #fff;
						width: 280px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #eee;
						border-radius: 0px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .3);
						outline: none;
						color: #666;
						background: #fff;
						width: 280px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 1px solid #eee;
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #999;
		  		  background: #fff;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px solid #eee;
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #999;
		  		  background: #fff;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px solid #eee;
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #999;
		  		  background: #fff;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				position: absolute;
				right: 3px;
				content: "*";
				order: 3;
			}
	.editor>.avatar-uploader {
		line-height: 0;
		height: 0;
	}
</style>
