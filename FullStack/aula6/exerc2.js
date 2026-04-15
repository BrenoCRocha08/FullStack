let casinha = document.getElementById("casinha");
let ctx = casinha.getContext("2d");

ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "yellow"
    ctx.arc(470,150,55,0.0*Math.PI,2*Math.PI);
    ctx.fill();
    ctx.stroke();
ctx.closePath();

ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "grey";
    ctx.strokeStyle = "black";
    ctx.strokeRect(0,480,600,600);
    ctx.fillRect(0,480,600,600);
ctx.closePath();

ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "brown";
    ctx.strokeStyle = "black";
    ctx.strokeRect(225,320,140,160);
    ctx.fillRect(225,320,140,160);
ctx.closePath();

ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "skyblue";
    ctx.strokeStyle = "black";
    ctx.strokeRect(235,350,45,45);
    ctx.fillRect(235,350,45,45);
    ctx.strokeRect(310,350,45,45);
    ctx.fillRect(310,350,45,45);
ctx.closePath();

ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "maroon";
    ctx.strokeStyle = "black";
    ctx.strokeRect(276,396,35,85);
    ctx.fillRect(276,396,35,85);
ctx.closePath();


ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "brown";
    ctx.strokeStyle = "black";
    ctx.strokeRect(488,450,30,85);
    ctx.fillRect(488,450,30,85);
ctx.closePath();


ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "green";
    ctx.strokeStyle = "green";
    ctx.arc(500,420,44,0.0*Math.PI,2*Math.PI);
    ctx.fill();
    ctx.stroke();
ctx.closePath();

ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "brown";
    ctx.strokeStyle = "black";
    ctx.strokeRect(129,420,30,85);
    ctx.fillRect(129,420,30,85);
ctx.closePath();


ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "green";
    ctx.strokeStyle = "green";
    ctx.arc(139,390,44,0.0*Math.PI,2*Math.PI);
    ctx.fill();
    ctx.stroke();
ctx.closePath();


ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "cornflowerblue";
    ctx.strokeStyle = "cornflowerblue";
    ctx.arc(0,480,63,1*Math.PI,2*Math.PI);
    ctx.fill();
    ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "cornflowerblue";
ctx.strokeStyle = "cornflowerblue";
ctx.moveTo(0,480);
ctx.lineTo(62,480);
ctx.lineTo(62,540);
ctx.lineTo(160,540);
ctx.lineTo(160,600);
ctx.lineTo(0,600);
ctx.lineTo(0,480);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "cornflowerblue";
    ctx.strokeStyle = "cornflowerblue";
    ctx.arc(150,602,63,1*Math.PI,2*Math.PI);
    ctx.fill();
    ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = "orange";
ctx.strokeStyle = "orange";
ctx.moveTo(220,325);
ctx.lineTo(295,240);
ctx.lineTo(370,325);
ctx.lineTo(250,325);
ctx.fill();
ctx.stroke();
ctx.closePath();



// ctx.lineWidth - define a espessura do pincel
// ctx.strokeStyle - define a cor do pincel
// ctx.fillStyle - define a cor de preenchimento
//ctx.arc(200,200,50,1.5*Math.PI,2.5*Math.PI);
//ctx.fill();
//ctx.stroke();