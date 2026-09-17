// ==========================================
// GLOBALE VARIABELEN
// ==========================================

// Positie en effecten van de zon
let sunX = -100;
let sunRatio1 = 50;
let sunRatio2 = 50;
let sunSpeedRatio1 = 0.5;
let sunSpeedRatio2 = -0.5;

// Variabelen voor de beweging van de boombladeren (windeffect)
let treeLeaves1 = 0;
let treeLeaves2 = 0;
let treeLeaves3 = 0;

// Status van het verkeerslicht: 0 = Uit, 1 = Groen, 2 = Oranje, 3 = Rood
let trafficLightState = 1;

// 3 onafhankelijke auto-objecten met verschillende startposities
// Hierdoor starten ze niet tegelijkertijd op dezelfde plek (timing).
let redCar = { x: -150, baseSpeed: 5, currentSpeed: 5, color: "red" };
let slowCar = { x: -450, baseSpeed: 3, currentSpeed: 3, color: "orange" };
let fastCar = { x: -750, baseSpeed: 7.5, currentSpeed: 7.5, color: "blue" };

// Ik wilde alles in één complete wolk onderbrengen, zodat ik die zo vaak kan aanroepen als ik wil.
let startWolk1 = 500;
let startWolk2 = 500;
let startWolk3 = 500;
let wolk1 = () => {
  fill(222); circle(350 + startWolk1, 200+80, 60);
  fill(225); circle(450 + startWolk1, 205+80, 60);
  fill(220); circle(425 + startWolk1, 205+80, 60);
  fill(221); circle(390 + startWolk1, 205+80, 60);
  fill(220); circle(390 + startWolk1, 180+80, 60);
  fill(223); circle(425 + startWolk1, 180+80, 60);
};
let wolk2 = () => {
  fill(222); circle(350 + startWolk2, 200-20, 60);
  fill(225); circle(450 + startWolk2, 205-20, 60);
  fill(220); circle(425 + startWolk2, 205-20, 60);
  fill(221); circle(390 + startWolk2, 205-20, 60);
  fill(220); circle(390 + startWolk2, 180-20, 60);
  fill(223); circle(425 + startWolk2, 180-20, 60);
};
let wolk3 = () => {
  fill(222); circle(350 + startWolk3, 200, 60);
  fill(225); circle(450 + startWolk3, 205, 60);
  fill(220); circle(425 + startWolk3, 205, 60);
  fill(221); circle(390 + startWolk3, 205, 60);
  fill(220); circle(390 + startWolk3, 180, 60);
  fill(223); circle(425 + startWolk3, 180, 60);
};

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(225);

  // ==========================================
  // LUCHT EN WEG
  // ==========================================
  push();
  noStroke();

  // Blauwe lucht
  fill(136, 206, 235);
  rect(0, 0, 800, 500);

  // Grijze weg
  fill(133, 133, 133);
  rect(0, 500, 800, 100);

  // Decoratielijnen op de weg
  fill(80, 80, 80); rect(0, 495, 800, 5); // Lijn 1
  fill(225, 225, 225); rect(0, 595, 800, 5); // Lijn 2 (onderkant)
  fill(0, 95, 0); rect(0, 490, 800, 5); // Lijn 3
  fill(0, 64, 0); rect(0, 485, 800, 5); // Lijn 4

  // Onderbroken witte lijnen in het midden van de weg
  fill(225, 225, 225);
  rect(-2, 550, 60, 10, 4);
  rect(100, 550, 90, 10, 4);
  rect(240, 550, 90, 10, 4);
  rect(380, 550, 90, 10, 4);
  rect(520, 550, 90, 10, 4);
  rect(650, 550, 90, 10, 4);
  rect(790, 550, 90, 10, 4);
  pop();

  // ==========================================
  // BERGEN
  // ==========================================
  push();
  fill(64, 64, 64); triangle(280, 486, 580, 486, 430, 180);
  fill(95, 95, 95); triangle(480, 486, 880, 486, 650, 350);
  fill(95, 95, 95); triangle(100, 486, 380, 486, 230, 280);
  pop();

  // ==========================================
  // VERKEERSLICHT
  // ==========================================
  push();
  fill(48, 48, 48);
  noStroke();
  rect(599, 414, 10, 90, 4);
  rect(589, 330, 30, 90);

  // Groen licht (Status 1)
  if (trafficLightState === 1) { fill(0, 225, 0); circle(604, 400, 20); }
  else { fill(178, 178, 178); circle(604, 400, 20); }

  // Oranje licht (Status 2)
  if (trafficLightState === 2) { fill("yellow"); circle(604, 375, 20); }
  else { fill(178, 178, 178); circle(604, 375, 20); }

  // Rood licht (Status 3)
  if (trafficLightState === 3) { fill('red'); circle(604, 350, 20); }
  else { fill(178, 178, 178); circle(604, 350, 20); }
  pop();

  // ==========================================
  // WIND ANIMATIE VOOR DE BLADEREN
  // ==========================================
  let speedLeaves = 0.03;
  let leafWidth = 8;
  let swaying = sin(frameCount * speedLeaves) * leafWidth;

  treeLeaves1 = swaying;
  treeLeaves2 = swaying + 3;
  treeLeaves3 = swaying - 3;

  // ==========================================
  // BOMEN OP DE ACHTERGROND
  // ==========================================
  push();
  noStroke();

  // Boomstammen op de achtergrond
  fill(82, 51, 32);
  rect(29, 365, 15, 130, 3);
  rect(100, 375, 15, 120, 3);
  rect(200, 375, 15, 120, 3);
  rect(400, 365, 15, 130, 3);

  // Bladeren van boom 1
  fill(0, 225, 0); circle(10 + treeLeaves1, 355, 80);
  fill(120, 225, 0); circle(40 + treeLeaves2, 365, 60);
  fill(0, 225, 60); circle(35 + treeLeaves3, 335, 70);

  // Bladeren van boom 2
  fill(0, 225, 0); circle(90 + treeLeaves1, 375, 80);
  fill(120, 225, 0); circle(120 + treeLeaves2, 375, 60);
  fill(0, 225, 60); circle(107 + treeLeaves3, 345, 70);

  // Bladeren van boom 3
  fill(0, 225, 0); circle(177 + treeLeaves1, 375, 80);
  fill(120, 225, 0); circle(220 + treeLeaves2, 375, 60);
  fill(0, 225, 60); circle(207 + treeLeaves3, 345, 70);

  // Bladeren van boom 4
  fill(0, 225, 0); circle(377 + treeLeaves1, 365, 80);
  fill(120, 225, 0); circle(427 + treeLeaves2, 365, 60);
  fill(0, 225, 60); circle(407 + treeLeaves3, 325, 70);
  pop();

  // ========================================== //
  // Wolken //
  // ========================================== //
  push();
  noStroke();

  // Wolken 1 
  wolk1();
  startWolk1 -=1.8; 
  if (startWolk1 < -500) { startWolk1 = 500};

  // Wolken 2 
  wolk2();
  startWolk2 -=1.4; 
  if (startWolk2 < -500) { startWolk2 = 500};

  // Wolken 3 
  wolk3();
  startWolk3 -=1; 
  if (startWolk3 < -500) { startWolk3 = 500};
  pop();

  // ==========================================
  // LOGICA EN VERWERKING VAN DE AUTO'S
  // ==========================================
  // Snelheid en beweging berekenen voor elke individuele auto
  updateCarProperties(redCar);
  updateCarProperties(slowCar);
  updateCarProperties(fastCar);

  // Elke auto tekenen met zijn eigen unieke eigenschappen
  drawCar(redCar);
  drawCar(slowCar);
  drawCar(fastCar);

  // ==========================================
  // ANIMATIE VAN DE ZON
  // ==========================================
  push();
  noStroke();
  fill(224, 180, 71); circle(sunX, 100, sunRatio1);
  fill(224, 207, 165); circle(sunX, 100, sunRatio2);
  fill(255, 255, 0); circle(sunX, 100, 40);

  sunRatio1 = sunRatio1 + sunSpeedRatio1;
  sunRatio2 = sunRatio2 + sunSpeedRatio2;

  if (sunRatio1 > 80 || sunRatio1 < 40) { sunSpeedRatio1 = sunSpeedRatio1 * -1; }
  if (sunRatio2 > 70 || sunRatio2 < 30) { sunSpeedRatio2 = sunSpeedRatio2 * -1; }

  sunX = sunX + 1;
  if (sunX > 900) { sunX = -100; }
  pop();

  // ==========================================
  // BOOM OP DE VOORGROND
  // ==========================================
  fill(82, 51, 32);
  noStroke();
  rect(280, 515, 15, 80);
  fill(0, 225, 0); circle(287 + treeLeaves1, 465, 80);
  fill(120, 225, 0); circle(257 + treeLeaves2, 495, 60);
  fill(0, 225, 60); circle(307 + treeLeaves3, 495, 70);
}

