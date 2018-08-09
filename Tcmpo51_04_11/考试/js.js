function dragDom(dom,i,mg) {//function
    dom.onclick=function () {
        alert(123);
        dom.style.backgroundImage="img/"+i+".jpg";
        mg.style.visibility="hidden";
    }


    }



