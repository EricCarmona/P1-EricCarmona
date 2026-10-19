// Stap 1
let x = 100;

// Stap 2
let greeting = "Hello World!";

let a = 114;
let b = 50;
let pct = 24;

// Stap 3
let optellen = a + b;
let aftrekken = a - b;
let vermenigvuldigen = a * b;
let delen = a / b;

// Stap X
let percentage = a * (pct / 100);
let korting = b - b * (pct / 100);

// Ik heb a en b in een array gezet om aan te geven dat er twee waarden zijn waarvan het gemiddelde wordt berekend.
let nVari = [a, b];
let gemiddelde = (a + b) / nVari.length;
let sqrt = Math.sqrt(a) + Math.sqrt(b);


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Stap 1: Maak een variabele en laat deze zien
  textSize(30);
  text(x, 15, 40);

  // Stap 2: Gebruik een tekstvariabele
  textSize(18);
  text(greeting, 20, 100);

  // Stap 3: Rekenen met variabelen
  textSize(12);
  text(`a: ${a}`, 330, 20);
  text(`b: ${b}`, 330, 40);
  text(`Pct: %${pct}`, 330, 60)

  // Stap 4: Toon de berekeningen
  textSize(10);
  let posY = 200;
  text(`Optellen (a + b): ${optellen}`, 20, posY);
  posY += 20;
  text(`Aftrekken (a - b): ${aftrekken}`, 20, posY);
  posY += 20;
  text(`Vermenigvuldigen (a * b): ${vermenigvuldigen}`, 20, posY);
  posY += 20;
  text(`Delen (a / b): ${delen}`, 20, posY);

  // Stap X: Persoonlijke experimenten met het berekenen van het percentage, een korting, het gemiddelde en de vierkantswortel
  text(`Percentage (a * (pct / 100)): ${percentage}`, 200, posY - 60);
  text(`Korting (b - b * (pct / 100)): ${korting}`, 200, posY - 40);
  text(`Gemiddelde ((a + b) / nVari.lengt): ${gemiddelde}`, 200, posY - 20);
  text(`Som van de vierkantswortels a + b \n ${Math.sqrt(a).toFixed(2)} + ${Math.sqrt(b).toFixed(2)} = ${sqrt.toFixed(2)}`, 200, posY );
}