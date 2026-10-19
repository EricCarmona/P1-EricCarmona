function setup() {
  createCanvas(800, 700);
}

function draw() {
  background(200);

  text(`X: ${int(mouseX)}`, 750, 20)
  text(`Y: ${int(mouseY)}`, 750, 40)

  // Titulos
  textSize(12);
  textStyle(BOLD);
  text("1. Houd B in om een blokje te laten verschijnen.", 20, 20);
  text("2. Druk op spatie om het getal op 0 te zetten.", 20, 120);
  text("3. Druk op enter om van rood -> groen -> oranje te gaan.", 20, 240);
  text("4. Beweeg de eightball met WASD of de pijltjestoetsen.", 360, 20);


  if (keyIsPressed === true) {
    if (keyCode === 66) {
      rect(30, 30, 60, 60)
    }
  }
}

/*// ========================================== //
Todd la informacion de la tarea lo podre encontrar en esta paguina: https://gluwebdev.notion.site/Input-23369bb8092d80f8beaec25585f534c1


https://www.toptal.com/developers/keycode
B = 66
// ========================================== //*/
