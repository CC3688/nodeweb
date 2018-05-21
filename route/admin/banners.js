const express = require('express');
const mysql = require('mysql');
//台式机 var db = mysql.createPool({host:'localhost',user:'root',password:'root',database:'learn'});
var db = mysql.createPool({host:'localhost',port:8889, user:'root',password:'root',database:'learn'}); //mac


module.exports = function(){
    var router = express.Router();

    router.get('/',(req,res)=>{
        switch(req.query.act){
            case 'mod':
                db.query(`select * from banner_table where id=${req.query.id}`,(err,data)=>{
                    if(err){
                        console.log(err);
                        res.status(500).send('database error').end();
                    }else if(data.length == 0){
                        res.status(404).send('data not find').end();
                    }else{
                        db.query(`select * from banner_table`,(err,banners)=>{
                            if(err){
                                console.log(err);
                                res.status(500).send('database error').end();
                            }else{
                                
                                res.render('admin/banners.ejs',{banners,mod_data:data[0]});
                            }
                        });

                        
                    }
                });
                break;
            case 'del':
                db.query(`delete from banner_table where id=${req.query.id}`,(err,data)=>{
                    if(err){
                        console.log(err);
                        res.status(500).send('database error').end();
                    }else{
                        res.redirect('/admin/banners');
                    }
                });
                break;
            default:
                db.query(`select * from banner_table`,(err,banners)=>{
                    if(err){
                        console.log(err);
                        res.status(500).send('database error').end();
                    }else{
                        res.render('admin/banners.ejs',{banners});
                    }
                });
                break;
        }

        
        
    });
    router.post('/',(req,res)=>{
        
        var title = req.body.title;
        var description = req.body.description;
        var href = req.body.href;
        
        if(!title||!description||!href){
            res.status(400).send('arg error').end();
        }else{
            if(req.body.mod_id){ //修改
                db.query(`update banner_table set title='${req.body.title}',description='${req.body.description}',href='${req.body.href}'  where id=${req.body.mod_id}`,(err,data)=>{
                    if(err){
                        console.log(err);
                        res.status(500).send('database error').end();
                    }else{
                        res.redirect('/admin/banners');
                    }
                });
                
            }else{                  //添加
                db.query(`insert into banner_table(title, description,href) value ('${title}','${description}','${href}')`,(err,data)=>{
                if(err){
                    console.log(err);
                    res.status(500).send('database error').end();
                }else{
                    res.redirect('/admin/banners');
                }
            });
            }

            
        }

    });

    return router;

}