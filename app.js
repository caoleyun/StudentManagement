var express = require('express');
var app = express();

var mainctrl=require("./controllers/mainctrl.js");

// 设定view engine变量，意为网页模板引擎
app.set("view engine" , "ejs");

//路由清单RESTful风格的路由
app.get('/'			,mainctrl.showIndex); //呈递首页
app.get('/add'		,mainctrl.showAdd);//呈递表单


app.listen(3000,()=>{console.log("服务器运行在3000端口");});