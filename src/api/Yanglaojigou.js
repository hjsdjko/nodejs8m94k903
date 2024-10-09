import { version } from '../../package.json'
import { Router } from 'express'
import { Sequelize, Op,literal, QueryTypes } from 'sequelize'
import sequelize from '../models/sequelize'
import toRes from '../lib/toRes'
import YanglaojigouModel from '../models/YanglaojigouModel'
import util from '../lib/util'
import jwt from 'jsonwebtoken'
import moment from 'moment'
import ConfigModel from '../models/ConfigModel'
import https from 'https'
import request from 'request'
import qs from 'querystring'
import path from 'path'
import fs from 'fs'
import config from '../config.json'
const redis = require('redis')




export default ({ config, db }) => {
	let api = Router()

	// 用户登录接口
	api.all('/login', async (req, res) => {

		try {

			let pwd = req.query.password
			let userinfo = await YanglaojigouModel.findOne({ where: { jigoumingcheng: req.query.username, mima: pwd } })
			if (userinfo === null) {
				toRes.session(res, -1, '用户名或密码错误！')
				return
			}

			if (userinfo.dataValues.sfsh === '否' || userinfo.dataValues.sfsh == '待审核' || userinfo.dataValues.sfsh == '')
			{
				toRes.session(res, -1, '账号已锁定，请联系管理员审核!')
				return
			}

			const token = jwt.sign(
				{
					id: userinfo.dataValues.id,
					username: userinfo.dataValues.jigoumingcheng,
					role: '养老机构',
                    loginUserColumn: 'jigoumingcheng',
					jigoumingcheng:userinfo.dataValues.jigoumingcheng,
					mima:userinfo.dataValues.mima,
					jigoudizhi:userinfo.dataValues.jigoudizhi,
					jigouguimo:userinfo.dataValues.jigouguimo,
					chuanglishijian:userinfo.dataValues.chuanglishijian,
					fuzeren:userinfo.dataValues.fuzeren,
					lianxifangshi:userinfo.dataValues.lianxifangshi,
					jigoujieshao:userinfo.dataValues.jigoujieshao,
					jigoutupian:userinfo.dataValues.jigoutupian,
					sfsh:userinfo.dataValues.sfsh,
					shhf:userinfo.dataValues.shhf,
					clicktime:userinfo.dataValues.clicktime,
					clicknum:userinfo.dataValues.clicknum,
					storeupnum:userinfo.dataValues.storeupnum,
                    tableName: 'yanglaojigou'

				},
				config.jwtSecret,
				{
					expiresIn: 60 * 60 * 24 * 1
				}
			)

			userinfo.dataValues.token = token
			userinfo.dataValues.role = '养老机构'
			userinfo.dataValues.loginUserColumn = 'jigoumingcheng'
			userinfo.dataValues.tableName = 'yanglaojigou'
			delete userinfo.dataValues.mima
			req.session.userinfo = userinfo


			toRes.session(res, 0, '登录成功！', token)
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})


	// 用户退出接口
	api.all('/logout', (req, res) => {
		
		req.session.destroy(err => {
			toRes.session(res, 0, '退出成功！')
		})
	})

	// 注册接口
	api.post('/register', async (req, res) => {

		try {

			Object.keys(req.body).forEach(item=>{
				if(req.body[item] == '')  delete req.body[item]
			})



			const userinfo = await YanglaojigouModel.create(req.body)

			if (userinfo === null) {

				toRes.session(res, -1, '注册失败！')
			} else {

				toRes.session(res, 0, '注册成功！')
			}
		} catch(err) {
			
			toRes.session(res, -2, '请检查是否正确输入或用户名重复！', '', 200)
		}
	})

	// 获取session接口
	api.all('/session', async (req, res) => {

		try {

			toRes.record(res, 0, await YanglaojigouModel.findOne({ where: { id: req.session.userinfo === undefined ? jwt.decode(req.headers.token).id : req.session.userinfo.id } }))
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 忘记密码（找回密码）
	api.all('/resetPass', async (req, res) => {

		try {

    		let pwd = '123456'
			await YanglaojigouModel.update({
				mima: pwd
			}, {
				where: {
				  jigoumingcheng: req.query.username
				}
			})

			toRes.session(res, 0, '密码已重置为：123456')
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 分页接口（后端）
	api.get('/page', async (req, res) => {

		try {

			let page = parseInt(req.query.page) || 1
			let limit = parseInt(req.query.limit) || 10
			let sort = req.query.sort || 'id'
			let order = req.query.order || 'asc'

			let where = {}
			let jigoumingcheng = req.query.jigoumingcheng
			if (jigoumingcheng) {

				if (jigoumingcheng.indexOf('%') != -1) {
					where.jigoumingcheng = {
						[Op.like]: jigoumingcheng
					}
				} else {
					where.jigoumingcheng = {
						[Op.eq]: jigoumingcheng
					}
				}
			}
			let mima = req.query.mima
			if (mima) {

				if (mima.indexOf('%') != -1) {
					where.mima = {
						[Op.like]: mima
					}
				} else {
					where.mima = {
						[Op.eq]: mima
					}
				}
			}
			let jigoudizhi = req.query.jigoudizhi
			if (jigoudizhi) {

				if (jigoudizhi.indexOf('%') != -1) {
					where.jigoudizhi = {
						[Op.like]: jigoudizhi
					}
				} else {
					where.jigoudizhi = {
						[Op.eq]: jigoudizhi
					}
				}
			}
			let jigouguimo = req.query.jigouguimo
			if (jigouguimo) {

				if (jigouguimo.indexOf('%') != -1) {
					where.jigouguimo = {
						[Op.like]: jigouguimo
					}
				} else {
					where.jigouguimo = {
						[Op.eq]: jigouguimo
					}
				}
			}
			let chuanglishijian = req.query.chuanglishijian
			if (chuanglishijian) {

				if (chuanglishijian.indexOf('%') != -1) {
					where.chuanglishijian = {
						[Op.like]: chuanglishijian
					}
				} else {
					where.chuanglishijian = {
						[Op.eq]: chuanglishijian
					}
				}
			}
			let fuzeren = req.query.fuzeren
			if (fuzeren) {

				if (fuzeren.indexOf('%') != -1) {
					where.fuzeren = {
						[Op.like]: fuzeren
					}
				} else {
					where.fuzeren = {
						[Op.eq]: fuzeren
					}
				}
			}
			let lianxifangshi = req.query.lianxifangshi
			if (lianxifangshi) {

				if (lianxifangshi.indexOf('%') != -1) {
					where.lianxifangshi = {
						[Op.like]: lianxifangshi
					}
				} else {
					where.lianxifangshi = {
						[Op.eq]: lianxifangshi
					}
				}
			}
			let jigoujieshao = req.query.jigoujieshao
			if (jigoujieshao) {

				if (jigoujieshao.indexOf('%') != -1) {
					where.jigoujieshao = {
						[Op.like]: jigoujieshao
					}
				} else {
					where.jigoujieshao = {
						[Op.eq]: jigoujieshao
					}
				}
			}
			let jigoutupian = req.query.jigoutupian
			if (jigoutupian) {

				if (jigoutupian.indexOf('%') != -1) {
					where.jigoutupian = {
						[Op.like]: jigoutupian
					}
				} else {
					where.jigoutupian = {
						[Op.eq]: jigoutupian
					}
				}
			}
			let sfsh = req.query.sfsh
			if (sfsh) {

				if (sfsh.indexOf('%') != -1) {
					where.sfsh = {
						[Op.like]: sfsh
					}
				} else {
					where.sfsh = {
						[Op.eq]: sfsh
					}
				}
			}
			let shhf = req.query.shhf
			if (shhf) {

				if (shhf.indexOf('%') != -1) {
					where.shhf = {
						[Op.like]: shhf
					}
				} else {
					where.shhf = {
						[Op.eq]: shhf
					}
				}
			}
			let clicktime = req.query.clicktime
			if (clicktime) {

				if (clicktime.indexOf('%') != -1) {
					where.clicktime = {
						[Op.like]: clicktime
					}
				} else {
					where.clicktime = {
						[Op.eq]: clicktime
					}
				}
			}
			let clicknum = req.query.clicknum
			if (clicknum) {

				if (clicknum.indexOf('%') != -1) {
					where.clicknum = {
						[Op.like]: clicknum
					}
				} else {
					where.clicknum = {
						[Op.eq]: clicknum
					}
				}
			}
			let storeupnum = req.query.storeupnum
			if (storeupnum) {

				if (storeupnum.indexOf('%') != -1) {
					where.storeupnum = {
						[Op.like]: storeupnum
					}
				} else {
					where.storeupnum = {
						[Op.eq]: storeupnum
					}
				}
			}

			let orders =[]
			const sortList = sort.split(",")
			const orderList = order.split(",")
			sortList.forEach((item, index) => {
				orders.push([item,orderList[index]])
			  });
			let result = await YanglaojigouModel.findAndCountAll({
				order: [orders],
				where,
				offset: (page - 1) * limit,
				limit
			})
			
			result.currPage = page
			result.pageSize = limit

			toRes.page(res, 0, result)
		} catch(err) {
			res.status(500).render(err)
			//toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	  // 分页接口（前端）
	api.get('/lists', async (req, res) => {

		try {
			let result = await YanglaojigouModel.findAll()
			toRes.record(res, 0, result)
		} catch(err) {
			
			toRes.session(res, 401, '您的权限不够！', '', 200)
		}
	})

    // 分页接口（前端）
	api.get('/list', async (req, res) => {

		try {

			let page = parseInt(req.query.page) || 1
			let limit = parseInt(req.query.limit) || 10
			let sort = req.query.sort || 'id'
			let order = req.query.order || 'asc'

			let where = {}
			let sfsh = req.query.sfsh
			if (sfsh) {
				where.sfsh = {
					[Op.eq]: sfsh
				}
			}
			let jigoumingcheng = req.query.jigoumingcheng
			if (jigoumingcheng) {

				if (jigoumingcheng.indexOf('%') != -1) {
					where.jigoumingcheng = {
						[Op.like]: jigoumingcheng
					}
				} else {
					where.jigoumingcheng = {
						[Op.eq]: jigoumingcheng
					}
				}
			}
			let jigoudizhi = req.query.jigoudizhi
			if (jigoudizhi) {

				if (jigoudizhi.indexOf('%') != -1) {
					where.jigoudizhi = {
						[Op.like]: jigoudizhi
					}
				} else {
					where.jigoudizhi = {
						[Op.eq]: jigoudizhi
					}
				}
			}


			let orders =[]
			const sortList = sort.split(",")
			const orderList = order.split(",")
			sortList.forEach((item, index) => {
				orders.push([item,orderList[index]])
			  });
			let result = await YanglaojigouModel.findAndCountAll({
				order: [orders],
				where,
				offset: (page - 1) * limit,
				limit
			})
			
			result.currPage = page
			result.pageSize = limit

			toRes.page(res, 0, result)
		} catch(err) {
			
			toRes.session(res, 401, '您的权限不够！', '', 200)
		}
	})


	// 保存接口（后端）
	api.post('/save', async (req, res) => {

		try {

			Object.keys(req.body).forEach(item=>{
				if(req.body[item] == '')  delete req.body[item]
				if(req.body[item] == '' && item == 'sfsh')  req.body[item] = '待审核'
			})
			let jigoumingchengcount = await YanglaojigouModel.count({
				where: {
					jigoumingcheng: req.body["jigoumingcheng"]
				}
			})
            if (jigoumingchengcount > 0) {
				toRes.session(res, -1, '机构名称已存在')
            }
			req.body.clicktime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')



			const userinfo = await YanglaojigouModel.create(req.body)

			if (userinfo === null) {

				toRes.session(res, -1, '添加失败！')
			} else {

				toRes.session(res, 0, '添加成功！')
			}
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

    // 保存接口（前端）
	api.post('/add', async (req, res) => {

		try {

			Object.keys(req.body).forEach(item=>{
				if(req.body[item] == '')  delete req.body[item]
				if(req.body[item] == '' && item == 'sfsh')  req.body[item] = '待审核'
			})

			if (jwt.decode(req.headers.token) == null) {
				toRes.session(res, 401, '请登录后再操作', '', 401)
			}
			let jigoumingchengcount = await YanglaojigouModel.count({
				where: {
					jigoumingcheng: req.body["jigoumingcheng"]
				}
			})
            if (jigoumingchengcount > 0) {
				toRes.session(res, -1, '机构名称已存在')
            }



			req.body.clicktime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')


			const userinfo = await YanglaojigouModel.create(req.body)

			if (userinfo === null) {

				toRes.session(res, -1, '添加失败！')
			} else {

				toRes.session(res, 0, '添加成功！')
			}
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 更新接口
	api.post('/update', async (req, res) => {

		try {
			let jigoumingchengcount = await YanglaojigouModel.count({
				where :{
					id:{
						[Op.ne]:req.body.id
					},
					jigoumingcheng:{
						[Op.eq]:req.body.jigoumingcheng
					}
				}
			})
            if (jigoumingchengcount > 0) {
				toRes.session(res, -1, '机构名称已存在')
            }


			await YanglaojigouModel.update(req.body, {
				where: {
				  id: req.body.id || 0
				}
			})


			toRes.session(res, 0, '编辑成功！')
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 删除接口
	api.post('/delete', async (req, res) => {

		try {

			await YanglaojigouModel.destroy({
				where: {
				  id: {
					[Op.in]: req.body
				  }
				}
			})

			toRes.session(res, 0, '删除成功！')
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 详情接口（后端）
	api.all('/info/:id', async (req, res) => {

		try {

            await YanglaojigouModel.update({
				clicktime: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
			}, {
				where: {
				  id: req.params.id
				}
			})
			const recordInfo = await YanglaojigouModel.findOne({ where: { id: req.params.id } })
            await recordInfo.increment('clicknum')

			toRes.record(res, 0, await YanglaojigouModel.findOne({ where: { id: req.params.id } }))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})


    // 详情接口（前端）
	api.all('/detail/:id', async (req, res) => {

		try {

            await YanglaojigouModel.update({
				clicktime: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
			}, {
				where: {
				  id: req.params.id
				}
			})
			const recordInfo = await YanglaojigouModel.findOne({ where: { id: req.params.id } })
            await recordInfo.increment('clicknum')

			toRes.record(res, 0, await YanglaojigouModel.findOne({ where: { id: req.params.id } }))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 获取需要提醒的记录数接口
	api.get('/remind/:columnName/:type', async (req, res) => {

        let where = ' 1=1 '

		try {

			let sql = 'SELECT 0 AS count'
			
			if (req.params.type == 1) {
				if (req.query.remindstart) sql = "SELECT COUNT(*) AS count FROM yanglaojigou WHERE " + where + " AND " + req.params.columnName + " >= '" + req.query.remindstart + "'"
				if (req.query.remindend) sql = "SELECT COUNT(*) AS count FROM yanglaojigou WHERE " + where + " AND " + req.params.columnName + " <= '" + req.query.remindend + "'"

				if (req.query.remindstart && req.query.remindend) {
					sql = "SELECT COUNT(*) AS count FROM yanglaojigou WHERE " + where + " AND " + req.params.columnName + " >= '" + req.query.remindstart + "' AND " + req.params.columnName + " <= '" + req.query.remindend + "'"
				}
			}

			if (req.params.type == 2) {
				if (req.query.remindstart) {
					let remindStart = util.getDateTimeFormat(0 + Number(req.query.remindstart), "yyyy-MM-dd")
					sql = "SELECT COUNT(*) AS count FROM yanglaojigou WHERE " + where + " AND " + req.params.columnName + " >= '" + remindStart + "'"
				}
				if (req.query.remindend) {
					let remindEnd = util.getDateTimeFormat(req.query.remindend, "yyyy-MM-dd")
					sql = "SELECT COUNT(*) AS count FROM yanglaojigou WHERE " + where + " AND " + req.params.columnName + " <= '" + remindEnd + "'"
				}

				if (req.query.remindstart && req.query.remindend) {
					let remindStart = util.getDateTimeFormat(0 + Number(req.query.remindstart), "yyyy-MM-dd")
					let remindEnd = util.getDateTimeFormat(req.query.remindend, "yyyy-MM-dd")
					sql = "SELECT COUNT(*) AS count FROM yanglaojigou WHERE " + where + " AND " + req.params.columnName + " >= '" + remindStart + "' AND " + req.params.columnName + " <= '" + remindEnd + "'"
				}
			}

			const results = await sequelize.query(sql, {
				plain: true,
				raw: true,
				type: QueryTypes.SELECT
			})

			toRes.count(res, 0, results.count)
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})




	// 智能推荐接口
	api.get('/autoSort', async (req, res) => {

		try {

			let page = parseInt(req.query.page) || 1
			let limit = parseInt(req.query.limit) || 5
			let sort = req.query.sort || 'clicktime'
			let order = req.query.order || 'desc'

            sort = "clicknum"

			let where = {}
			const keys = Object.keys(req.query);  
			for (let i = 0; i < keys.length; i++) {  
				const key = keys[i];  
				if(key!="page" && key!="limit"&& key!="sort"&&key!="order"){
					if (req.query[key]) {
						where[key] = {
							[Op.eq]: req.query[key]
						}
					}
				}
			}  

			let orders =[]
			const sortList = sort.split(",")
			const orderList = order.split(",")
			sortList.forEach((item, index) => {
				orders.push([item,orderList[index]])
			  });
			let result = await YanglaojigouModel.findAndCountAll({
				order: [orders],
				where,
				offset: (page - 1) * limit,
				limit
			})
		
			result.currPage = page
			result.pageSize = limit

			toRes.page(res, 0, result)
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})






	// 分组统计接口
	api.get('/group/:columnName', async (req, res) => {

		try {

			let sql = ""
			let columnName = req.params.columnName
			// let tableName = "yanglaojigou"
			let where = " WHERE 1 = 1 "
			sql = "SELECT COUNT(*) AS total, " + columnName + " FROM yanglaojigou " + where + " GROUP BY " + columnName 
			toRes.record(res, 0, await sequelize.query(sql, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 统计指定字段
	api.get('/value/:xColumnName/:yColumnName', async (req, res) => {

		try {

			let sql = ""
			let xColumnName = req.params.xColumnName
			let yColumnName = req.params.yColumnName
			let where = " WHERE 1 = 1 "
			if ("yanglaojigou" == "orders") {
				where += " AND status IN ('已支付', '已发货', '已完成') ";
			}

			sql = "SELECT " + xColumnName + ", SUM(" + yColumnName + ") AS total FROM yanglaojigou " + where + " GROUP BY " + xColumnName + " DESC"
			
			toRes.record(res, 0, await sequelize.query(sql, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// (按值统计）时间统计类型(多)
	api.get('/valueMul/:xColumnName', async (req, res) => {

		try {	
			let sql = ""
			let xColumnName = req.params.xColumnName
			let yColumnName = req.query.yColumnNameMul
			let tableName = "yanglaojigou"
			let where = " WHERE 1 = 1 "
			const promises = yColumnName.split(',').map(async(item)=>{
				sql = "SELECT " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY " + xColumnName;
				const results = await sequelize.query(sql, {
					plain: false,
					raw: true,
					type: QueryTypes.SELECT
				});
				return results;
			})
            	
			toRes.record(res, 0, await Promise.all(promises))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// (按值统计）时间统计类型(多)
	api.get('/valueMul/:xColumnName/:timeStatType', async (req, res) => {

		try {	
			let sql = ""
			let xColumnName = req.params.xColumnName
			let yColumnName = req.query.yColumnNameMul
			let timeStatType = req.params.timeStatType
			let tableName = "yanglaojigou"
			let where = " WHERE 1 = 1 "

			const promises = yColumnName.split(',').map(async(item)=>{
				sql = "SELECT " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY " + xColumnName;
				if (config.dbConnection.dbtype.toLowerCase() == "mysql") {
            	    if (timeStatType == "日")
            	        sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y-%m-%d') " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y-%m-%d')";
            	    if (timeStatType == "月")
            	        sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y-%m') " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y-%m')";
            	    if (timeStatType == "年")
            	        sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y') " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y')";
            	} else {
            	    if (timeStatType == "日")
            	        sql = "SELECT DATE_FORMAT(VARCHAR(10)," + xColumnName + ", 120) " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(10)," + xColumnName + ", 120)";
            	    if (timeStatType == "月")
            	        sql = "SELECT DATE_FORMAT(VARCHAR(7)," + xColumnName + ", 120) " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(7)," + xColumnName + ", 120)";
            	    if (timeStatType == "年")
            	        sql = "SELECT DATE_FORMAT(VARCHAR(4)," + xColumnName + ", 120) " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(4)," + xColumnName + ", 120)";
            	}
				const results = await sequelize.query(sql, {
					plain: false,
					raw: true,
					type: QueryTypes.SELECT
				});
				return results;
			})
            	
			toRes.record(res, 0, await Promise.all(promises))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 按日期统计
	api.get('/value/:xColumnName/:yColumnName/:timeStatType', async (req, res) => {

		try {
			
			let sql = ""
			let xColumnName = req.params.xColumnName
			let yColumnName = req.params.yColumnName
			let timeStatType = req.params.timeStatType
			let tableName = "yanglaojigou"
			let where = " WHERE 1 = 1 "
			if ("yanglaojigou" == "orders") {
				where += " AND status IN ('已支付', '已发货', '已完成') ";
			}

            if (config.dbConnection.dbtype.toLowerCase() == "mysql") {
                if (timeStatType == "日")
                    sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y-%m-%d') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y-%m-%d')";
                if (timeStatType == "月")
                    sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y-%m') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y-%m')";
                if (timeStatType == "年")
                    sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y')";
            } else {
                if (timeStatType == "日")
                    sql = "SELECT DATE_FORMAT(VARCHAR(10)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(10)," + xColumnName + ", 120)";
                if (timeStatType == "月")
                    sql = "SELECT DATE_FORMAT(VARCHAR(7)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(7)," + xColumnName + ", 120)";
                if (timeStatType == "年")
                    sql = "SELECT DATE_FORMAT(VARCHAR(4)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(4)," + xColumnName + ", 120)";
            }
			toRes.record(res, 0, await sequelize.query(sql, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})














	// 批量审核接口
	api.post('/shBatch', async (req, res) => {

		try {

			req.body.forEach(async id => {
				let data= await YanglaojigouModel.findOne({ where: { id } })
				data = data.dataValues
				data.sfsh = req.query.sfsh
				data.shhf = req.query.shhf
				await YanglaojigouModel.update(data, {
					where: {
						id: data.id || 0
					}
				})
			})

			toRes.session(res, 0, '审核成功！')
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	return api
}
