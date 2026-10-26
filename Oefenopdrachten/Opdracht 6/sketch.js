let numerRandom = [];
let total = 0;

function setup() {
  createCanvas(380, 350);

  // Genereert de waarden slechts één keer, wanneer de pagina wordt geladen.
  for (let i = 0; i < 12; i++) {
    let num = round(random(0, 100));
    numerRandom.push(num);
    total += num;
  }
}

function draw() {
  background(220);
  // ========================================== //
  // Arrays //
  // ========================================== //
  let colors = ["red", "green", "blue", "purple", "yellow"];
  let nummers = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300];
  let sum1 = [3, 55, 93, 20, 102, 6];
  let sum2 = [14, 22, 80, 5];

  push();
  textSize(8);
  textStyle(BOLD);
  text(`X: ${int(mouseX)} Y: ${int(mouseY)}`, 320, 15)
  pop();

  // ========================================== //
  // 1: Kleuren in een array //
  // ========================================== //
  push();
  fill(0);
  textSize(12);
  text(`1. `, 20, 15);

  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    textStyle(BOLD);
    textSize(10);
    text(colors[i], 35, 15 * i + 15);
  };
  pop();


  // ========================================== //
  // 2: Pas de array aan met pop //
  // ========================================== //
  push();
  fill(0);
  textSize(12);
  text(`2. `, 20, 100);

  colors.shift();
  colors.push("red");

  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    textStyle(BOLD);
    textSize(10);
    text(colors[i], 35, 15 * i + 100);
  };
  pop();


  // ========================================== //
  // 3: Twee kleuren weghalen //
  // ========================================== //
  push();
  fill(0);
  textSize(12);
  text(`3. `, 20, 190);

  colors.splice(1, 2);

  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    textStyle(BOLD);
    textSize(10);
    text(colors[i], 35, 15 * i + 190);
  };
  pop();


  // ========================================== //
  // 4: Getallen filteren //
  // ========================================== //
  push();
  fill(0);
  textSize(12);
  text(`4. `, 20, 250);

  let nummerfilter = [];

  for (let i = 0; i < nummers.length; i++) {
    if (nummers[i] < 300) {
      nummerfilter.push(nummers[i])
    }
  }

  for (let i = 0; i < nummerfilter.length; i++) {
    textStyle(BOLD);
    textSize(10);
    text(nummerfilter[i], 35, 15 * i + 250);
  }
  pop();


  // ========================================== //
  //5: Meerdere arrays optellen bij elkaar //
  // ========================================== //
  push();
  fill(0);
  textSize(12);
  text(`5. `, 120, 15);

  let total = 0;

  for (let i = 0; i < sum1.length; i++) {
    total += sum1[i];
  }
  for (let i = 0; i < sum2.length; i++) {
    total += sum2[i];
  }

  textStyle(BOLD);
  textSize(40);
  text(total, 140, 65);
  pop();


  // ========================================== //
  // 6: Letters tellen //
  // ========================================== //
  push();
  fill(0);
  textSize(12);
  text(`6. `, 120, 100);

  let word = "Overheidsfinancieringstekort";
  let letterFilter = "e";
  let counter = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === letterFilter) {
      counter++;
    }
  }

  textStyle(BOLD);
  textSize(40);
  text(`${counter}x`, 150, 150);
  pop();


  // ========================================== //
  // 7: Alfabetische volgorde //
  // ========================================== //
  push();
  fill(0);
  textSize(12);
  text(`7. `, 120, 190);

  colors.push("blue", "purple");
  colors.sort();

  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    textStyle(BOLD);
    textSize(10);
    text(colors[i], 135, 15 * i + 190);
  };
  pop();


  // ========================================== //
  // 8: Random kleuren op een rij //
  // ========================================== //
  push();
  fill(0);
  textSize(12);
  text(`8. `, 120, 280);
  let colorsRect = [
    "#5259ad",
    "#f9d28e",
    "#f54497",
    "#31f4d2",
    "#9a9cf4"
  ];

  for (let i = 0; i < 5; i++) {
    fill(colorsRect[i]);
    rect(140 + i * 30, 275, 30, 30);
  }
  pop();


  // ========================================== //
  // 9: Random getallen en hun gemiddelde //
  // ========================================== //
  push();
  fill(0);
  textSize(12);
  text(`9.`, 240, 15);

  // Toon de getallen onder elkaar.
  for (let i = 0; i < numerRandom.length; i++) {
    text(numerRandom[i], 255, 15 + i * 16);
  }

  // Toon het totaal en het gemiddelde van de afgeronde getallen.
  let averageRandom = round(total / numerRandom.length);
  text(`Totaal: ${total}`, 255, 230);
  text(`Gemiddelde: ${averageRandom}`, 255, 250);
  pop();
}