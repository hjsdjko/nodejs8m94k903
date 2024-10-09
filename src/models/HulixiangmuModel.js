import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 护理项目
const HulixiangmuModel = sequelize.define('HulixiangmuModel', {
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
	hulixiangmu: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '护理项目'
	},
	hulileixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '护理类型'
	},
	hulijiage: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '护理价格'
	},
	hulimiaoshu: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '护理描述'
	},
	hulitupian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '护理图片'
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
	clicknum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '点击次数'
	},
	discussnum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '评论数'
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
	tableName: 'hulixiangmu'
})

export default HulixiangmuModel
