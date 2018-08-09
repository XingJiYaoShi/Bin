/**
 *
 * Created by Administrator on 2018/5/7.
 */

function Aaa(name) {
    //默默地做了两件事情
    //1:
    //var this = new Object();
    this.name = name;
    this.getName = function () {
        return this.name;
    };
    //console.log(this);
    //2:return this
}

//Aaa(); Window

var aaa1 = new Aaa("李四1");//A:Window  B:document C:un  D:Object
var aaa2 = new Aaa("李四2");//A:Window  B:document C:un  D:Object
var aaa3 = new Aaa("李四3");//A:Window  B:document C:un  D:Object
var aaa4 = new Aaa("李四4");//A:Window  B:document C:un  D:Object
var aaa5 = new Aaa("李四5");//A:Window  B:document C:un  D:Object
var aaa6 = new Aaa("李四6");//A:Window  B:document C:un  D:Object


console.log(aaa1.getName == aaa2.getName);//地址 工厂模式的缺陷 每次创建对象 心创建地址false



