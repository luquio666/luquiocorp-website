function loadCanvas(id) {
    var canvas = document.createElement('canvas');
    div = document.getElementById(id); 
    div.appendChild(canvas);
    canvas.id = "gamelayer";
    canvas.width  = 240;
    canvas.height = 190;
    return canvas;
}
var canvas = loadCanvas("screen");
var width = canvas.width,
    height = canvas.height,
    cx = null,
    fps = 60,
    posX = width/2,
    posY = height/2,
    speed = 5,
    size = 25;

var timerValue = 0;
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);
addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);
addEventListener("click", function (e) {
	startGame = true;
},);

function update() {
    cx.clearRect(0,0,width,width);

    // Player
    cx.beginPath();
    cx.fillStyle = 'black';
    cx.arc(posX, posY, size-((size)/100), 0, Math.PI * 360);
    cx.fill();
    
    drawTimer();
    checkInputs();
    checkScreenLimit();
}

function drawTimer()
{
    // UI
    cx.fillStyle = "black";
    cx.font = "18px Helvetica";
    cx.textAlign = "left";
    cx.textBaseline = "center";
    cx.fillText("TIME: " + timerValue, 5, 20);
}

function checkInputs()
{
    // Player Movement
    /*[W]*/if (87 in keysDown) { posY-=speed; }
    /*[S]*/if (83 in keysDown) { posY+=speed; }   
    /*[A]*/if (65 in keysDown) { posX-=speed; }
    /*[D]*/if (68 in keysDown) { posX+=speed; }
}

function checkScreenLimit()
{
    if(posX+size > width) { posX = width - size; }
    if(posX-size < 0) { posX = size; }
    if(posY+size > height) { posY = height - size; }
    if(posY-size < 0) { posY = size; }
}

function timer()
{
    timerValue++;
}

if (typeof (canvas.getContext) !== undefined) {
    cx = canvas.getContext('2d');
    setInterval(update, 1000 / fps);
    setInterval(timer, 1000);
}