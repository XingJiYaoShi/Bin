function Aaa(name) {
    //console.log(this);
    this.name=name;
    this.getName=function () {
        return this.name;
    }
}
//Aaa();
var aaa1=new Aaa("李四1");
var aaa2=new Aaa("李四2");
var aaa=new Aaa("李四");
var aaa=new Aaa("李四");
// console.log(aaa.name);
console.log(aaa1.getName==aaa2.getName);