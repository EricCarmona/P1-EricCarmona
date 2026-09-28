// Grid state values ("purple" = empty, "blue" = player 1 / X, "red" = player 2 / O)
let value0 = "purple"; let value1 = "purple"; let value2 = "purple";
let value3 = "purple"; let value4 = "purple"; let value5 = "purple";
let value6 = "purple"; let value7 = "purple"; let value8 = "purple";

// keeps track of whose turn it is and if the game already ended
let currentPlayer = "blue";
let gameOver = false;
let winnerMessage = "";

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

  // Turn / winner message
  push();
  fill(0);
  if (gameOver == true) {
    text(winnerMessage + " - click to play again", 100, 20);
  } else {
    text("Turn: " + currentPlayer, 100, 20);
  }
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
  fill(value0); vakje0();
  if (value0 === "blue") {
    stroke(255); strokeWeight(6);
    line(vakjeX + 20, vakjeY + 20, vakjeX + 80, vakjeY + 80);
    line(vakjeX + 80, vakjeY + 20, vakjeX + 20, vakjeY + 80);
  } else if (value0 === "red") {
    noFill(); stroke(255); strokeWeight(6);
    circle(vakjeX + 50, vakjeY + 50, 70);
  }
  vakjeX = vakjeX + 100 + 20;

  fill(value1); vakje1();
  if (value1 === "blue") {
    stroke(255); strokeWeight(6);
    line(vakjeX + 20, vakjeY + 20, vakjeX + 80, vakjeY + 80);
    line(vakjeX + 80, vakjeY + 20, vakjeX + 20, vakjeY + 80);
  } else if (value1 === "red") {
    noFill(); stroke(255); strokeWeight(6);
    circle(vakjeX + 50, vakjeY + 50, 70);
  }
  vakjeX = vakjeX + 100 + 20;

  fill(value2); vakje2();
  if (value2 === "blue") {
    stroke(255); strokeWeight(6);
    line(vakjeX + 20, vakjeY + 20, vakjeX + 80, vakjeY + 80);
    line(vakjeX + 80, vakjeY + 20, vakjeX + 20, vakjeY + 80);
  } else if (value2 === "red") {
    noFill(); stroke(255); strokeWeight(6);
    circle(vakjeX + 50, vakjeY + 50, 70);
  }
  vakjeX = vakjeX + 100 + 20;

  // Reset X position and move down to Row 2
  vakjeX = 100;
  vakjeY = vakjeY + 100 + 20;

  // Render Row 2
  fill(value3); vakje3();
  if (value3 === "blue") {
    stroke(255); strokeWeight(6);
    line(vakjeX + 20, vakjeY + 20, vakjeX + 80, vakjeY + 80);
    line(vakjeX + 80, vakjeY + 20, vakjeX + 20, vakjeY + 80);
  } else if (value3 === "red") {
    noFill(); stroke(255); strokeWeight(6);
    circle(vakjeX + 50, vakjeY + 50, 70);
  }
  vakjeX = vakjeX + 100 + 20;

  fill(value4); vakje4();
  if (value4 === "blue") {
    stroke(255); strokeWeight(6);
    line(vakjeX + 20, vakjeY + 20, vakjeX + 80, vakjeY + 80);
    line(vakjeX + 80, vakjeY + 20, vakjeX + 20, vakjeY + 80);
  } else if (value4 === "red") {
    noFill(); stroke(255); strokeWeight(6);
    circle(vakjeX + 50, vakjeY + 50, 70);
  }
  vakjeX = vakjeX + 100 + 20;

  fill(value5); vakje5();
  if (value5 === "blue") {
    stroke(255); strokeWeight(6);
    line(vakjeX + 20, vakjeY + 20, vakjeX + 80, vakjeY + 80);
    line(vakjeX + 80, vakjeY + 20, vakjeX + 20, vakjeY + 80);
  } else if (value5 === "red") {
    noFill(); stroke(255); strokeWeight(6);
    circle(vakjeX + 50, vakjeY + 50, 70);
  }
  vakjeX = vakjeX + 100 + 20;

  // Reset X position and move down to Row 3
  vakjeX = 100;
  vakjeY = vakjeY + 100 + 20;

  // Render Row 3
  fill(value6); vakje6();
  if (value6 === "blue") {
    stroke(255); strokeWeight(6);
    line(vakjeX + 20, vakjeY + 20, vakjeX + 80, vakjeY + 80);
    line(vakjeX + 80, vakjeY + 20, vakjeX + 20, vakjeY + 80);
  } else if (value6 === "red") {
    noFill(); stroke(255); strokeWeight(6);
    circle(vakjeX + 50, vakjeY + 50, 70);
  }
  vakjeX = vakjeX + 100 + 20;

  fill(value7); vakje7();
  if (value7 === "blue") {
    stroke(255); strokeWeight(6);
    line(vakjeX + 20, vakjeY + 20, vakjeX + 80, vakjeY + 80);
    line(vakjeX + 80, vakjeY + 20, vakjeX + 20, vakjeY + 80);
  } else if (value7 === "red") {
    noFill(); stroke(255); strokeWeight(6);
    circle(vakjeX + 50, vakjeY + 50, 70);
  }
  vakjeX = vakjeX + 100 + 20;

  fill(value8); vakje8();
  if (value8 === "blue") {
    stroke(255); strokeWeight(6);
    line(vakjeX + 20, vakjeY + 20, vakjeX + 80, vakjeY + 80);
    line(vakjeX + 80, vakjeY + 20, vakjeX + 20, vakjeY + 80);
  } else if (value8 === "red") {
    noFill(); stroke(255); strokeWeight(6);
    circle(vakjeX + 50, vakjeY + 50, 70);
  }
  vakjeX = vakjeX + 100 + 20;
  pop();

  // Draw green custom cursor
  push();
  noCursor();
  stroke(0, 255, 0);
  line(mouseX - 10, mouseY, mouseX + 10, mouseY);
  line(mouseX, mouseY - 10, mouseX, mouseY + 10);
  pop();
}

