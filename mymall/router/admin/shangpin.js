var express=require('express');
var mysql=require('mysql');
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
		var sql = "SELECT * FROM goods"
		db.query(sql,function(error,data){
			if(error){
				console.log('读取数据库出错了');
			}else{
				if(data.length>0){
					res.render('./shangpin/shangpin.ejs',{data:data,name:req.session['account']});
				}else{
					 console.log('查询不到')
					res.render('./shangpin/shangpin.ejs',{data:data,name:req.session['account']});
				}
			}
		});
		
	})
	router.get('/del',function(req,res){
		var id=req.query.id;
		var sql = "DELETE FROM aaa.goods WHERE goods_id= '"+id+"' "
		db.query(sql,function(error,data){
			if(error){
				console.log(error);
			}else{
				res.redirect('/admin/shangpin');
			}
		});
	})
	router.get('/add',function(req,res){
		//后缀名ejs就可以直接找到view文件
		res.render('shangpin/shangpinginsert.ejs',{name:req.session['account']})
	})
	router.get('/update',function(req,res){
		var goods_id=req.query.id;
		console.log(goods_id);
	    var sql="SELECT * FROM aaa.goods WHERE goods_id='"+goods_id+"'";
	    db.query(sql,function(error,data){
			if(error){
				console.log('修改数据库出错了');
			}else{
				console.log(data);
				res.render('shangpin/shangpingenggai.ejs',{data:data[0],name:req.session['account']});
			}
		});
		
	})
	router.post('/update',function(req,res){
		var oldName = req.files[0].path;
		var ext = path.parse(req.files[0].originalname).ext;
		var newName = oldName + ext;
		var goods_id=req.body.goods_id;
		var goods_name=req.body.goods_name;
		var goods_img=req.body.goods_img;
		var goods_desc=req.body.goods_desc;
		var goods_price=req.body.goods_price;
		var pingjia=req.body.pingjia;
		var xiaoliang=req.body.xiaoliang;
		var delSql = "select * from goods where goods_id=" + goods_id;
		db.query(delSql,(error,data)=>{
			if(error){
				res.send(error);
			}else{
				if(data.length==0){
					res.send('修改有误');
				}else{
					var imgName = data[0].goods_img;
					var imgPath = req.files[0].destination + imgName;
					console.log(imgPath);
					fs.unlink(imgPath,(error)=>{
						if(error){
							console.log(error)
							res.send('删除异常');
						}else{
							var file=req.files[0].filename+ext;

							var sql="UPDATE aaa.goods SET goods_name = '"+goods_name+"' , goods_desc = '"+goods_desc+"' , goods_price = '"+goods_price+"' , pingjia = '"+pingjia+"' , xiaoliang = '"+xiaoliang+"' , goods_img = '"+file+"' WHERE goods_id = '"+goods_id+"' ;"
							fs.rename(oldName,newName,(error)=>{
								if(error){
									res.send('fail');
								}else{
									db.query(sql,()=>{
										res.redirect('/admin/shangpin');
									});
								}
							});
						}
					});
				}
			}


		})
		
	})
	router.post('/add',function(req,res){
		var oldName = req.files[0].path;
		var ext = path.parse(req.files[0].originalname).ext;
		var newName = oldName + ext;
		var goods_id=req.body.goods_id;
		var goods_name=req.body.goods_name;
		var goods_img=req.body.goods_img;
		var goods_desc=req.body.goods_desc;
		var goods_price=req.body.goods_price;
		var pingjia=req.body.pingjia;
		var xiaoliang=req.body.xiaoliang;
		fs.rename(oldName,newName,(error)=>{
								if(error){
									res.send('fail');
								}else{
									var file=req.files[0].filename+ext;
									console.log(file)
									var sql="INSERT INTO aaa.goods (goods_id,goods_name,goods_desc,goods_price,pingjia,xiaoliang,goods_img) VALUES('"+goods_id+"','"+goods_name+"','"+goods_desc+"','"+goods_price+"','"+pingjia+"','"+xiaoliang+"','"+file+"');"
											console.log(sql)
											db.query(sql,function(error,data){
												if(error){
													console.log('修改数据库出错了');
												}else{
													res.redirect('/admin/shangpin');
												}
											});
								}
							});
		
	})
	return router;
}