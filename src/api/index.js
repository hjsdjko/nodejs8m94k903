import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import YonghuController from './Yonghu'
import JiashuController from './Jiashu'
import YanglaojigouController from './Yanglaojigou'
import JiankanghuodongController from './Jiankanghuodong'
import HuodongleixingController from './Huodongleixing'
import HuodongbaomingController from './Huodongbaoming'
import JigouyuyueController from './Jigouyuyue'
import ChuangweixinxiController from './Chuangweixinxi'
import ChuangweiyudingController from './Chuangweiyuding'
import HulixiangmuController from './Hulixiangmu'
import HulileixingController from './Hulileixing'
import YuyuejiluController from './Yuyuejilu'
import JinjihujiaoController from './Jinjihujiao'
import JiankangshujuController from './Jiankangshuju'
import HulipingjiaController from './Hulipingjia'
import RuzhupingjiaController from './Ruzhupingjia'
import ChatmessageController from './Chatmessage'
import FriendController from './Friend'
import ChatController from './Chat'
import ForumController from './Forum'
import NewstypeController from './Newstype'
import NewsController from './News'
import StoreupController from './Storeup'
import DiscusschuangweixinxiController from './Discusschuangweixinxi'
import DiscusshulixiangmuController from './Discusshulixiangmu'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/yonghu', YonghuController({ config, db }))

	api.use('/jiashu', JiashuController({ config, db }))

	api.use('/yanglaojigou', YanglaojigouController({ config, db }))

	api.use('/jiankanghuodong', JiankanghuodongController({ config, db }))

	api.use('/huodongleixing', HuodongleixingController({ config, db }))

	api.use('/huodongbaoming', HuodongbaomingController({ config, db }))

	api.use('/jigouyuyue', JigouyuyueController({ config, db }))

	api.use('/chuangweixinxi', ChuangweixinxiController({ config, db }))

	api.use('/chuangweiyuding', ChuangweiyudingController({ config, db }))

	api.use('/hulixiangmu', HulixiangmuController({ config, db }))

	api.use('/hulileixing', HulileixingController({ config, db }))

	api.use('/yuyuejilu', YuyuejiluController({ config, db }))

	api.use('/jinjihujiao', JinjihujiaoController({ config, db }))

	api.use('/jiankangshuju', JiankangshujuController({ config, db }))

	api.use('/hulipingjia', HulipingjiaController({ config, db }))

	api.use('/ruzhupingjia', RuzhupingjiaController({ config, db }))

	api.use('/chatmessage', ChatmessageController({ config, db }))

	api.use('/friend', FriendController({ config, db }))

	api.use('/chat', ChatController({ config, db }))

	api.use('/forum', ForumController({ config, db }))

	api.use('/newstype', NewstypeController({ config, db }))

	api.use('/news', NewsController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/discusschuangweixinxi', DiscusschuangweixinxiController({ config, db }))

	api.use('/discusshulixiangmu', DiscusshulixiangmuController({ config, db }))

	return api
}
