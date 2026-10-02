// Project colors
let landscapeColors = [
  "#0d0915", // Background
  "#4b3858", // Moon and stars
  "#2d1735"  // Mountains
];

// Star positions and sizes
let starX = [];
let starY = [];
let starSize = [];

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 100; i++) {
    starX.push(random(width));
    starY.push(random(height));
    starSize.push(random(2, 5));
  }

}

function draw() {
  background(landscapeColors[0]);

  // Mouse coordinates
  push();
  textStyle(BOLD);
  textSize(12);
  fill(landscapeColors[1]);
  text(`X:${int(mouseX)} Y:${int(mouseY)}`, 720, 20);
  pop();

  // Stars
  push();
  noStroke();
  fill(landscapeColors[1]);

  for (let i = 0; i < starX.length; i++) {
    circle(starX[i], starY[i], starSize[i]);
  }

  pop();

  // Moon
  push();
  noStroke();
  fill(landscapeColors[1]);
  circle(680, 100, 60);
  fill(landscapeColors[0]);
  circle(710, 85, 60);
  pop();

  // Mountains
  push();
  noStroke();
  fill(landscapeColors[2]);
  triangle(200, 300, -500, 600, 860, 600);
  triangle(550, 280, -500, 600, 1500, 600);
  pop();

}