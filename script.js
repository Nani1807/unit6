// Отримуємо посилання на елемент canvas та його контекст
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

// Задаємо розміри платформи та м'ячика
var paddleWidth = 100;
var paddleHeight = 10;
var ballRadius = 5;

// Початкові координати платформи та м'ячика
var paddleX = (canvas.width - paddleWidth) / 2;
var ballX = canvas.width / 2;
var ballY = canvas.height - paddleHeight - ballRadius;

// Зміна для збереження напрямку руху м'ячика
var ballDX = 2;
var ballDY = -2;

// Обробник натискання клавіші
document.addEventListener("keydown", keyDownHandler);

// Функція для обробки натискання клавіші
function keyDownHandler(e) {
  if (e.keyCode === 37) { // Вліво
    paddleX -= 10;
  } else if (e.keyCode === 39) { // Вправо
    paddleX += 10;
  }
}

// Функція для малювання платформи
function drawPaddle() {
  context.beginPath();
  context.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  context.fillStyle = "#000";
  context.fill();
  context.closePath();
}

// Функція для малювання м'ячика
function drawBall() {
  context.beginPath();
  context.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  context.fillStyle = "#000";
  context.fill();
  context.closePath();
}

// Функція для оновлення стану гри
function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddle();
  drawBall();

  // Зміна напрямку руху м'ячика при зіткненні зі стінками
  if (ballX + ballDX > canvas.width - ballRadius || ballX + ballDX < ballRadius) {
    ballDX = -ballDX;
  }
  if (ballY + ballDY < ballRadius) {
    ballDY = -ballDY;
  }

  // Зміна напрямку руху м'ячика при зіткненні з платформою
  if (ballY + ballDY > canvas.height - paddleHeight - ballRadius &&
      ballX + ballDX > paddleX && ballX + ballDX < paddleX + paddleWidth) {
    ballDY = -ballDY;
  }

  ballX += ballDX;
  ballY += ballDY;

  requestAnimationFrame(update);
}

update();
