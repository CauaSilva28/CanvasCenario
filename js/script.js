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
    ctx.fillStyle = '#c44823';
    ctx.fill();
}

function montanha2(){   
    ctx.beginPath();
    ctx.moveTo(0,530);
    ctx.lineTo(200,600);
    ctx.lineTo(300,500);
    ctx.lineTo(450,600);
    ctx.lineTo(650,450);
    ctx.lineTo(800,600);
    ctx.lineTo(950,500);
    ctx.lineTo(1100,650);
    ctx.lineTo(1180,600);
    ctx.lineTo(1200,620);
    ctx.lineTo(1200,700);
    ctx.lineTo(0,700);
    ctx.lineTo(0,530);
    ctx.fillStyle = '#a33f21';
    ctx.fill();
}

function montanha3(){
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
    ctx.fillStyle = '#cf5808';
    ctx.fill();
}

function sol(){
    ctx.shadowColor = '#fffbb0'
    ctx.shadowBlur = 200;
    ctx.beginPath();
    ctx.arc(850,400,300,0,Math.PI*2,true);
    ctx.fillStyle = '#ffc400';
    ctx.fill();

    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
}

function nuvens(){
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(100,200,25,0,Math.PI*2,true);
    ctx.arc(150,200,40,0,Math.PI*2,true);
    ctx.arc(200,200,25,0,Math.PI*2,true);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(500,100,30,0,Math.PI*2,true);
    ctx.arc(550,100,45,0,Math.PI*2,true);
    ctx.arc(600,100,30,0,Math.PI*2,true);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(450,300,25,0,Math.PI*2,true);
    ctx.arc(500,300,40,0,Math.PI*2,true);
    ctx.arc(550,300,25,0,Math.PI*2,true);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(1000,100,25,0,Math.PI*2,true);
    ctx.arc(1050,100,40,0,Math.PI*2,true);
    ctx.arc(1100,100,25,0,Math.PI*2,true);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.stroke();
}

function passaro(){
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#000';
    ctx.beginPath();
    ctx.moveTo(900,300);
    ctx.quadraticCurveTo(930,300,940,330);
    ctx.quadraticCurveTo(950,300,980,300);
    ctx.stroke();

    ctx.lineWidth = 5;
    ctx.strokeStyle = '#000';
    ctx.beginPath();
    ctx.moveTo(300,200);
    ctx.quadraticCurveTo(330,200,330,220);
    ctx.quadraticCurveTo(350,200,370,210);
    ctx.stroke();
}

function arvores(){
    ctx.beginPath();
    ctx.arc(1000,620,60,0,Math.PI*2,true);
    ctx.fillStyle = '#39571e';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1000,550,45,0,Math.PI*2,true);
    ctx.fillStyle = '#446626';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1000,500,35,0,Math.PI*2,true);
    ctx.fillStyle = '#537d2e';
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = '#4a3423';
    ctx.lineWidth = 8;
    ctx.moveTo(1000,750);
    ctx.lineTo(1000,630);
    ctx.quadraticCurveTo(970,630,970,610);
    ctx.moveTo(1000,630);
    ctx.lineTo(1000,570);
    ctx.quadraticCurveTo(1020,570,1020,545);
    ctx.moveTo(1000,570);
    ctx.lineTo(1000,500);
    ctx.stroke();


    ctx.beginPath();
    ctx.arc(100,620,60,0,Math.PI*2,true);
    ctx.fillStyle = '#39571e';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(100,550,45,0,Math.PI*2,true);
    ctx.fillStyle = '#446626';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(100,500,35,0,Math.PI*2,true);
    ctx.fillStyle = '#537d2e';
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = '#4a3423';
    ctx.lineWidth = 8;
    ctx.moveTo(100,750);
    ctx.lineTo(100,630);
    ctx.quadraticCurveTo(70,630,70,610);
    ctx.moveTo(100,630);
    ctx.lineTo(100,570);
    ctx.quadraticCurveTo(120,570,120,545);
    ctx.moveTo(100,570);
    ctx.lineTo(100,500);
    ctx.stroke();
}

sol();
montanha3();
montanha();
montanha2();
chao();
nuvens();
passaro();
arvores();
