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
      fill("#0000ff")
    } else {
      fill(255)
    }
    rect(20 + i * 50, 20, 50, 50);
  }
  pop();


  // ========================================== //
  // 2: 5 blokjes onder elkaar //
  // ========================================== //
  push();
  text("2.", 20, 105);

  for (let i = 0; i < 5; i++) {
    fill(i * 51)
    rect(20, 110 + i * 50, 50, 50);
  }
  pop();


  // ========================================== //
  // 3: 4 blokjes naast elkaar //
  // ========================================== //
  push();
  text("3.", 80, 105);

  let xActual = 80;

  for (let i = 0; i < 5; i++) {
    let ancho = 0 + i * 25

    fill(0, (i - 1) * 64, 0)
    rect(xActual, 120, ancho, 50)

    xActual = ancho + xActual
  }
  pop();








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