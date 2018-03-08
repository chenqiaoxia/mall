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
		// 查询数据库中用户表的所有信息
         var sql = "SELECT * FROM user"
		db.query(sql,function(error,data){
			if(error){
				console.log('SQL语句出错了',error);
			}else{
				if(data.length>0){
					// 如果数据库中有数据执行以下语句
					console.log(data)
					res.render('./user/user.ejs',{data:data,name:req.session['account']});
				}else{
					 console.log('查询不到')
					res.render('./user/user.ejs',{data:data,name:req.session['account']});
				}
			}
		});
	})
	router.get('/del',function(req,res){
		var username=req.query.username;
		var sql = "DELETE FROM aaa.user WHERE username = '"+username+"' "
		db.query(sql,function(error,data){
			if(error){
				console.log('用户删除错误',error);
			}else{
				res.redirect('/admin/yonghu');
			}
		});
	})
	router.get('/add',function(req,res){
		res.render('./user/userinsert.ejs',{name:req.session['account']});
	})
	router.post('/add',function(req,res){
		var username=req.body.username;
		var userpwd=req.body.userpwd;
		var tel=req.body.tel;
		var select="SELECT 	* FROM aaa.user WHERE username='"+username+"'";
		db.query(select,function(error,data){
			if(error){
		        		console.log('用户插入查询错误',error)
		        	}else{
		        		if (data.length>0) {
		        			res.render('./user/inserterror.ejs');
		        		}else{
		        			var sql="INSERT INTO aaa.user ( username, userpwd, tel)VALUES('"+username+"', '"+userpwd+"', '"+tel+"');"
		                    db.query(sql,function(error,data){
		                    	if(error){
		                    		console.log('用户插入错误',error)
		                    	}else{
		                    		res.redirect('/admin/yonghu');
		                    	}
		                    })
		        		};
		        	}
		        
		})

	})
	return router;
}