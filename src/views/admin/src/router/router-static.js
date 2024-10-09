import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import discusshulixiangmu from '@/views/modules/discusshulixiangmu/list'
    import discusschuangweixinxi from '@/views/modules/discusschuangweixinxi/list'
    import jiankangshuju from '@/views/modules/jiankangshuju/list'
    import jiashu from '@/views/modules/jiashu/list'
    import yuyuejilu from '@/views/modules/yuyuejilu/list'
    import storeup from '@/views/modules/storeup/list'
    import chuangweiyuding from '@/views/modules/chuangweiyuding/list'
    import forum from '@/views/modules/forum/list'
    import jigouyuyue from '@/views/modules/jigouyuyue/list'
    import hulixiangmu from '@/views/modules/hulixiangmu/list'
    import ruzhupingjia from '@/views/modules/ruzhupingjia/list'
    import chuangweixinxi from '@/views/modules/chuangweixinxi/list'
    import yonghu from '@/views/modules/yonghu/list'
    import huodongbaoming from '@/views/modules/huodongbaoming/list'
    import jinjihujiao from '@/views/modules/jinjihujiao/list'
    import chat from '@/views/modules/chat/list'
    import yanglaojigou from '@/views/modules/yanglaojigou/list'
    import jiankanghuodong from '@/views/modules/jiankanghuodong/list'
    import hulileixing from '@/views/modules/hulileixing/list'
    import config from '@/views/modules/config/list'
    import hulipingjia from '@/views/modules/hulipingjia/list'
    import huodongleixing from '@/views/modules/huodongleixing/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '新闻资讯',
        component: news
      }
      ,{
	path: '/discusshulixiangmu',
        name: '护理项目评论',
        component: discusshulixiangmu
      }
      ,{
	path: '/discusschuangweixinxi',
        name: '床位信息评论',
        component: discusschuangweixinxi
      }
      ,{
	path: '/jiankangshuju',
        name: '健康数据',
        component: jiankangshuju
      }
      ,{
	path: '/jiashu',
        name: '家属',
        component: jiashu
      }
      ,{
	path: '/yuyuejilu',
        name: '预约记录',
        component: yuyuejilu
      }
      ,{
	path: '/storeup',
        name: '我的收藏',
        component: storeup
      }
      ,{
	path: '/chuangweiyuding',
        name: '床位预订',
        component: chuangweiyuding
      }
      ,{
	path: '/forum',
        name: '交流中心',
        component: forum
      }
      ,{
	path: '/jigouyuyue',
        name: '机构预约',
        component: jigouyuyue
      }
      ,{
	path: '/hulixiangmu',
        name: '护理项目',
        component: hulixiangmu
      }
      ,{
	path: '/ruzhupingjia',
        name: '入住评价',
        component: ruzhupingjia
      }
      ,{
	path: '/chuangweixinxi',
        name: '床位信息',
        component: chuangweixinxi
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/huodongbaoming',
        name: '活动报名',
        component: huodongbaoming
      }
      ,{
	path: '/jinjihujiao',
        name: '紧急呼叫',
        component: jinjihujiao
      }
      ,{
	path: '/chat',
        name: '在线客服',
        component: chat
      }
      ,{
	path: '/yanglaojigou',
        name: '养老机构',
        component: yanglaojigou
      }
      ,{
	path: '/jiankanghuodong',
        name: '健康活动',
        component: jiankanghuodong
      }
      ,{
	path: '/hulileixing',
        name: '护理类型',
        component: hulileixing
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/hulipingjia',
        name: '护理评价',
        component: hulipingjia
      }
      ,{
	path: '/huodongleixing',
        name: '活动类型',
        component: huodongleixing
      }
      ,{
	path: '/newstype',
        name: '新闻资讯分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