function mouseClicked() {

  // if the game already ended, this click resets the board for a new round
  if (gameOver == true) {
    value0 = "purple"; value1 = "purple"; value2 = "purple";
    value3 = "purple"; value4 = "purple"; value5 = "purple";
    value6 = "purple"; value7 = "purple"; value8 = "purple";
    gameOver = false;
    currentPlayer = "blue";
    winnerMessage = "";
    return;
  }

  // --- ROW 1 (mouseY goes from 100 to 200) ---

  // Square 0 (Column 1: X from 100 to 200)
  if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200 && value0 === "purple") {
    value0 = currentPlayer;
    if (currentPlayer === "blue") {
      currentPlayer = "red";
    } else {
      currentPlayer = "blue";
    }
  }

  // Square 1 (Column 2: X from 220 to 320)
  if (mouseX > 220 && mouseX < 320 && mouseY > 100 && mouseY < 200 && value1 === "purple") {
    value1 = currentPlayer;
    if (currentPlayer === "blue") {
      currentPlayer = "red";
    } else {
      currentPlayer = "blue";
    }
  }

  // Square 2 (Column 3: X from 340 to 440)
  if (mouseX > 340 && mouseX < 440 && mouseY > 100 && mouseY < 200 && value2 === "purple") {
    value2 = currentPlayer;
    if (currentPlayer === "blue") {
      currentPlayer = "red";
    } else {
      currentPlayer = "blue";
    }
  }

  // --- ROW 2 (mouseY goes from 220 to 320) ---

  // Square 3 (Column 1: X from 100 to 200)
  if (mouseX > 100 && mouseX < 200 && mouseY > 220 && mouseY < 320 && value3 === "purple") {
    value3 = currentPlayer;
    if (currentPlayer === "blue") {
      currentPlayer = "red";
    } else {
      currentPlayer = "blue";
    }
  }

  // Square 4 (Column 2: X from 220 to 320)
  if (mouseX > 220 && mouseX < 320 && mouseY > 220 && mouseY < 320 && value4 === "purple") {
    value4 = currentPlayer;
    if (currentPlayer === "blue") {
      currentPlayer = "red";
    } else {
      currentPlayer = "blue";
    }
  }

  // Square 5 (Column 3: X from 340 to 440)
  if (mouseX > 340 && mouseX < 440 && mouseY > 220 && mouseY < 320 && value5 === "purple") {
    value5 = currentPlayer;
    if (currentPlayer === "blue") {
      currentPlayer = "red";
    } else {
      currentPlayer = "blue";
    }
  }

  // --- ROW 3 (mouseY goes from 340 to 440) ---

  // Square 6 (Column 1: X from 100 to 200)
  if (mouseX > 100 && mouseX < 200 && mouseY > 340 && mouseY < 440 && value6 === "purple") {
    value6 = currentPlayer;
    if (currentPlayer === "blue") {
      currentPlayer = "red";
    } else {
      currentPlayer = "blue";
    }
  }

  // Square 7 (Column 2: X from 220 to 320)
  if (mouseX > 220 && mouseX < 320 && mouseY > 340 && mouseY < 440 && value7 === "purple") {
    value7 = currentPlayer;
    if (currentPlayer === "blue") {
      currentPlayer = "red";
    } else {
      currentPlayer = "blue";
    }
  }

  // Square 8 (Column 3: X from 340 to 440)
  if (mouseX > 340 && mouseX < 440 && mouseY > 340 && mouseY < 440 && value8 === "purple") {
    value8 = currentPlayer;
    if (currentPlayer === "blue") {
      currentPlayer = "red";
    } else {
      currentPlayer = "blue";
    }
  }

  // check every possible line of 3 (rows, columns, diagonals)
  if (value0 !== "purple" && value0 === value1 && value1 === value2) {
    gameOver = true;
    if (value0 === "blue") {
      winnerMessage = "Player 1 (Blue/X) wins!";
    } else {
      winnerMessage = "Player 2 (Red/O) wins!";
    }
  } else if (value3 !== "purple" && value3 === value4 && value4 === value5) {
    gameOver = true;
    if (value3 === "blue") {
      winnerMessage = "Player 1 (Blue/X) wins!";
    } else {
      winnerMessage = "Player 2 (Red/O) wins!";
    }
  } else if (value6 !== "purple" && value6 === value7 && value7 === value8) {
    gameOver = true;
    if (value6 === "blue") {
      winnerMessage = "Player 1 (Blue/X) wins!";
    } else {
      winnerMessage = "Player 2 (Red/O) wins!";
    }
  } else if (value0 !== "purple" && value0 === value3 && value3 === value6) {
    gameOver = true;
    if (value0 === "blue") {
      winnerMessage = "Player 1 (Blue/X) wins!";
    } else {
      winnerMessage = "Player 2 (Red/O) wins!";
    }
  } else if (value1 !== "purple" && value1 === value4 && value4 === value7) {
    gameOver = true;
    if (value1 === "blue") {
      winnerMessage = "Player 1 (Blue/X) wins!";
    } else {
      winnerMessage = "Player 2 (Red/O) wins!";
    }
  } else if (value2 !== "purple" && value2 === value5 && value5 === value8) {
    gameOver = true;
    if (value2 === "blue") {
      winnerMessage = "Player 1 (Blue/X) wins!";
    } else {
      winnerMessage = "Player 2 (Red/O) wins!";
    }
  } else if (value0 !== "purple" && value0 === value4 && value4 === value8) {
    gameOver = true;
    if (value0 === "blue") {
      winnerMessage = "Player 1 (Blue/X) wins!";
    } else {
      winnerMessage = "Player 2 (Red/O) wins!";
    }
  } else if (value2 !== "purple" && value2 === value4 && value4 === value6) {
    gameOver = true;
    if (value2 === "blue") {
      winnerMessage = "Player 1 (Blue/X) wins!";
    } else {
      winnerMessage = "Player 2 (Red/O) wins!";
    }
  }

  // if nobody won and every square is filled, its a tie: just clear the board and keep playing
  if (gameOver == false) {
    if (value0 != "purple" && value1 != "purple" && value2 != "purple" && value3 != "purple" && value4 != "purple" && value5 != "purple" && value6 != "purple" && value7 != "purple" && value8 != "purple") {
      value0 = "purple"; value1 = "purple"; value2 = "purple";
      value3 = "purple"; value4 = "purple"; value5 = "purple";
      value6 = "purple"; value7 = "purple"; value8 = "purple";
    }
  }
}
