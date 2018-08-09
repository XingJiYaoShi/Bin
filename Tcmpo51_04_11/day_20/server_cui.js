/**
 *
 * Created by Administrator on 2018/5/28.
 *
 * http:开启服务
 * fs:读取文件
 * url:解析url
 */

//1:导入 node require("http")  Common.Js
var http = require("http");

//2:请求 响应  服务对象
var server = http.createServer(function (req, res) {
    res.end("<h1>nodejs</h1>")
});
//3:监听端口
server.listen(3800, "127.0.0.1");




