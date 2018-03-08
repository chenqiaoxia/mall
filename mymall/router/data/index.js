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
	router.get('/',function(req,res){
		var sql=`SELECT * FROM aaa.goods`
		db.query(sql,function(error,data){
			if (error) {
				console.log(error)
			}else{
				res.send(data);
				
			};
		})
		
	})
	router.get('/detail',function(req,res){
		var sql="SELECT * FROM aaa.goods where goods_id="+req.query.goods_id
		console.log(sql);
		db.query(sql,function(error,data){
			if (error) {
				console.log(error)
			}else{
				res.send(data);
				
			};
		})
		
	})
	router.post('/userlogin',function(req,res){
		var sql="SELECT * FROM aaa.user WHERE username='"+req.body.username+"'AND userpwd='"+req.body.userpwd+"'"
		db.query(sql,function(error,data){
			if (error) {
				console.log(error)
			}else{
				if (data.length>0) {
					console.log('存在该用户')
					var msg={"resultcode":'true',"msg":"查询成功"}
					res.send(msg);
				}else{
					var msg={"resultcode":'false',"msg":"查询失败"}
					res.send(msg);
				};
				
				
			};
		})
		
	})
	router.get('/lunbotu',function(req,res){
		var sql="SELECT img FROM aaa.lunbo "
		db.query(sql,function(error,data){
			if (error) {
				console.log(error)
			}else{
				if (data.length>0) {
					res.send(data);
				};	
			};
		})
		
	})
	router.get('/staritem',function(req,res){
		var sql="SELECT * FROM aaa.staritem WHERE goodsid LIKE '%st%'"
		db.query(sql,function(error,data){
			if (error) {
				console.log('sql错误')
			}else{
				if (data.length>0) {
					res.send(data);

				};
				
				
			};
		})
		
	})
	router.get('/recommend',function(req,res){
		var sql="SELECT * FROM aaa.staritem WHERE goodsid LIKE '%tj%'"
		db.query(sql,function(error,data){
			if (error) {
				console.log('sql错误')
			}else{
				if (data.length>0) {
					res.send(data);

				};
				
				
			};
		})
		
	})
	router.get('/goods',function(req,res){
		var sql="SELECT * FROM aaa.pcproduct"
		db.query(sql,function(error,data){
			if (error) {
				console.log('sql错误')
			}else{
				if (data.length>0) {
					res.send(data);

				};
				
				
			};
		})
		
	})
	router.get('/pcdetail',function(req,res){
		var sql="SELECT * FROM aaa.pcproduct WHERE product_id='"+req.query.product_id+"'"
		db.query(sql,function(error,data){
			if (error) {
				console.log('sql错误')
			}else{
				if (data.length>0) {
					res.send(data);

				};
				
				
			};
		})
		
	})
	router.get('/moitem',function(req,res){
		var sql="SELECT * FROM aaa.moproduct"
		db.query(sql,function(error,data){
			if (error) {
				console.log('sql错误')
			}else{
				if (data.length>0) {
					res.send(data);

				};
				
				
			};
		})
		
	})
	router.get('/modetail',function(req,res){
		console.log("进入详情查询")
		var sql="SELECT * FROM aaa.moproduct WHERE product_id='"+req.query.product_id+"'"
		console.log("打印sql语句")
		console.log(sql)
		db.query(sql,function(error,data){
			if (error) {
				console.log('sql错误')
			}else{
				if (data.length>0) {
					console.log("这是要返回的数据")
					console.log(data)
					res.send(data);

				};
				
				
			};
		})
		
	})
	return router;
}