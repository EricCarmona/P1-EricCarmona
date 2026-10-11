// ========================================== //
// Array of quiz questions
// ========================================== //
let monsterHunterQuiz = [
  {
    question: "Which monster variant in Monster Hunter World: Iceborne is famous for its volatile slime, trapping you in its final arena with barriers, and becoming overwhelmingly aggressive with explosive attacks when enraged?",
    options: ["A) Savage Deviljho", "B) Raging Brachydios", "C) Ruiner Nergigante", "D) Furious Rajang"],
    correctAnswerIndex: 1
  },
  {
    question: "In Monster Hunter World, which of the following weapons can store energy in phials and then unleash a series of small elemental or status explosions with its attacks?",
    options: ["A) Switch Axe", "B) Charge Blade", "C) Hunting Horn", "D) Gunlance"],
    correctAnswerIndex: 1
  },
  {
    question: "What is the name of the new, dynamic and dangerous environmental condition introduced in Monster Hunter Wilds that dramatically changes monster behavior and the map's weather?",
    options: ["A) Ashen Outbreak / Inclement Weather", "B) Constant Eruption", "C) Black Tide", "D) Abyssal Vortex"],
    correctAnswerIndex: 0
  },
  {
    question: "In Monster Hunter World: Iceborne, which new Slinger tool lets you grapple directly onto a monster's head to wound parts, drive it into walls, or collect ammo?",
    options: ["A) Clutch Claw", "B) Magnetic Hook", "C) Stake Launcher", "D) Hunting Harpoon"],
    correctAnswerIndex: 0
  },
  {
    question: "Which classic monster in the series does not attack hunters on its own and is completely peaceful at first, unless you provoke it?",
    options: ["A) Rajang", "B) Barroth", "C) Kelbi / Aptonoth", "D) Bazelgeuse"],
    correctAnswerIndex: 2
  },
  {
    question: "In Monster Hunter Wilds, what is the Seikret's main feature during exploration and hunts?",
    options: ["A) Fly freely across the entire map", "B) Carry a second equipped weapon", "C) Attack automatically", "D) Spit fire at small monsters"],
    correctAnswerIndex: 1
  },
  {
    question: "Which flagship monster in Monster Hunter World has spikes on its wings and body that turn black as they harden, forcing players to keep breaking them?",
    options: ["A) Rathalos", "B) Nergigante", "C) Velkhana", "D) Tigrex"],
    correctAnswerIndex: 1
  },
  {
    question: "In Monster Hunter World damage-per-second and speed rankings, which weapon often achieves the fastest hunt times in the hands of expert players thanks to its high cutting damage and mobility?",
    options: ["A) Light Bowgun", "B) Great Sword", "C) Switch Axe", "D) Sword and Shield"],
    correctAnswerIndex: 1
  },
  {
    question: "What is the name of the ice Elder Dragon that serves as the flagship monster of the Monster Hunter World: Iceborne expansion?",
    options: ["A) Vaal Hazak", "B) Namielle", "C) Velkhana", "D) Shara Ishvalda"],
    correctAnswerIndex: 2
  },
  {
    question: "Which flying monster in Monster Hunter World is famous for suddenly appearing in any area and dropping pineapple-shaped bombs (explosive scales) from the sky?",
    options: ["A) Rathian", "B) Bazelgeuse", "C) Legiana", "D) Paolumu"],
    correctAnswerIndex: 1
  }
];

// Globale besturingsvariabelen
let button;
let page = 0;
let score = 0; // Bewaart de eindscore van de speler

let isStartScreen = true;
let isGameActive = false;
let isEndScreen = false;

function setup() {
  createCanvas(800, 600);

  // Maak een grote startknop en plaats deze in het midden
  button = createButton('START QUIZ');
  button.position(300, 260); // Gecentreerd op het canvas van 800x600
  button.size(200, 80);      // Groot en comfortabel formaat
  button.style('background-color', '#4CAF50');
  button.style('color', '#ffffff');
  button.style('font-size', '20px');
  button.style('font-weight', 'bold');
  button.style('border-radius', '10px');
  button.mousePressed(changeScreen);
}

function draw() {
  background(220);

  if (isStartScreen == true) {
    // Startscherm
    fill(0);
    textSize(32);
    textAlign(CENTER);
    text("Monster Hunter Trivia", 400, 150);
    textSize(16);
    text("Show off your knowledge of the Hunter's Guild", 400, 200);

  } else if (isGameActive == true) {
    // Toon de actieve quiz
    displayQuestions();

  } else if (isEndScreen == true) {
    // Eindscherm
    fill(0);
    textSize(32);
    textAlign(CENTER);
    text("The Hunt Is Over!", 400, 150);
    textSize(24);
    text("Your final score: " + score + " / 10", 400, 220);
  }
}

