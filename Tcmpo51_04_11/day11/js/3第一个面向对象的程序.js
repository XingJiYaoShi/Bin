/**
 *
 * Created by Administrator on 2018/5/7.
 */


//封装  实体类  js :　类？？没有
//java:  new Person()
//js:    方法的形式 进行的封装

//js中的类
function Person(name) {//工厂模式
    //this.--->Window

    //1:定义对象  原料
    var obj = new Object();//length   new Object():白纸
    //2:创建属性 和 方法
    //加工
    obj.name = name;//push()  pop()  join()
    obj.push = function () {
        return obj.name;
    };

    //返回 成品
    return obj;
}

//new Array();

//封装 java:传参
var person =Person("张三");
console.log(person.name);