// ==========================================
// ONDERSTEUNENDE FUNCTIES
// ==========================================

// Deze functie berekent de snelheid van de auto op basis van het verkeerslicht
function updateCarProperties(car) {
  // Zonegrens: auto's reageren alleen op het stoplicht als ze er vlak voor staan (tussen x=300 en x=530)
  if (car.x < 530 && car.x > 300) {
    if (trafficLightState === 3) {
      car.currentSpeed = 0;
    } else if (trafficLightState === 2) {
      car.currentSpeed = car.baseSpeed * 0.30;
    } else {
      car.currentSpeed = car.baseSpeed;
    }
  } else {
    // Als ze het stoplicht al voorbij zijn of er nog niet zijn, rijden ze met normale snelheid
    car.currentSpeed = car.baseSpeed;
  }

  // Verplaats de auto door de huidige snelheid op te tellen bij de X-positie
  car.x += car.currentSpeed;

  // Als de auto volledig van het scherm is aan de rechterkant, reset naar de linkerkant
  if (car.x > 850) {
    car.x = -200;
  }
}

// Eén herbruikbare functie om elke autostructuur dynamisch te tekenen
function drawCar(car) {
  push();
  noStroke();
  fill(car.color);
  rect(car.x, 520, 140, 50, 4);
  rect(car.x + 25, 485, 90, 40, 8);

  // Ramen
  fill(200, 230, 255);
  rect(car.x + 35, 492, 30, 25, 2);
  rect(car.x + 75, 492, 30, 25, 2);

  // Wielen
  fill(30);
  circle(35 + car.x, 570, 35);
  circle(105 + car.x, 570, 35);
  pop();
}

// Interactieve bediening van het verkeerslicht bij het indrukken van de ENTER-toets
function keyPressed() {
  if (keyCode === 13) {
    trafficLightState++;
  }
  if (trafficLightState > 3) {
    trafficLightState = 1;
  }
}

