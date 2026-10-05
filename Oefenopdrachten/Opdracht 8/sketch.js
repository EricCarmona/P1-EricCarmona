function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  push();
  textSize(12);
  fill(0);
  textStyle(BOLD);
  text(`X:${int(mouseX)} Y:${int(mouseY)}`, 730, 10)
  pop();

  // Huis teken
  push();
  tekenHuis(300, 30);
  pop();

  // Parameters
  push();
  tekenCircle(100);
  tekenRectangle(100, 100);
  tekenLine(0, 330);
  tekenText("purple", 20);
  pop();

}

// ========================================== //
// 1. Een huis tekenen //
// ========================================== //
function tekenHuis(x, y) {
  translate(x, y);
  triangle(100, 0, 0, 100, 200, 100);
  rect(0, 100, 200, 200);
  rect(80, 200, 40, 100);
  rect(20, 140, 40, 40);
  rect(140, 140, 40, 40);
  line(40, 140, 40, 180);
  line(20, 160, 60, 160);
  line(160, 140, 160, 180);
  line(140, 160, 180, 160);
}


// ========================================== //
// 2. Parameters //
// ========================================== //
function tekenCircle(grootte) {
  circle(100, 100, grootte);
}

function tekenRectangle(height, width) {
  rect(100, 100, height, width)
}

function tekenLine(x, y) {
  line(x, y, x + 800, y);
}

function tekenText(color, Size) {
  fill(color);
  textSize(Size);
  text(`Hello World`,600,50)

}