var x = 400;
var y = 300;
var ctx = document.getElementById('canvas').getContext('2d');

function init() {
    setInterval(draw,10);
}

function clear() {
    ctx.clearRect(0, 0, 800, 600);
}

function ball(x,y) {
    ctx.beginPath();
    ctx.arc(x,y,40,0,Math.PI*2,true);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function  draw() {
    clear();
    ball(x,y);
}
