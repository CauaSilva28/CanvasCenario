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
    ctx.strokeStyle = '#9c4b0c';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0,500);
    ctx.lineTo(180,350);
    ctx.lineTo(350,500);
    ctx.lineTo(450,450);
    ctx.lineTo(650,550);
    ctx.lineTo(800,400);
    ctx.lineTo(900,500);
    ctx.lineTo(1050,350);
    ctx.lineTo(1180,550);
    ctx.lineTo(1200,530);
    ctx.lineTo(1200,650);
    ctx.lineTo(0,650);
    ctx.lineTo(0,500);
    ctx.fillStyle = '#ab510c';
    ctx.fill();
    ctx.stroke();
}

function montanha2(){   
    ctx.strokeStyle = '#963f23';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0,530);
    ctx.lineTo(200,600);
    ctx.lineTo(300,500);
    ctx.lineTo(500,600);
    ctx.lineTo(650,450);
    ctx.lineTo(800,600);
    ctx.lineTo(950,500);
    ctx.lineTo(1100,650);
    ctx.lineTo(1180,600);
    ctx.lineTo(1200,620);
    ctx.lineTo(1200,700);
    ctx.lineTo(0,700);
    ctx.lineTo(0,530);
    ctx.fillStyle = '#a1472a';
    ctx.fill();
    ctx.stroke();
}

function montanha3(){
    ctx.strokeStyle = '#7d3c14';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0,350);
    ctx.lineTo(150,450);
    ctx.lineTo(400,250);
    ctx.lineTo(600,400);
    ctx.lineTo(750,300);
    ctx.lineTo(1000,500);
    ctx.lineTo(1200,300);
    ctx.lineTo(1200,700);
    ctx.lineTo(0,700);
    ctx.lineTo(0,350);
    ctx.fillStyle = "#8f471a";
    ctx.fill();
    ctx.stroke();
}

function sol(){
    ctx.strokeStyle = '#ff9900';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(850,400,300,0,Math.PI*2,true);
    ctx.fillStyle = '#ffb300';
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = '#ffaa00';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(950,220,50,0,Math.PI*2,true);
    ctx.fillStyle = "#ffae00";
    ctx.fill();
    ctx.stroke();
    
    ctx.strokeStyle = '#ffaa00';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(700,250,30,0,Math.PI*2,true);
    ctx.fillStyle = "#ffae00";
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = '#ffaa00';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(900,400,20,0,Math.PI*2,true);
    ctx.fillStyle = "#ffae00";
    ctx.fill();
    ctx.stroke();
}

sol();
montanha3();
montanha();
montanha2();
chao();
