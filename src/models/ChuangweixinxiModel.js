import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 床位信息
const ChuangweixinxiModel = sequelize.define('ChuangweixinxiModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	jigoumingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '机构名称'
	},
	chuangweihao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '床位号'
	},
	weizhi: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '位置'
	},
	zhuangtai: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '状态'
	},
	jiage: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '价格/天'
	},
	hujiaodianhua: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '呼叫电话'
	},
	shebeisheshi: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '设备设施'
	},
	tupian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '图片'
	},
	discussnum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '评论数'
	},
	addtime: {
  		type: DataTypes.DATE,
  		defaultValue: DataTypes.NOW,
    	allowNull: false,
    	get() {
            return moment(this.getDataValue('addtime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '添加时间'
	}
}, {
	timestamps: false,
	freezeTableName: true,
	tableName: 'chuangweixinxi'
})

export default ChuangweixinxiModel
