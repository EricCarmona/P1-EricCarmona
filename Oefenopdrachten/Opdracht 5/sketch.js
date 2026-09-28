function setup() {
  createCanvas(800, 400);


}

function draw() {
  background(220);

  push();
  fill("#0f0f0f");
  textSize(12);
  text("X: " + mouseX + "Y: " + mouseY, 720, 20);
  pop();

  // ========================================== //
  // 10 blokjes op een rij //
  // ========================================== //
  text("1. ", 20, 15);
  





  text("2. ", 20, 105);
  text("3. ", 80, 105);
  text("4. ", 80, 205);
  text("5. ", 540, 25);
  text("6. ", 350, 105);
  text("7. ", 625, 105);
}

/*// ========================================== //
1: 10 blokjes op een rij

. Teken 10 witte vierkanten op een rij, tegen elkaar aan, met een grootte van 50.
. Gebruik hiervoor een for loop.

· Zorg dat het 7e blokje blauw wordt.

Hint:
Je kan rekenen met de teller van de for loop!
// ========================================== //*/