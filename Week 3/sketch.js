// Grid state values (0 = black, 255 = white)
let value0 = "purple"; let value1 = "purple"; let value2 = "purple";
let value3 = "purple"; let value4 = "purple"; let value5 = "purple";
let value6 = "purple"; let value7 = "purple"; let value8 = "purple";

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  // Display current mouse coordinates
  push();
  fill(0);
  text("X: " + mouseX + " Y: " + mouseY, 520, 20);
  pop();

  // Draw the 3x3 interactive grid
  push();
  let vakjeX = 100;
  let vakjeY = 100;
  let vakjeW = 100;
  let vakjeH = 100;

  // Define functions to draw each rectangle
  vakje0 = () => { rect(vakjeX, vakjeY, vakjeW, vakjeH) };
  vakje1 = () => { rect(vakjeX, vakjeY, vakjeW, vakjeH) };
  vakje2 = () => { rect(vakjeX, vakjeY, vakjeW, vakjeH) };
  vakje3 = () => { rect(vakjeX, vakjeY, vakjeW, vakjeH) };
  vakje4 = () => { rect(vakjeX, vakjeY, vakjeW, vakjeH) };
  vakje5 = () => { rect(vakjeX, vakjeY, vakjeW, vakjeH) };
  vakje6 = () => { rect(vakjeX, vakjeY, vakjeW, vakjeH) };
  vakje7 = () => { rect(vakjeX, vakjeY, vakjeW, vakjeH) };
  vakje8 = () => { rect(vakjeX, vakjeY, vakjeW, vakjeH) };

  // Render Row 1
  fill(value0); vakje0(); vakjeX = vakjeX + 100 + 20;
  fill(value1); vakje1(); vakjeX = vakjeX + 100 + 20;
  fill(value2); vakje2(); vakjeX = vakjeX + 100 + 20;

  // Reset X position and move down to Row 2
  vakjeX = 100;
  vakjeY = vakjeY + 100 + 20;

  // Render Row 2
  fill(value3); vakje3(); vakjeX = vakjeX + 100 + 20;
  fill(value4); vakje4(); vakjeX = vakjeX + 100 + 20;
  fill(value5); vakje5(); vakjeX = vakjeX + 100 + 20;

  // Reset X position and move down to Row 3
  vakjeX = 100;
  vakjeY = vakjeY + 100 + 20;

  // Render Row 3
  fill(value6); vakje6(); vakjeX = vakjeX + 100 + 20;
  fill(value7); vakje7(); vakjeX = vakjeX + 100 + 20;
  fill(value8); vakje8(); vakjeX = vakjeX + 100 + 20;
  pop();
  // Draw green custom cursor
  push(); red
  noCursor();
  line(mouseX - 10, mouseY, mouseX + 10, mouseY);
  line(mouseX, mouseY - 10, mouseX, mouseY + 10);

  pop();
}

function mouseClicked() {
  // --- ROW 1 (mouseY goes from 100 to 200) ---

  // Square 0 (Column 1: X from 100 to 200)
  if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200) {
    if (value0 === "purple") {
      value0 = "blue";
    } else {
      value0 = "red";
    }
  }

  // Square 1 (Column 2: X from 220 to 320)
  if (mouseX > 220 && mouseX < 320 && mouseY > 100 && mouseY < 200) {
    if (value1 === "purple") {
      value1 = "blue";
    } else {
      value1 = "red";
    }
  }

  // Square 2 (Column 3: X from 340 to 440)
  if (mouseX > 340 && mouseX < 440 && mouseY > 100 && mouseY < 200) {
    if (value2 === "purple") {
      value2 = "blue";
    } else {
      value2 = "red";
    }
  }

  // --- ROW 2 (mouseY goes from 220 to 320) ---

  // Square 3 (Column 1: X from 100 to 200)
  if (mouseX > 100 && mouseX < 200 && mouseY > 220 && mouseY < 320) {
    if (value3 === "purple") {
      value3 = "blue";
    } else {
      value3 = "red";
    }
  }

  // Square 4 (Column 2: X from 220 to 320)
  if (mouseX > 220 && mouseX < 320 && mouseY > 220 && mouseY < 320) {
    if (value4 === "purple") {
      value4 = "blue";
    } else {
      value4 = "red";
    }
  }

  // Square 5 (Column 3: X from 340 to 440)
  if (mouseX > 340 && mouseX < 440 && mouseY > 220 && mouseY < 320) {
    if (value5 === "purple") {
      value5 = "blue";
    } else {
      value5 = "red";
    }
  }

  // --- ROW 3 (mouseY goes from 340 to 440) ---

  // Square 6 (Column 1: X from 100 to 200)
  if (mouseX > 100 && mouseX < 200 && mouseY > 340 && mouseY < 440) {
    if (value6 === "purple") {
      value6 = "blue";
    } else {
      value6 = "red";
    }
  }

  // Square 7 (Column 2: X from 220 to 320)
  if (mouseX > 220 && mouseX < 320 && mouseY > 340 && mouseY < 440) {
    if (value7 === "purple") {
      value7 = "blue";
    } else {
      value7 = "red";
    }
  }

  // Square 8 (Column 3: X from 340 to 440)
  if (mouseX > 340 && mouseX < 440 && mouseY > 340 && mouseY < 440) {
    if (value8 === "purple") {
      value8 = "blue";
    } else {
      value8 = "red";
    }
  }
}
