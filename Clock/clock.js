
function clock() {
    var now = new Date();
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.save();
    ctx.clearRect(0,0,300,300);
    ctx.translate(150,150);

    var sec = now.getSeconds();
    var min = now.getMinutes();

    // Seconds pointer
    ctx.save();
    ctx.beginPath();
    ctx.rotate(sec * Math.PI/30);
    ctx.moveTo(0,0);
    ctx.lineTo(60,120);
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();
    ctx.restore();


    // Minutes pointer

    ctx.restore();
}
