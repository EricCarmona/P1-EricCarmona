// Stap 1
let x = 100;

// Stap 2
let greeting = "Hello World!";

let a = 2450;
let b = 1000;

// Stap 3
let optellen = a + b;
let aftrekken = a - b;
let vermenigvuldigen = a * b;
let delen = a / b;


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
  
  // Stap 4: Toon de berekeningen
  let posY = 200;
  text(`Optellen: ${optellen}` , 20 , posY);
  posY += 20;
  text(`Aftrekken: ${aftrekken}` , 20 , posY);
  posY += 20;
  text(`Vermenigvuldigen: ${vermenigvuldigen}` , 20 , posY);
  posY += 20;
  text(`Delen: ${delen}` , 20 , posY);
}
