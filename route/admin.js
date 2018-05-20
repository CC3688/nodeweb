const express = require('express');
const common =  require('../libs/common');
const mysql = require('mysql');

var db = mysql.createPool({host:'localhost',user:'root',password:'root',database:'learn'});

module.exports = function (){
    var router = express.Router();
    //检查登录状态
    router.use((req,res,next)=>{
        if(!req.session['admin_id'] && req.url !='/login'){ //没登录只能访问登录页面
            res.redirect('/admin/login');
        }else{
            next();
        }
    });
    router.get('/login',(req,res)=>{
        res.render('admin/login.ejs',{});
    });
    router.post('/login',(req,res)=>{
        var username = req.body.username;
       
        var password = common.md5(req.body.password);

        db.query(`select * from admin_table where username='${username}'`,(err,data)=>{
            if(err){
                
                res.status(500).send('database error').end();
            }else{
                if(data.length == 0){
                    res.status(400).send('no this admin').end();
                }else{
                    if(data[0].password == password){
                        req.session['admin_id'] = data[0].id;

                        res.redirect('/admin/');
                    }else{                       
                        res.status(400).send('this password is incorrect').end();
                    }
                }
            }
        });      
    });

    router.get('/',(req,res)=>{
        res.send('恭喜你成功的登录了').end();
    });

    return router;
}