/**
 *
 * Created by Administrator on 2018/5/28.
 *
 * http:开启服务
 * fs:读取文件
 * url:解析url  http://www.baidu.com/?name=xxx  请求体 请求参数
 */

//1:导入 node require("http")  Common.Js
var http = require("http");
var url = require("url");

//2:请求 响应  服务对象
var server = http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    //req:request
    //res:response
    //console.log(req.url);

    //console.log(req);
    var query = url.parse(req.url, true).query;
    var name = query.name;
    var age = query.age;

    var params=
    console.log(name, age);


    res.end("<h1>欢迎你" + name + "</h1>")
});
//3:监听端口
server.listen(3801, "127.0.0.1");



