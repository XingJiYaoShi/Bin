var dom = document.getElementById("view");
var ctx = dom.getContext("2d");

var width = ctx.canvas.width;
var height = ctx.canvas.height;
var box_width=width*0.8/10;
var margin_width=width*0.2/11;

var mat_x=30*margin_width;
var mat_vx=0;
var ball_x=5*box_width;
var ball_y=5*box_width;
var ball_vx=3;
var ball_vy=5;
var display=new Array();
for ( var i = 0; i < 10; i++) {
	display[i]=new Array();
	for ( var j = 0; j < 3; j++) {
		var temp=Math.round(Math.random());
		display[i][j]=temp;
	}	
}	

function checkImpact(){          //≈ˆ◊≤ºÏ≤‚
	for ( var i = 0; i < 10; i++) {
		for ( var j = 0; j < 3; j++) {
			if (display[i][j]==1) {
				var x1=margin_width+i*(margin_width+box_width);
				var y1=margin_width+(j+1)*(margin_width+box_width);
				var x2=(1+i)*(margin_width+box_width);
				var y2=(j+2)*(margin_width+box_width);
				if (ball_x>=x1&&ball_x<=x2&&ball_y>=y1&&ball_y<=y2|| 
					ball_x+box_width>=x1&&ball_x+box_width<=x2&&ball_y>=y1&&ball_y<=y2|| 
					ball_x>=x1&&ball_x<=x2&&ball_y+box_width>=y1&&ball_y+box_width<=y2|| 
					ball_x+box_width>=x1&&ball_x+box_width<=x2&&ball_y+box_width>=y1&&ball_y+box_width<=y2
				) {
					display[i][j]=0;
					if (Math.round(Math.random())==0) {
						ball_vy=-ball_vy;
					}else{
						ball_vx=-ball_vx;
					}
				}
			}			
		}	
	}	
}
function drawBall(x,y){
	ctx.beginPath();
	var my_gradient=ctx.createLinearGradient(x,y,x,y+box_width);
	my_gradient.addColorStop(0,"white");
	my_gradient.addColorStop(0.5,"red");
	my_gradient.addColorStop(1,"black");
	ctx.fillStyle=my_gradient;
	ctx.arc(x+box_width/2,y+box_width/2,box_width/2,0,2*Math.PI,false);
	ctx.fill();
}
function changeBall(){
	if (ball_x<=margin_width||ball_x>=width-margin_width-box_width) {
		ball_vx=-ball_vx;
	}
	if(ball_y<=margin_width){
		ball_vy=-ball_vy;
	}
	if(ball_x>=mat_x-box_width&&
	   ball_x<=mat_x+4*box_width+3*margin_width&&
	   ball_y<=height-2*margin_width-box_width*2+5&&
	   ball_y>=height-2*margin_width-box_width*2-5
	){
		if (ball_vx>0&&mat_vx<0||ball_vx<0&&mat_vx>0) {
			ball_vx=ball_vx+mat_vx;
		}else if (ball_vx==0) {
			ball_vx=mat_vx;
		}	
		ball_vy=-ball_vy;
	}
	ball_x=ball_x+ball_vx;
	ball_y=ball_y+ball_vy;
}
 function drawDisplay(){
	 checkImpact();
	 for ( var i = 0; i < 10; i++) {
			for ( var j = 0; j < 3; j++) {
				if (display[i][j]==1) {
					var x=margin_width+i*(margin_width+box_width);
					var y=margin_width+(j+1)*(margin_width+box_width);	
					var col=ctx.createRadialGradient(x+0.5*box_width,y+0.5*box_width,3,x+0.5*box_width,y+0.5*box_width,box_width);
					col.addColorStop(0,"#fcea7e");
					col.addColorStop(0.2,"#d18552");
					col.addColorStop(1,"red");
					ctx.fillStyle=col;
					ctx.fillRect(x,y,box_width,box_width);
					ctx.beginPath();
					ctx.fillStyle="white";
					ctx.arc(x+0.25*box_width,y+0.25*box_width,0.125*box_width,0,Math.PI*2,false);
					ctx.stroke();
					ctx.fill();
					ctx.beginPath();
					ctx.arc(x+0.75*box_width,y+0.25*box_width,0.125*box_width,0,Math.PI*2,false);
					ctx.stroke();
					ctx.fill();
					ctx.fillRect(x+0.25*box_width,y+0.625*box_width,box_width*0.5,box_width*0.25);
				}
			}	
		}	
	 }

 function drawBack(){
	 ctx.fillStyle="#e6e3df";
	 ctx.fillRect(0,0,width,height);
	 var col=ctx.createRadialGradient(0.5*width,height,0.1*width,0.5*width,height,width);
	 col.addColorStop(0,"#035");
	 //col.addColorStop(0.2,"#d18552");
	 col.addColorStop(1,"black");
	 ctx.fillStyle=col;
	 ctx.fillRect(margin_width,margin_width,width-2*margin_width,height-2*margin_width);
 }
 function reDraw(){
	 ctx.clearRect(0,0,width,height);
	 drawBack();
	 drawMat();
	 drawDisplay();
	 changeBall();
	 drawBall(ball_x,ball_y);
	 checkOver();
 }
 
 function checkOver(){
	 var flag=false;
	 for ( var i = 0; i < 10; i++) {
			for ( var j = 0; j < 3; j++) {
				if (display[i][j]==1) {
					flag=true;
				}
			}	
		}	
	 if (!flag) {
		alert("ƒ„”Æ¡À£°");
		window.clearInterval(f);
	}
	 if (ball_y>=height) {
		 alert("ƒ„ ‰¡À£°");
		 window.clearInterval(f);
	}
 }
 
 function moveMat(){
	 if (mat_x+mat_vx<=margin_width) {
			mat_x=margin_width;
		}else if(mat_x+mat_vx>=width-3*box_width-3*margin_width) {
    		 mat_x=width-3*box_width-3*margin_width;
		}else{
			mat_x+=mat_vx;
		}
 }
 function drawMat(){
	 moveMat();
	 ctx.beginPath();
	 var col=ctx.createLinearGradient(mat_x,height-box_width-margin_width,mat_x,height);
	 col.addColorStop(0,"#fcea7e");
	 col.addColorStop(0.2,"#d18552");
	 col.addColorStop(1,"black");
	 ctx.fillStyle=col;
	 ctx.fillRect(mat_x,height-box_width-margin_width,3*box_width+2*margin_width,box_width);
 }
 document.onkeyup=function(event){
     mat_vx=0;
 };
 document.onkeydown=function(event){
     var e = event || window.event || arguments.callee.caller.arguments[0];
     if(e && e.keyCode==37){                    //œÚ◊Û“∆∂Ø
    	 mat_vx=-3;
     }
     if(e && e.keyCode==39){                    //œÚ”““∆∂Ø
    	 mat_vx=3;
     }
  
 };	
 
 drawBack();
 drawMat();
 drawDisplay();
 drawBall(ball_x,ball_y);
 var f=setInterval(reDraw,10);