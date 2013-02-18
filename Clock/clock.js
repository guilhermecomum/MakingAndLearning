
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
    ctx.rotate((sec * 6) * Math.PI/180);
    ctx.moveTo(0,0);
    ctx.lineTo(0,-120);
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();
    ctx.restore();

    // Minutes pointer
    ctx.save();
    ctx.beginPath();
    ctx.rotate((min * 6) * Math.PI/180);
    ctx.moveTo(0,0);
    ctx.lineTo(0,-100);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();

    ctx.restore();
}
