var express = require('express');
var app = express();
var url = require('url');
const qs = require('querystring');
// 引入时间插件
var stime = require('silly-datetime');
// 引入数据库
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
// 设置数据库地址
var dataUrl = 'mongodb://127.0.0.1:27017/liuyandb';

// 显示首页
exports.showIndex = (req, res) => {
    // 展示留言信息
    MongoClient.connect(dataUrl, (err, client) => {
        if (err) {
            console.log("数据库连接失败");

        }
        var db = client.db('liuyandb');
        var rel = db.collection('liuyan').find();
        // console.log(rel,111111111111)
        rel.toArray((err, data) => {
            console.log(data.length,22222);
            var num = data.length;
            // 渲染index模板
            res.render('index',{
                content : data,
                nums : Math.ceil(num / 2)
            });
        })
    })
}

// 处理提交
exports.doPost = (req, res) => {
    // 提取post中的数据
    var postData = '';
    req.addListener('data', (chunk) => {
        postData += chunk;
    })
    req.addListener('end', () => {
        // 得到并解析post中的内容
        var qsData = qs.parse(postData);
        // 连接数据库
        MongoClient.connect(dataUrl, (err, client) => {
            if (err) {
                console.log("数据库连接失败");
            }
            var db = client.db('liuyandb');
            // 获取当前时间
            var nowTime = stime.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
            console.log(nowTime);
            db.collection('liuyan').insert({ "name": qsData.name, "content": qsData.content, "time": nowTime }, (err, client) => {
                if (err) {
                    res.send("<script>alert('留言失败');window.location.href = '/'</script>");                    
                }
                res.send("<script>alert('留言成功');window.location.href = '/'</script>"); 
            })
        })
    })
}

// 处理del
exports.del = (req,res) => {
    var urlId = url.parse(req.url,true).query.id;
    console.log(urlId,333333);
    MongoClient.connect(dataUrl, (err, client) => {
        if (err) {
            console.log("数据库连接失败");
        }
        var db = client.db('liuyandb');
        var rel = db.collection('liuyan').remove({"_id": ObjectID(urlId)},(err,result) => {
            if(err){
                res.send("<script>alert('删除失败');window.location.href = '/'</script>");                    
            }else{
                res.send("<script>alert('删除成功');window.location.href = '/'</script>");                                    
            }
        });
    })
}