const left = document.getElementById("left-player");
const right = document.getElementById("right-player");
const ball = document.getElementById("ball");

let playerPositionTop = (window.innerHeight / 2) - (left.offsetHeight / 2);
let ballPositionY = (window.innerHeight / 2) - (ball.offsetHeight / 2);
let ballPositionX = (window.innerWidth / 2) - (ball.offsetWidth / 2);

let ballSpeedX = 5; 
let ballSpeedY = 5;

let leftPositionX = 20;
let rightPositionX = window.innerWidth - right.offsetWidth - 20;

const playerMaxVert = window.innerHeight - left.offsetHeight;
const ballMaxVert = window.innerHeight - ball.offsetHeight;
const ballMaxHor = window.innerWidth - ball.offsetWidth;

left.style.transform = `translate(${leftPositionX}px, ${playerPositionTop}px)`;
right.style.transform = `translate(${rightPositionX}px, ${playerPositionTop}px)`;
ball.style.transform = `translate(${ballPositionX}px, ${ballPositionY}px)`;

let ballInterval = null;

function movePlayer(event) {
    event.preventDefault();
    if (event.key === "ArrowUp") playerPositionTop -= 20;
    if (event.key === "ArrowDown") playerPositionTop += 20;

    if (playerPositionTop < 0) playerPositionTop = 0;
    if (playerPositionTop > playerMaxVert) playerPositionTop = playerMaxVert;

    left.style.transform = `translate(${leftPositionX}px, ${playerPositionTop}px)`;
}

function updateBall() {
    ballPositionX += ballSpeedX;
    ballPositionY += ballSpeedY;
    
    if (ballPositionX <= playerPositionTop && ballPositionX >= (playerPositionTop - left.offsetHeight)) {
        ballSpeedX *= -1;
    } else if (ballPositionX <= 0 || ballPositionX >= ballMaxHor) {
        ballPositionX = window.innerWidth - ball.offsetWidth;
        clearInterval(ballInterval);
    }

    if (ballPositionY <= 0 || ballPositionY >= ballMaxVert) {
        ballSpeedY *= -1;
        ballPositionY = window.innerHeight - ball.offsetHeight;
    }

    ball.style.transform = `translate(${ballPositionX}px, ${ballPositionY}px)`;
}

function startBall() {
    if (!ballInterval) {
        ballInterval = setInterval(updateBall, 16);
    }
}

function checkEvent(event) {
    if (["ArrowUp", "ArrowDown"].includes(event.key)) {
        movePlayer(event);
    }
    if (event.key === "Enter") {
        startBall();
    }
}

window.addEventListener('keydown', checkEvent);