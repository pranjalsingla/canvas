canvas= document.getElementById("my_canvas");
ctx= canvas.getContext("2d");

color= "blue";
width= 2;

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.arc(200,200,40,0,Math.PI*2);
ctx.stroke();

canvas.addEventListener("mouse_click",mouseclick);

function mouseclick(e){
    a=e.clientX-canvas.offsetLeft;
    b=e.clientY-canvas.offsetTop;
    console.log(a,b);
    circle(a,b);
}

function circle(a,b){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.arc(200,200,40,0,Math.PI*2);
ctx.stroke();
}