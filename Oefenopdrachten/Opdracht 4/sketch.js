let teller = 0;
let verkeerslicht = 0;

function setup() {
  createCanvas(800, 700);
}

function draw() {
  background(200);

  text(`X: ${int(mouseX)}`, 750, 20);
  text(`Y: ${int(mouseY)}`, 750, 40);

  // Titulos
  textSize(12);
  textStyle(BOLD);
  text("1. Houd B in om een blokje te laten verschijnen.", 20, 20);
  text("2. Druk op spatie om het getal op 0 te zetten.", 20, 120);
  text("3. Druk op enter om van rood -> groen -> oranje te gaan.", 20, 240);
  text("4. Beweeg de eightball met WASD of de pijltjestoetsen.", 360, 20);


  // 1: Blokje laten verschijnen
  if (keyIsPressed === true) {
    if (keyCode === 66) {
      rect(30, 30, 60, 60);
    };
  }

  // 2: Teller
  push();
  textSize(50);
  text(teller, 60, 190);
  teller += 1;

  if (teller >= 500) {
    teller = 0;
  } else if (keyIsPressed === true) {
    if (keyCode === 32)
      teller = 0;
  }
  pop();

  // 3: Werkend verkeerslicht 
  push();
  fill("#585858");
  rect(85, 400, 30, 180);
  rect(60, 300, 80, 180);

  // Semaforo rojo
  if (verkeerslicht === 0) {
    fill("#ff0000")
  } else {
    fill("#808080");
  }
  circle(100, 330, 50)
  
  // Semaforo naranja
  if (verkeerslicht === 1) {
    fill("#ffa600")
  } else {
    fill("#808080");
  }
  circle(100, 330 + 60, 50)

  // Semaforo verde
  circle(100, 330 + 60, 50);
  if (verkeerslicht === 2) {
    fill("#73ff00")
  } else {
    fill("#808080");
  }
  circle(100, 330 + 60 * 2, 50)
  pop();
}

function keyPressed() {
  if (keyCode === ENTER) {
    verkeerslicht++;

    if (verkeerslicht > 2) {
      verkeerslicht = 0;
    }
  }
}









/*// ========================================== //
Todd la informacion de la tarea lo podre encontrar en esta paguina: https://gluwebdev.notion.site/Input-23369bb8092d80f8beaec25585f534c1


https://www.toptal.com/developers/keycode
B = 66
Espacio = 32
// ========================================== //*/
