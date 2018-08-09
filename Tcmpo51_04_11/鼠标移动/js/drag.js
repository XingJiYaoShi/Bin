/**
 *
 * Created by Administrator on 2018/5/4.
 */

function dragDom(dom, l, t, fn) {//function
    dom.style.position = "absolute";
    dom.style.left = l + "px";
    dom.style.top = t + "px";
    var me = arguments;

    me.callee.zIndex = 0;
    console.log(arguments.callee.zIndex);
    dom.onmousedown = function (ev) {
        dom.style.zIndex = me.callee.zIndex++;
        var offsetX = ev.offsetX;
        var offsetY = ev.offsetY;
        document.onmousemove = function (ev) {
            var oEvent = ev || event;
            var clientX = oEvent.clientX; // 鼠标的坐标
            var clientY = oEvent.clientY; // 鼠标的坐标
            var x = clientX - offsetX;
            var y = clientY - offsetY;
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