import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 好友表
const FriendModel = sequelize.define('FriendModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	uid: {
		type: DataTypes.BIGINT,
		defaultValue: 0,
		allowNull: true,
		comment: '用户ID'
	},
	fid: {
		type: DataTypes.BIGINT,
		defaultValue: 0,
		allowNull: true,
		comment: '好友用户ID'
	},
	name: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '名称'
	},
	picture: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '图片'
	},
	role: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '角色'
	},
	tablename: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '表名'
	},
	alias: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '别名'
	},
	type: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '类型(0:好友申请，1:好友，2:消息)'
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
	tableName: 'friend'
})

export default FriendModel
