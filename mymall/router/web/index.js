var express=require('express');
var mysql=require('mysql');
var db = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'aaa'
});
module.exports=function(){
	var router=express.Router();
	router.get('/',function(req,res){
		res.send("这是商城的首页面")
	})
	router.get('/login',function(req,res){
		res.render('web/user/user.ejs',{})
	})
	router.post('/login',function(req,res){
		var name=req.body.name;
		var pwd=req.body.pwd;
		console.log("请求的数据为：",name,pwd)
	    var sql=`select * from login where name='${name}' and pwd='${pwd}'`
	    db.query(sql,function(error,data){
	    	if(error){
	    		console.log('sql语句有问题')
	    	}else{
	    		if (data>0) {
	    			res.redirect('/')
	    		}else{
	    			console.log("没有该用户")
	    		};
	    	}
	    })
	})
	return router;
}