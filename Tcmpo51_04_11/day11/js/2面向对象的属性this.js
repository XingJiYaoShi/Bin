var a = 10;
var arr = [];
arr.a = 20;
console.log(arr.a);
function aaa() {
    console.log(this);
}
arr.aaa = function () {
    console.log(this);
};
aaa();
arr.aaa();

