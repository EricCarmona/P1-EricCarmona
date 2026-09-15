function setup() {
  createCanvas(400, 400);
}

let x = 100;
let hi = "Hello world!";

let a = 100;
let b = 50;


let som = a + b;
let verschil = a - b;
let product = a * b;
let uitkomst = a / b;
let rest = a % b;


function draw() {
  background(220);

  text(x,20,20); 
  text(hi,20,60);
  text("a = " + a + "  " + "b = " + b, 300,20)
  text("Optellen = " + som,20,80);
  text("Afrekken = " + verschil,20,100);
  text("Vermenigvuldigen = " + uitkomst,20,120)
  text("Delen = " + rest,20,140)

}
