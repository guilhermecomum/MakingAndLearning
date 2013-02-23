
function ball() {

    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.beginPath();
    ctx.arc(400,560,40,0,Math.PI*2,true);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();


}
