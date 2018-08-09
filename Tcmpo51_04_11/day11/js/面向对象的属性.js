/**
 *
 * Created by Administrator on 2018/5/7.
 */
//变量 : 不属于任何对象
var a = 10;

//属性: 属于某一个对象的东西 不属于自己

var arr = [];//对象

arr.a = 20;

console.log(arr.a);


function aaa() {
    console.log("aaa函数");
}

//方法:也不属于自己  也属于对象

arr.aaa = function () {
    console.log("aaa方法");
};

arr.aaa();

