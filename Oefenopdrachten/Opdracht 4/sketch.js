let teller = 0;

// 0 = rood, 1 = oranje, 2 = groen
let verkeerslicht = 0;

// Positie van de 8-ball
let x = 502;
let y = 190;

function setup() {
  createCanvas(800, 700);
}

function draw() {
  background(200);

  text(`X: ${int(mouseX)}`, 750, 20);
  text(`Y: ${int(mouseY)}`, 750, 40);

  // Titels
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

  // Rood licht
  if (verkeerslicht === 0) {
    fill("#ff0000")
  } else {
    fill("#808080");
  }
  circle(100, 330, 50)

  // Oranje licht
  if (verkeerslicht === 1) {
    fill("#ffa600")
  } else {
    fill("#808080");
  }
  circle(100, 330 + 60, 50)

  // Groen licht
  circle(100, 330 + 60, 50);
  if (verkeerslicht === 2) {
    fill("#73ff00")
  } else {
    fill("#808080");
  }
  circle(100, 330 + 60 * 2, 50)
  pop();

  // 4: Moving eightball
  push();
  textSize(50);
  fill(0)
  circle(x + 13, y, 100);
  fill(255)
  circle(x + 13, y, 80);
  fill(0)
  text("8", x, y + 15);
  
  // Hier wordt gecontroleerd of de toetsen worden ingedrukt; daarna beweegt de bal.
  if (keyIsPressed === true) {
    if (keyIsDown(87) || keyIsDown(38)) {
      y -= 10
    };
  }
  if (keyIsPressed === true) {
    if (keyIsDown(83) || keyIsDown(40)) {
      y += 10
    };
  }
  if (keyIsPressed === true) {
    if (keyIsDown(65) || keyIsDown(37)) {
      x -= 10
    };
  }
  if (keyIsPressed === true) {
    if (keyIsDown(68) || keyIsDown(39)) {
      x += 10
    };
  }

  // Grenzen van het canvas zodat de bal niet verdwijnt wanneer deze buiten het canvas komt.
  if ( x < -50) {
    x = 850
  } else if ( x > 850){
    x = - 50
  }

   if ( y < -50) {
    y = 750
  } else if ( y > 750){
    y = - 50
  }

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
Alle informatie over de opdracht is te vinden op deze pagina: https://gluwebdev.notion.site/Input-23369bb8092d80f8beaec25585f534c1


https://www.toptal.com/developers/keycode
B = 66
Spatie = 32
// ========================================== //*/
