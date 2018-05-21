const express = require('express');
const common =  require('../../libs/common');
const mysql = require('mysql');

//台式机 var db = mysql.createPool({host:'localhost',user:'root',password:'root',database:'learn'});
var db = mysql.createPool({host:'localhost',port:8889, user:'root',password:'root',database:'learn'}); //mac

module.exports = function (){
    var router=express.Router();
    router.get('/',(req,res)=>{
        res.render('admin/login.ejs',{});
    });
    router.post('/',(req,res)=>{
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

    return router;
}
