let score = 0;
let ball = document.getElementById("ball");
let gameArea = document.getElementById("gameArea");
let scoreDisplay = document.getElementById("score");

let gameWidth = gameArea.offsetWidth;
let gameHeight = gameArea.offsetHeight;

function moveBall() {
    let x = Math.random() * (gameWidth - 40);
    let y = Math.random() * (gameHeight - 40);

    ball.style.left = x + "px";
    ball.style.top = y + "px";
}

function increaseScore() {
    score++;
    scoreDisplay.textContent = "Score: " + score;
    moveBall();
}

ball.addEventListener("click", increaseScore);

// Start moving the ball
moveBall();
