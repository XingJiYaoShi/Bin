/**
 *
 * Created by Administrator on 2018/5/4.
 */

function dragDom(dom, l, t, fn) {//function
    //1:设置成绝对定位
    dom.style.position = "absolute";
    dom.style.left = l + "px";
    dom.style.top = t + "px";

    //zIndex  属性

    //隐形
    //1:添加属性
    //2:得到传过来的多有参数
    //var number = arguments.callee.zIndex = 0;
    var me = arguments;

    me.callee.zIndex = 0;
    console.log(arguments.callee.zIndex);
    dom.onmousedown = function (ev) {

        //dom.style.zIndex =  arguments.callee.zIndex++;
        //console.log(me.callee.zIndex++);
        dom.style.zIndex = me.callee.zIndex++;

        //鼠标相对于滑块的位置
        var offsetX = ev.offsetX;
        var offsetY = ev.offsetY;


        document.onmousemove = function (ev) {
            var oEvent = ev || event;
            //1:
            var clientX = oEvent.clientX; // 鼠标的坐标
            var clientY = oEvent.clientY; // 鼠标的坐标

            // //获取中心的位置  取值的方法   oBox.offsetLeft
            // var width = dom.offsetWidth;
            // var height = dom.offsetHeight;
            //
            var x = clientX - offsetX;
            var y = clientY - offsetY;

            //
            var oo = fn && fn(x, y) || {x: x, y: y};

            dom.style.left = oo.x + "px";//dom.属性
            dom.style.top = oo.y + "px";//dom.属性
        }
    };

    document.onmouseup = function () {
        document.onmousemove = null;
        document.up = null;
    }

}