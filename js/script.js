const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function chao(){
    ctx.strokeStyle = '#2d8f01';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0,700);
    ctx.bezierCurveTo(700, 600, 300, 600, 1200, 700);
    ctx.lineTo(1200,800);
    ctx.lineTo(0,800);
    ctx.lineTo(0,700);
    ctx.fillStyle = '#369908';
    ctx.fill();
    ctx.stroke();
}

function montanha(){
    ctx.beginPath();
    ctx.moveTo(0,500);
    ctx.lineTo(150,350);
    ctx.lineTo(350,600);
    ctx.lineTo(450,500);
    ctx.lineTo(550,600);
    ctx.lineTo(750,400);
    ctx.lineTo(850,500);
    ctx.lineTo(1000,350);
    ctx.lineTo(1150,550);
    ctx.lineTo(1200,500);
    ctx.stroke();
}

montanha();
chao();
