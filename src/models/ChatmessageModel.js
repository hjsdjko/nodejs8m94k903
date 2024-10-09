import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 消息表
const ChatmessageModel = sequelize.define('ChatmessageModel', {
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
	content: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '内容'
	},
	format: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '格式(1:文字，2:图片)'
	},
	isread: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '消息已读(0:未读，1:已读)'
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
	tableName: 'chatmessage'
})

export default ChatmessageModel
