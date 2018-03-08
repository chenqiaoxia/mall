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

		res.render('login/login.ejs',{});
	})
	router.post('/',function(req,res){
		var name=req.body.name;
		var pwd=req.body.pwd;
		var sql = "SELECT * FROM login WHERE user_name='"+name+"'AND user_pwd='"+pwd+"'"
		db.query(sql,function(error,data){
			console.log('1111',data)
			if(error){
				console.log('读取数据库出错了');
			}else{
				var result;
				if(data.length>0){
					result=true;
					req.session['account']=name;
					res.send(result);
				}else{
					result=false;
					res.send(result);
				}
			}
		});
	})
	return router;
}