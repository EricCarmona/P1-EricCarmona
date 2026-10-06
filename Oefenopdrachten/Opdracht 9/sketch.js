// Game data and winning score
let circles = { cirX: [], cirY: [], cirSize: [], col: [], cirSpeedX: [], cirSpeedY: [] };
let counter = 0;
let gameWon = false;
let gameLosser = false;
const WIN_TARGET = 10;
const LOSE_TARGET = -3;

// Create the canvas and start a new game
function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  resetGame();
}

// Draw the game screen
function draw() {
  background("#0d0915");

  if (gameWon) {
    push();
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(28);
    fill(120, 90, 70);
    text("¡HAS GANADO!", width / 2, height / 2);
    pop();
    return;
  } else if (gameLosser) {
    push();
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(28);
    fill(0, 90, 90);
    text("¡HAS PERDIDO!", width / 2, height / 2);
    pop();
    return;
  }

  textStyle(BOLD);
  textSize(50);
  fill(225);
  textAlign(CENTER, CENTER);
  text(counter, width / 2, height / 2);

  randomCircles();

  push();
  noCursor();

  stroke("#8769c2");
  strokeWeight(2);
  noFill();

  line(mouseX - 10, mouseY, mouseX + 10, mouseY);
  line(mouseX, mouseY - 10, mouseX, mouseY + 10);
  pop();
}

// Reset the score and create new circles
function resetGame() {
  counter = 0;
  gameWon = false;
  gameLosser = false;
  circles.cirX = [];
  circles.cirY = [];
  circles.cirSize = [];
  circles.col = [];
  circles.cirSpeedX = [];
  circles.cirSpeedY = [];

  for (let i = 0; i < 100; i++) {
    circles.cirX.push(int(random(-10, 410)));
    circles.cirY.push(int(random(-10, 410)));
    circles.cirSize.push(int(random(10, 40)));
    circles.col.push(int(random(15, 100)));
    circles.cirSpeedX.push(random(-2, 2));
    circles.cirSpeedY.push(random(-2, 2));
  }
}

// Move and draw all circles
function randomCircles() {
  for (let i = 0; i < 100; i++) {
    circles.cirX[i] = circles.cirX[i] + circles.cirSpeedX[i];
    circles.cirY[i] = circles.cirY[i] + circles.cirSpeedY[i];

    if (circles.cirX[i] > 410) {
      circles.cirX[i] = -10;
    } else if (circles.cirX[i] < -10) {
      circles.cirX[i] = 410;
    }

    if (circles.cirY[i] > 410) {
      circles.cirY[i] = -10;
    } else if (circles.cirY[i] < -10) {
      circles.cirY[i] = 410;
    }

    fill(260, 85, circles.col[i]);
    noStroke();
    circle(circles.cirX[i], circles.cirY[i], circles.cirSize[i]);
  }
}

// Handle clicks and restart after winning
function mousePressed() {
  if (gameWon || gameLosser) {
    resetGame();
    return;
  }

  for (let i = 0; i < 100; i++) {
    let hit = dist(mouseX, mouseY, circles.cirX[i], circles.cirY[i]);
    let radio = circles.cirSize[i] / 2;

    if (hit < radio) {
      if (circles.col[i] > 60) {
        counter++;
      } else {
        counter--;
      }

      circles.cirX[i] = int(random(-10, 410));
      circles.cirY[i] = int(random(-10, 410));

      if (counter >= WIN_TARGET) {
        gameWon = true;
      } else if (counter <= LOSE_TARGET) {
        gameLosser = true;
      }
      return;
    }
  }
}
