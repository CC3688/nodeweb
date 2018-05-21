const express=require('express');
const static=require('express-static');
const bodyParser=require('body-parser');
const multer=require('multer');
const multerObj=multer({dest: './static/upload'});
const mysql=require('mysql');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const consolidate=require('consolidate');
const expressRoute=require('express-route');

var server=express();

server.listen(8080);
//1获取请求数据
//get 自带
server.use(bodyParser.urlencoded());
server.use(multerObj.any());
//2cookie  session
server.use(cookieParser());

(function(){
    var keys=[];
    for(var i=0;i<100000;i++){
        keys[i]='a_'+Math.random();
    }
    server.use(cookieSession({
        name:'sess_id',
        keys:keys,
        maxAge:20*60*1000  //20min
    }));
})()

//模板
server.engine('html',consolidate.ejs);
server.set('views','template');
server.set('view engine','html');

//route
server.use('/',require('./route/web/index.js')());
server.use('/admin/',require('./route/admin/index.js')());


//default :static
server.use(static('./static/'))
