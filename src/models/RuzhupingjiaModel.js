import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 入住评价
const RuzhupingjiaModel = sequelize.define('RuzhupingjiaModel', {
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
	tupian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '图片'
	},
	ruzhupingxing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '入住评星'
	},
	ruzhupingjia: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '入住评价'
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
	tableName: 'ruzhupingjia'
})

export default RuzhupingjiaModel
