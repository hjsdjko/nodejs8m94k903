import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 健康活动
const JiankanghuodongModel = sequelize.define('JiankanghuodongModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	huodongmingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '活动名称'
	},
	huodongleixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '活动类型'
	},
	huodongdidian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '活动地点'
	},
	huodongzhuangtai: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '活动状态'
	},
	kebaorenshu: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '可报人数'
	},
	lianxifangshi: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '联系方式'
	},
	huodongneirong: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '活动内容'
	},
	huodongtupian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '活动图片'
	},
	clicktime: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('clicktime')).format('YYYY-MM-DD HH:mm:ss')
        },
		defaultValue: DataTypes.NOW,
		comment: '最近点击时间'
	},
	reversetime: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('reversetime')).format('YYYY-MM-DD HH:mm:ss')
        },
		defaultValue: DataTypes.NOW,
		comment: '倒计结束时间'
	},
	clicknum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '点击次数'
	},
	storeupnum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '收藏数'
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
	tableName: 'jiankanghuodong'
})

export default JiankanghuodongModel
