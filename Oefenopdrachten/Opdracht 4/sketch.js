let incrementNumber = 0;
let isRunning = true;

// 0 = off, 1 = red, 2 = yellow, 3 = green
let trafficLightState = 0;

moveX = 270;
moveY = 200;



function setup() {
  createCanvas(400, 400);
  colorCirculo = color(0, 0, 0, 0);
}

function draw() {
  background(200);

  textSize(7);
  text("X: " + mouseX + "Y: " + mouseY, 355, 10);

  /*
  Oefening 1 
  1: Blokje laten verschijnen 
  */
  push();
  textSize(6);
  text("1: Druk op B om een vierkant te laten verschijnen.", 5, 15);

  if (keyIsPressed === true && key === 'b') {
    rect(20, 20, 60, 60);
  }
  pop();


  /*
  Oefening 2
  2: Teller 
  */
  push();
  textSize(6);
  text("2: Druk op spatie om het getal op 0 te zetten.", 5, 90);
  textSize(20)
  text(incrementNumber, 20, 120);

  if (isRunning) {
    incrementNumber = incrementNumber + 1;
    if (incrementNumber > 1000) {
      incrementNumber = 0;
    }
  }
  pop();


  /*  
  Oefening 3
  3: Werkend verkeerslicht
  */
  push();
  textSize(6);
  text("3: Druk op enter om van groen -> oranje -> rood te gaan.", 5, 150);
  noStroke();
  fill(130)
  rect(30, 170, 40, 100);
  rect(40, 270, 20, 50);

  if (trafficLightState === 1) {
    fill(0, 225, 0);
    circle(50, 250, 25);
  } else {
    fill(178, 178, 178);
    circle(50, 250, 25);
  }
  if (trafficLightState === 2) {
    fill("yellow");
    circle(50, 220, 25);
  } else {
    fill(178, 178, 178);
    circle(50, 220, 25);
  }
  if (trafficLightState === 3) {
    fill('red');
    circle(50, 190, 25);
  } else {
    fill(178, 178, 178);
    circle(50, 190, 25);
  }
  pop();


  /*
  Oefening 4
  4: Moving eightball
  */
  push();
  textSize(6);
  text("4: Druk op B om een vierkant te laten verschijnen.", 200, 15);

  //canvasgrenzen voor de 8-ball
  moveY = constrain(moveY, 75, height - 75);
  moveX = constrain(moveX, 75, width - 75);

  fill(0);
  circle(moveX, moveY, 150);
  fill(225);
  circle(moveX, moveY, 80);
  textSize(40)
  fill(0);
  text("8", moveX - 10, moveY + 11);

  if (keyIsDown(65) || keyIsDown(LEFT_ARROW) === true) {
    moveX -= 5;
  }
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW) === true) {
    moveX += 5;
  }
  if (keyIsDown(87) || keyIsDown(UP_ARROW) === true) {
    moveY -= 5;
  }
  if (keyIsDown(83) || keyIsDown(DOWN_ARROW) === true) {
    moveY += 5;
  }
  pop();

}

  function keyPressed() {
    //Oefening 2
    if (keyCode === 32) {
      if (isRunning) {
        isRunning = false;
        incrementNumber = 0;
      } else {
        isRunning = true;
      }
    }

    //Oefening 3
    if (keyCode === 13) {
      trafficLightState++;
    }
    if (trafficLightState > 3) {
      trafficLightState = 1;
    }

  }
