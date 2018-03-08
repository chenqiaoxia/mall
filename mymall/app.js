var express=require("express");
var ejs=require("ejs");
var expressStatic=require("express-static");
var bodyParser=require("body-parser");
var cookieParser=require("cookie-parser");
var cookieSession=require("cookie-session");
var multer=require('multer');

var app=express();
var multerObj = multer({ dest: 'static/images/' }); 
app.use(multerObj.any());  
app.use(bodyParser());
app.use(cookieParser());
var arr=[];
for (var i = 0; i <100000; i++) {
	arr.push(Math.random()*i+'a');
};
app.use(cookieSession({
	keys:arr,
	maxAge:3600*1000
}))
//ejs模板是在view文件下
app.set('view engine','ejs');
app.set('views','./view');
app.use('/admin',require("./router/admin/index.js")());
app.use('/',require("./router/web/index.js")());
app.use('/data',require("./router/data/index.js")());
app.listen(3000);
//静态路由是在static
app.use(expressStatic("./static"))