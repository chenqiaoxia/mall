var express=require('express');
var mysql=require('mysql');
var multer=require('multer');
var path=require("path");
var fs = require('fs');
var db = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'aaa'
});
module.exports=function(){
	var router=express.Router();
	router.use(function(req,res,next){
		if (req.session['account']==undefined&&req.url!='/login') {
			res.redirect("/admin/login");
		}else{
			next();
		};
	})
	router.get('/',function(req,res){
		res.render('shouye.ejs',{data:"后台首页",name:req.session['account']});

	})
	//管理员登录界面
	router.use('/login',require('./login.js')());
	//商品管理界面
	router.use('/shangpin',require('./shangpin.js')());
	//后台用户管理界面
	router.use('/yonghu',require('./user.js')())
	router.get('/xiangqing',function(req,res){
		res.render('xiangqing.ejs',{data:"后台详情界面",name:req.session['account']});
	})
	router.get('/lunbo',function(req,res){
		res.render('lunbo.ejs',{data:"后台轮播图管理界面",name:req.session['account']});
	})
	router.get('/gouwuche',function(req,res){
		res.render('gouwuche.ejs',{data:"后台购物车管理界面",name:req.session['account']});
	})
	return router;
}