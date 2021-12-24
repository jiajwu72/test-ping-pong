const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
// ctx.fillRect(50,50,100,100);
ctx.beginPath();
ctx.moveTo(75,30);
ctx.lineTo(400,300);
ctx.stroke();

ctx.beginPath();
ctx.arc(75,80,50, 0, 1.5*Math.PI);
ctx.fillStyle = "green";
ctx.lineWidth = 5;
ctx.fill();
ctx.stroke();