function changeScreen() {
  if (isStartScreen == true) {
    isStartScreen = false;
    isGameActive = true;

    // Verberg de hoofdknop tijdens het spel; antwoorden worden aangeklikt
    button.hide();

  } else if (isGameActive == true) {
    isGameActive = false;
    isEndScreen = true;

    // Toon de knop op het eindscherm om opnieuw te beginnen
    button.show();
    button.position(300, 300);
    button.html("Play Again");
    button.style('background-color', '#e01212');

  } else if (isEndScreen == true) {
    // Zet het spel terug naar de beginstand
    isEndScreen = false;
    isStartScreen = true;
    page = 0;
    score = 0;

    button.position(300, 260);
    button.size(200, 80);
    button.html("START QUIZ");
    button.style('background-color', '#4CAF50');
  }
}

function displayQuestions() {
  // Stel de uitlijning van de vragen in
  textAlign(LEFT);
  fill(0);
  textSize(22);

  // Beperk de tekstbreedte zodat de vraag binnen het canvas blijft
  text(monsterHunterQuiz[page].question, 50, 50, 700, 150);

  // Basiscoördinaten voor de vier antwoordvakken
  let boxX = 50;
  let boxWidth = 700;
  let boxHeight = 60;

  // ========================================== //
  // Vak 0 (optie A) met hover-effect
  // ========================================== //
  // Controleer of de muis zich binnen het eerste vak bevindt
  if (mouseX > boxX && mouseX < boxX + boxWidth && mouseY > 220 && mouseY < 220 + boxHeight) {
    fill(180); // Donkergrijs wanneer de muis erboven staat
  } else {
    fill(255); // Standaard wit
  }
  rect(boxX, 220, boxWidth, boxHeight, 5);
  fill(0);
  textSize(16);
  text(monsterHunterQuiz[page].options[0], boxX + 20, 255);

  // ========================================== //
  // Vak 1 (optie B) met hover-effect
  // ========================================== //
  if (mouseX > boxX && mouseX < boxX + boxWidth && mouseY > 300 && mouseY < 300 + boxHeight) {
    fill(180);
  } else {
    fill(255);
  }
  rect(boxX, 300, boxWidth, boxHeight, 5);
  fill(0);
  text(monsterHunterQuiz[page].options[1], boxX + 20, 335);

  // ========================================== //
  // Vak 2 (optie C) met hover-effect
  // ========================================== //
  if (mouseX > boxX && mouseX < boxX + boxWidth && mouseY > 380 && mouseY < 380 + boxHeight) {
    fill(180);
  } else {
    fill(255);
  }
  rect(boxX, 380, boxWidth, boxHeight, 5);
  fill(0);
  text(monsterHunterQuiz[page].options[2], boxX + 20, 415);

  // ========================================== //
  // Vak 3 (optie D) met hover-effect
  // ========================================== //
  if (mouseX > boxX && mouseX < boxX + boxWidth && mouseY > 460 && mouseY < 460 + boxHeight) {
    fill(180);
  } else {
    fill(255);
  }
  rect(boxX, 460, boxWidth, boxHeight, 5);
  fill(0);
  text(monsterHunterQuiz[page].options[3], boxX + 20, 495);
}

// ========================================== //
// Detecteer klikken op de antwoordvakken
// ========================================== //
function mousePressed() {
  // Verwerk antwoorden alleen op het spelscherm
  if (isGameActive == true) {

    let boxWidth = 700;
    let boxHeight = 60;
    let selectedOption = -1; // -1 betekent dat er nog geen antwoord is gekozen

    // Controleer of vak 0 is aangeklikt
    if (mouseX > 50 && mouseX < 50 + boxWidth && mouseY > 220 && mouseY < 220 + boxHeight) {
      selectedOption = 0;
    }
    // Controleer of vak 1 is aangeklikt
    else if (mouseX > 50 && mouseX < 50 + boxWidth && mouseY > 300 && mouseY < 300 + boxHeight) {
      selectedOption = 1;
    }
    // Controleer of vak 2 is aangeklikt
    else if (mouseX > 50 && mouseX < 50 + boxWidth && mouseY > 380 && mouseY < 380 + boxHeight) {
      selectedOption = 2;
    }
    // Controleer of vak 3 is aangeklikt
    else if (mouseX > 50 && mouseX < 50 + boxWidth && mouseY > 460 && mouseY < 460 + boxHeight) {
      selectedOption = 3;
    }

    // Ga alleen verder als de speler een van de vier vakken heeft aangeklikt
    if (selectedOption != -1) {

      // Vergelijk het gekozen antwoord met de juiste index in de array
      if (selectedOption == monsterHunterQuiz[page].correctAnswerIndex) {
        score = score + 1; // Geef een punt voor een goed antwoord
      }

      // Ga door naar de volgende vraag
      page = page + 1;

      // Beëindig het spel nadat alle tien vragen zijn beantwoord
      if (page >= monsterHunterQuiz.length) {
        // Schakel over naar het eindscherm met de bestaande schermlogica
        isGameActive = false;
        isEndScreen = true;
        button.show();
        button.position(300, 300);
        button.html("Play Again");
        button.style('background-color', '#e01212');
      }
    }
  }
}
