function getByClass(oParent,cName){
    var elements = document.getElementsByTagName('*');
    var i = 0;
    var results = [];
    for(var i=0;i<elements.length;i++){
        if(elements[i].className == cName){
            results.push(elements[i]);
        }
    }
    return results;
}
function $(id){
    return document.getElementById(id);
}
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
}
function startMove(obj,json,fn){ //width：300 height：300 opacity：50

    clearInterval(obj.timer);

    obj.timer = setInterval(function(){
        var flag = true;
//一个都能不能少，都等着
        for(var attr in json){
            if(attr=='opacity'){
                var icurrent = parseInt(parseFloat(getStyle(obj,attr))*100);
            }else{
                var icurrent = parseInt(getStyle(obj,attr));
            }
            var speed = (json[attr] - icurrent)/8;

            speed = speed>0?Math.ceil(speed):Math.floor(speed);

//只要任何一个还没到,修改状态，让width height  opacity继续运动
            if(icurrent != json[attr]){
                flag = false;
            }
            if(attr=='opacity'){
                obj.style.filter = "alpha(opacity:"+(icurrent+speed)+")";
                obj.style.opacity = (icurrent+speed)/100;
            }else{
                obj.style[attr] = icurrent+speed+'px';
            }
        }
//只判断只要还有一个人没到咱就等 width  height  opacity都停止的
        if(flag){
            clearInterval(obj.timer);
//alert('我到了,不用担心');
            if(fn){
                fn();
            }
        }
    }, 30)
}


//弹性运动框架
function elasticMove(obj,target){
    var speed = 0;
    clearInterval(obj.timer);
//刚开始还没有运动,这里也不会出差
    obj.timer = setInterval(function(){
        speed += (target-obj.offsetTop)/3;
        speed *= 0.75;

        if(Math.abs(speed)<1 && Math.abs(target-obj.offsetTop)<1){
            clearInterval(obj.timer);
        }else{
            obj.style.top = obj.offsetTop + speed +'px';
        }
        document.title = 'target:'+target+'speed'+speed;

    }, 30)
}