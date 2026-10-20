function setup() {
  createCanvas(800, 400);


}

function draw() {
  background(220);
  // ========================================== //
  // 1: 10 blokjes op een rij //
  // ========================================== //
  push();
  text("1.", 20, 15);

  for (let i = 0; i < 10; i++) {
    if (i === 6) {
      fill("#0432fd")
    } else {
      fill(255)
    }
    rect(20 + i * 50, 25, 50, 50);
  }
  pop();







  text("2.", 20, 105);
  text("3.", 80, 105);
  text("4.", 80, 205);
  text("5.", 540, 20);
  text("6.", 350, 105);
  text("7.", 625, 105);


  // ========================================== //
  // Ajustes de cordenadas y Cursor //
  // ========================================== //
  push();
  // line(x1, y1, x2, y2);
  noCursor();
  line(mouseX - 10, mouseY, mouseX + 10, mouseY);
  line(mouseX, mouseY + 10, mouseX, mouseY - 10);
  text(`X: ${int(mouseX)}`, 720, 390);
  text(`Y: ${int(mouseY)}`, 760, 390);
  pop();
}