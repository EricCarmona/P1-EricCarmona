let hpBar = 100;
let hungerBar = 100;
let energyBar = 100;
let happyBar = 100;

let lastTime = 0;
let isSleeping = false;

function setup() {
  let canvas = createCanvas(1000, 600);

  canvas.style('position', 'absolute');
  canvas.style('top', '50%');
  canvas.style('left', '50%');
  canvas.style('transform', 'translate(-50%, -50%)');

  let button = createButton(`hit`);
  button.position(0, 100);
  button.mousePressed(auch);

  let buttonSleep = createButton(`sleep`);
  buttonSleep.position(0, 150);
  buttonSleep.mousePressed(sleep);
}

function draw() {
  background(220);

  push();
  textSize(30);
  fill(0);
  text(int(frameRate()), 950, 40);
  pop();

  if (isSleeping) {
    push();
    textSize(24);
    fill(0, 100, 255);
    text("Zzz... Zzz...", 20, 150);
    pop();
  }

  fill("#4d4848");
  rect(20, 20, 400, 20);
  fill("#ff0000");
  rect(20, 20, hpBar * 4, 20);

  fill("#4d4848");
  rect(20, 45, 400, 20);
  fill("#815903");
  rect(20, 45, hungerBar * 4, 20);

  fill("#4d4848");
  rect(20, 70, 400, 20);
  fill("#e5ff00");
  rect(20, 70, energyBar * 4, 20);

  fill("#4d4848");
  rect(20, 95, 400, 20);
  fill("#22ff05");
  rect(20, 95, happyBar * 4, 20);

  barStatus();
  checkDead();
  fainted();
}

function barStatus() {
  if (isSleeping) {
    return;
  }

  if (second() !== lastTime) {
    lastTime = second();

    if (hungerBar > 0) {
      hungerBar -= 0.5;
    }
    if (energyBar > 0) {
      energyBar -= 1.5;
    }
    if (happyBar > 0) {
      happyBar--;
    }
  }
}

function auch() {
  if (!isSleeping) {
    hpBar -= 15;
  }
}

function sleep() {
  if (isSleeping) return;

  if (energyBar >= 20) {
    alert("You are not tired enough to sleep yet.");
    return;
  }

  isSleeping = true;
  console.log("The character has fallen asleep");

  setTimeout(function () {
    energyBar = 100;
    isSleeping = false;
    console.log("The character has woken up!");
  }, 5000);
}

function fainted() {
  if (energyBar <= 0) {
    isSleeping = true;
    hpBar -= 50;
    energyBar = 0.1;

    alert("You have fainted");

    setTimeout(function () {
      energyBar = 100;
      isSleeping = false;
      console.log("The character has woken up!");
    }, 5000);
  }
}

function checkDead() {
  let deathMessage = "";

  if (hpBar <= 0) {
    deathMessage = "You are dead";
  } else if (hungerBar <= 0) {
    deathMessage = "You died of starvation";
  } else if (happyBar <= 0) {
    deathMessage = "You died of depression";
  }

  if (deathMessage !== "") {
    alert(deathMessage);

    hpBar = 100;
    hungerBar = 100;
    happyBar = 100;
    energyBar = 100;
    isSleeping = false;
  }
}
