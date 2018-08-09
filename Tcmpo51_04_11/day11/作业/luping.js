var a=10;
var arr=[];
arr.a=20;
console.log(a);
console.log(arr.a);
function Aaa(name) {
    this.name=name;
    this.getName=function () {
        return this.name;
    }
}
Aaa.prototype.getName=function () {
    console.log(this.name);
}
var aa1=new Aaa("1");
var aa2=new Aaa("2");
var aa3=new Aaa("3");
console.log(aa1.getName==aa2.getName);
function aaa() {
    console.log(this);
}
arr.aaa=function () {
    console.log(this);
}
aaa();
arr.aaa();