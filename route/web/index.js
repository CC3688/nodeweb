const express = require('express');
const mysql = require('mysql');

//台式机 var db = mysql.createPool({host:'localhost',user:'root',password:'root',database:'learn'});
var db = mysql.createPool({host:'localhost',port:8889, user:'root',password:'root',database:'learn'}); //mac


module.exports = function (){
    var router = express.Router();

    router.get('/get_banners',(req,res)=>{
        db.query(`select * from banner_table`,(err,data)=>{
            if(err){
                res.status(500).send('database error').end();
            }else{
                res.send(data);
            }
        });
    });

    return router;
}