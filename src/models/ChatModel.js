import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 在线客服
const ChatModel = sequelize.define('ChatModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	userid: {
		type: DataTypes.BIGINT,
		defaultValue: 0,
		allowNull: true,
		comment: '用户id'
	},
	adminid: {
		type: DataTypes.BIGINT,
		defaultValue: 0,
		allowNull: true,
		comment: '管理员id'
	},
	ask: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '提问'
	},
	reply: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '回复'
	},
	isreply: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '是否回复'
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
	tableName: 'chat'
})

export default ChatModel
