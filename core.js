var express = require('express');
var app = express();
// 引入自己的模块
var handle = require('./index');
// 引入ejs模板
app.set('view engine','ejs');
// 显示首页
app.get('/',handle.showIndex);
// 处理上传
app.post('/',handle.doPost);
// 删除留言
app.get('/del',handle.del);
// 加载静态资源
app.use(express.static('./static'));

app.listen(3000);