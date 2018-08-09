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

var users = [];
var user = {
    name: "",
    pwd: ""
};

//2:请求 响应  服务对象
var server = http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    //req:request
    //res:response
    //console.log(req.url);//login  register

    var params = req.url.slice(1, 6);
    var query = url.parse(req.url, true).query;

    var name = query.name;
    var pwd = query.pwd;
    var isLogin = false;

    if (params == "login") {
        //登录
        for (var i = 0; i < users.length; i++) {
            var obj = users[i];
            if (obj.name == name) {
                if (obj.pwd == pwd) {
                    isLogin = true;
                }
            }
        }
        res.end("<h1>"+isLogin+"</h1>")


    } else if (params == "regis") {
        //注册
        user.name = name;
        user.pwd = pwd;
        users.push(user);
        res.end("<h1>register success!!!</h1>")
    }
    //res.end("<h1>欢迎你" + name + "</h1>")
});
//3:监听端口
server.listen(3800, "127.0.0.1");



