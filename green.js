const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 80;
let y = 80;
let radius = 40;
let speed = 8;

let downPressed = false;
let upPressed = false;
let leftPressed = false;
let rightPressed = false;

const drawGame = () => {
    requestAnimationFrame(drawGame);  /*redraw the screen all the time*/
    clearScreen();
    inputs();
    boundaryCheck();
    drawGreenBlob();
}

const boundaryCheck = () => {
    if (y < radius){y = radius;} //up
    if(y > canvas.height - radius){y = canvas.height - radius;} //down
    if (x < radius){x = radius;} //left
    if(x > canvas.width - radius){x = canvas.width - radius;} //right
}   

const inputs = () =>{
    if(downPressed){y += speed;}
    if(upPressed){y -= speed;}
    if(leftPressed){x -= speed;}
    if(rightPressed){x += speed;}
}

const drawGreenBlob = () => {
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2); 
    ctx.fill();
}

const clearScreen = () => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}

const keyDown = (event) => {
    if (event.keyCode == 40){downPressed = true;}
    if (event.keyCode == 38){upPressed = true;}
    if (event.keyCode == 37){leftPressed = true;}
    if (event.keyCode == 39){rightPressed = true;}
}
const keyUp = (event) => {
    if (event.keyCode == 40){downPressed = false;}
    if (event.keyCode == 38){upPressed = false;}
    if (event.keyCode == 37){leftPressed = false;}
    if (event.keyCode == 39){rightPressed = false;}
}

document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);

drawGame();
