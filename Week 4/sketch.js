// Project colors
let landscapeColors = [
  "#0d0915", // Background
  "#4b3858", // Moon and stars
  "#2d1735"  // Mountains
];

let forestColors = ["#281533", "#341A42", "#40204E"];

// Tree positions and sizes for each row
let backTreeX = [-25, 90, 155, 270, 335, 450, 515, 630, 695, 810];
let backTreeSize = [80, 95, 110, 80, 95, 110, 80, 95, 110, 80];
let middleTreeX = [20, 135, 190, 305, 360, 475, 530, 645, 700, 815];
let middleTreeSize = [105, 120, 135, 105, 120, 135, 105, 120, 135, 105];
let frontTreeX = [-50, 85, 150, 285, 350, 485, 550, 685, 750, 885];
let frontTreeSize = [130, 145, 160, 130, 145, 160, 130, 145, 160, 130];

// Figures random colors
let randomColors = [
  "#5A3F70", "#68477D", "#754F8A",
  "#654568", "#754C7A", "#82548B",
  "#46547A", "#3F6380", "#4B7490",
  "#3D6A7A", "#477C68", "#56836E",
  "#794E59", "#855363", "#806047"
];
let figurePalettes = [
  randomColors,
  ["#F4A261", "#E76F51", "#E9C46A", "#2A9D8F", "#264653"]
];
let activePalette = 0;

// Star positions and sizes
let starX = [];
let starY = [];
let starSize = [];

// Figures position and sizes
let posX = [];
let posY = [];
let posSize = [];
let posSpeed = [];
let posOpacity = [];
let posShape = [];
let posColor = [];

// Draw a tree using three triangles
function drawTree(x, base, size) {
  push();
  translate(x, base);
  scale(size);
  triangle(0, -1, -0.38, -0.35, 0.38, -0.35);
  triangle(0, -0.67, -0.48, -0.05, 0.48, -0.05);
  triangle(0, -0.36, -0.58, 0, 0.58, 0);
  pop();
}

function setup() {
  createCanvas(800, 600);

  // Store random positions and sizes for the stars and figures
  let figureCount = int(random(70, 101));
  for (let i = 0; i < figureCount; i++) {
    // Star
    starX.push(random(0, 800));
    starY.push(random(0, 600));
    starSize.push(random(2, 5));
    // Figures
    posX.push(random(0, width));
    posY.push(random(height, height + 150));
    posSize.push(random(8, 55));
    posSpeed.push(random(0.5, 1.2));
    posOpacity.push(255);
    posShape.push(int(random(0, 3)));
    posColor.push(random(figurePalettes[activePalette]));
  }

}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    for (let i = 0; i < posColor.length; i++) {
      posColor[i] = random(randomColors);
    }
    return false;
  }
}

function draw() {
  background(landscapeColors[0]);

  // ========================================== //
  // Background //
  // ========================================== //

  // Show the mouse position
  push();
  textStyle(BOLD);
  textSize(12);
  fill(landscapeColors[1]);
  text(`X:${int(mouseX)} Y:${int(mouseY)}`, 720, 20);
  pop();

  // Title
  push();
  textFont("Georgia");
  textStyle(ITALIC);
  textSize(32);
  fill(figurePalettes[activePalette][0]);
  text("NACHT", 30, 50);
  pop();

  // Draw the stars saved in setup
  push();
  noStroke();
  fill(landscapeColors[1]);

  for (let i = 0; i < starX.length; i++) {
    circle(starX[i], starY[i], starSize[i]);
  }

  pop();

  // Draw the moon using two circles
  push();
  noStroke();
  fill(landscapeColors[1]);
  circle(680, 100, 60);
  fill(landscapeColors[0]);
  circle(710, 85, 60);
  pop();

  // Draw the mountains
  push();
  noStroke();
  fill(landscapeColors[2]);
  triangle(200, 300, -500, 600, 860, 600);
  triangle(550, 280, -500, 600, 1500, 600);
  pop();

  // Draw the trees from back to front
  push();
  noStroke();

  fill(forestColors[0]);
  for (let i = 0; i < 10; i++) {
    drawTree(backTreeX[i], 410, backTreeSize[i]);
  }

  fill(forestColors[1]);
  for (let i = 0; i < 10; i++) {
    drawTree(middleTreeX[i], 500, middleTreeSize[i]);
  }

  fill(forestColors[2]);
  for (let i = 0; i < 10; i++) {
    drawTree(frontTreeX[i], 620, frontTreeSize[i]);
  }
  pop();

  // Draw the shapes that rise and disappear near the moon
  push();
  noStroke();
  for (let i = 0; i < posX.length; i++) {
    if (posY[i] < 220 && posOpacity[i] > 0) {
      posOpacity[i] -= posSpeed[i] * 2.5;
    }
    if (posOpacity[i] < 0) {
      posOpacity[i] = 0;
    }
    let figureColor = color(posColor[i]);
    figureColor.setAlpha(posOpacity[i]);
    fill(figureColor);

    push();
    translate(posX[i], posY[i]);
    rotate(frameCount / 50);
    let figureSize = posSize[i];
    if (dist(mouseX, mouseY, posX[i], posY[i]) < 50) {
      figureSize *= 2;
    }
    if (posShape[i] === 0) {
      circle(0, 0, figureSize);
    } else if (posShape[i] === 1) {
      square(-figureSize / 2, -figureSize / 2, figureSize);
    } else {
      triangle(
        0, -figureSize / 2,
        -figureSize / 2, figureSize / 2,
        figureSize / 2, figureSize / 2
      );
    }
    pop();

    posY[i] -= posSpeed[i];
    if (posY[i] < 120) {
      posX[i] = random(0, width);
      posY[i] = random(height, height + 150);
      posSize[i] = random(8, 55);
      posSpeed[i] = random(0.5, 1.2);
      posOpacity[i] = 255;
      posShape[i] = int(random(0, 3));
      posColor[i] = random(figurePalettes[activePalette]);
    }
  }
  pop();
}