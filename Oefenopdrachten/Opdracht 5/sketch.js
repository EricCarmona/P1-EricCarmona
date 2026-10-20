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
      fill("#0000ff");
    } else {
      fill(255);
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
    fill(i * 51);
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
    let ancho = 0 + i * 25;

    fill(0, (i - 1) * 85, 0);
    rect(xActual, 110, ancho, 50);

    xActual = ancho + xActual;
  }
  pop();



  // ========================================== //
  // 4: 4 blauwe blokjes naast elkaar //
  // ========================================== //
  push();
  text("4.", 80, 205);

  let xActual1 = 80;

  for (let i = 0; i < 5; i++) {
    let ancho = 0 + i * 25;
    let alto = 0 + i * 38;

    fill(0, 0, 255 - (i - 1) * 85);
    rect(xActual1, 210, ancho, alto);

    xActual1 = ancho + xActual1
  }
  pop();


  // ========================================== //
  // 5: 6 cirkels naast elkaar //
  // ========================================== //
  push();
  text("5.", 540, 20);

  for (let i = 0; i < 5; i++) {
    strokeWeight(i * 3);
    circle(560 + i * 50, 45, 40);
    textStyle(BOLD);
    textSize(20);
    text("8", 555 + i * 50, 52);
  }
  pop();


  // ========================================== //
  // 6: Bullseye //
  // ========================================== //

  /*// ========================================== //
  El símbolo % se llama operador módulo. En programación, sirve para calcular el residuo (lo que sobra) de una división.
  Cuando escribes i % 2, le estás diciendo a la computadora: "Divide i entre 2 y dime cuánto sobra".
    Aquí está el truco de la matemática:
      • Si un número es par (0, 2, 4, 6...) y lo divides entre 2, el residuo siempre es 0.
      • Si un número es impar (1, 3, 5, 7...) y lo divides entre 2, el residuo siempre es 1.
  // ========================================== //*/
  push();
  text("6.", 350, 105);

  for (let i = 0; i < 10; i++) {
    fill(i % 2 === 0 ? "red" : "white");
    circle(480, 235, 255 - i * 26);
  }
  pop();



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