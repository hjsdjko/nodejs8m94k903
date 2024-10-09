import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 机构预约
const JigouyuyueModel = sequelize.define('JigouyuyueModel', {
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
	jigoudizhi: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '机构地址'
	},
	jigoutupian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '机构图片'
	},
	yuyueshijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('yuyueshijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		defaultValue: DataTypes.NOW,
		comment: '预约时间'
	},
	yuyuebeizhu: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '预约备注'
	},
	yonghuzhanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '用户账号'
	},
	yonghuxingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '用户姓名'
	},
	jiashuzhanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '家属账号'
	},
	jiashuxingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '家属姓名'
	},
	sfsh: {
		type: DataTypes.STRING,
		defaultValue: '待审核',
		allowNull: true,
		comment: '是否审核'
	},
	shhf: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '审核回复'
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
	tableName: 'jigouyuyue'
})

export default JigouyuyueModel
