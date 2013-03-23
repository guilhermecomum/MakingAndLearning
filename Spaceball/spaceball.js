var x = 400;
var y = 300;
var ctx = document.getElementById('canvas').getContext('2d');

function init() {
    draw();
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


document.onkeydown = function (e) {
    var keyCode = e.KeyCode || e.which;
    var arrow = {left: 37, up: 38, right: 39, down: 40 };

    switch (keyCode) {

        case arrow.left:
        x--;
        draw();
        console.debug(keyCode);
        break;

        case arrow.right:
        x++;
        draw();
        console.debug(keyCode);
        break;

        case arrow.up:
        y--;
        draw();
        console.debug(keyCode);
        break;

        case arrow.down:
        y++;
        draw();
        console.debug(keyCode);
        break;
    }
}
