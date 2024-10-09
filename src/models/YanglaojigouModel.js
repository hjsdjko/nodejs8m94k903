import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 养老机构
const YanglaojigouModel = sequelize.define('YanglaojigouModel', {
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
	mima: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '密码'
	},
	jigoudizhi: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '机构地址'
	},
	jigouguimo: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '机构规模'
	},
	chuanglishijian: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('chuanglishijian')).format('YYYY-MM-DD')
        },
		defaultValue: new Date(),
		comment: '创立时间'
	},
	fuzeren: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '负责人'
	},
	lianxifangshi: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '联系方式'
	},
	jigoujieshao: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '机构介绍'
	},
	jigoutupian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '机构图片'
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
	tableName: 'yanglaojigou'
})

export default YanglaojigouModel
