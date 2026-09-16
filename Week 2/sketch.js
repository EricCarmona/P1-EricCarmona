let car1 = -200;
let car2 = -500;
let car3 = -800;
let car4 = -1100;
let car5 = -1400;

function setup() {
  createCanvas(800, 600);
}

function draw() {

  background(225);

  // STATIC ELEMENTS

  push();
  noStroke();

  // sky
  fill(136, 206, 235);
  rect(0, 0, 800, 500);

  // street
  fill(133, 133, 133);
  rect(0, 500, 800, 100);

  // line1
  fill(80, 80, 80);
  rect(0, 495, 800, 5);

  // line2 (bottom)
  fill(225, 225, 225);
  rect(0, 595, 800, 5);

  // line3
  fill(0, 95, 0);
  rect(0, 490, 800, 5);

  // line4
  fill(0, 64, 0);
  rect(0, 485, 800, 5);

  // continuous lines
  fill(225, 225, 225);
  rect(-2, 550, 60, 10, 4);
  rect(100, 550, 90, 10, 4);
  rect(240, 550, 90, 10, 4);
  rect(380, 550, 90, 10, 4);
  rect(520, 550, 90, 10, 4);
  rect(650, 550, 90, 10, 4);
  rect(790, 550, 90, 10, 4);

  pop();


  // mountains

  push();

  fill(64, 64, 64);
  triangle(280, 486, 580, 486, 430, 180);

  fill(95, 95, 95);
  triangle(480, 486, 880, 486, 650, 350);

  fill(95, 95, 95);
  triangle(100, 486, 380, 486, 230, 280);

  pop();


  // Verkeerslicht

  push();

  fill(48, 48, 48);
  noStroke();

  rect(599, 414, 10, 90, 4);
  rect(589, 330, 30, 90);

  fill(0, 225, 0);
  circle(604, 400, 20);

  fill(63, 0, 0);
  circle(604, 375, 20);
  circle(604, 350, 20);

  pop();


  // trees

  push();

  noStroke();

  fill(82, 51, 32);

  rect(29, 365, 15, 130, 3);
  rect(100, 375, 15, 120, 3);
  rect(400, 365, 15, 130, 3);
  rect(200, 375, 15, 120, 3);
  rect(280, 515, 15, 80);

  pop();


  // CAR 1

  car1 = car1 + 10;

  fill("white");
  rect(car1, 520, 140, 50);

  fill(0);
  circle(30 + car1, 570, 40);
  circle(110 + car1, 570, 40);


  // CAR 2

  car2 = car2 + 7;

  fill("red");
  rect(car2, 520, 140, 50);

  fill(0);
  circle(30 + car2, 570, 40);
  circle(110 + car2, 570, 40);


  // CAR 3

  car3 = car3 + 12;

  fill("blue");
  rect(car3, 520, 140, 50);

  fill(0);
  circle(30 + car3, 570, 40);
  circle(110 + car3, 570, 40);


  // CAR 4

  car4 = car4 + 8;

  fill("yellow");
  rect(car4, 520, 140, 50);

  fill(0);
  circle(30 + car4, 570, 40);
  circle(110 + car4, 570, 40);


  // CAR 5

  car5 = car5 + 6;

  fill("green");
  rect(car5, 520, 140, 50);

  fill(0);
  circle(30 + car5, 570, 40);
  circle(110 + car5, 570, 40);


  // LOOP

  if (car1 > 900) {
    car1 = -200;
  }

  if (car2 > 900) {
    car2 = -500;
  }

  if (car3 > 900) {
    car3 = -800;
  }

  if (car4 > 900) {
    car4 = -1100;
  }

  if (car5 > 900) {
    car5 = -1400;
  }

}