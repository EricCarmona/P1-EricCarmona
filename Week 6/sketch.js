// The player can earn coins by playing minigames.
let wallet = 100;

let cures = [
  { name: "Bandages", points: 15, price: 20 },
  { name: "Wraps", points: 25, price: 50 },
  { name: "Potion", points: 50, price: 80 },
  { name: "First aid kit", points: 100, price: 180 },
];

let foods = [
  { name: "Apple", points: 10, price: 20 },
  { name: "Bread", points: 25, price: 50 },
  { name: "Cake", points: 100, price: 150 },
  { name: "Energy drink", health: -5, energy: 30, price: 50 }

];

let bars = {
  hpBar: 100,
  hungerBar: 100,
  energyBar: 30,
  happyBar: 100
};

let lastTime = 0;
let isSleeping = false;
let screen = "menu";
let buttons = {};
let canvasContainer;
let projectiles = [];
let playerX = 500;
let playerY = 520;
let dodgedShips = 0;
let targetX = 500;
let targetY = 350;
let clickCount = 0;
let clickStartTime = 0;
let extraLives = 0;
let konamiProgress = 0;
let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

let dogImage;
let livingRoomImage;
let kitchenImage;
let bedroomDayImage;
let bedroomNightImage;
let clinicImage;
let minigamesBackgroundImage;
let targetBackgroundImage;
let spaceBackgroundImage;
let alienDogsImage;
let sniperDogImage;
let chefDogImage;
let doctorImage;
let angryDogImage;
let hungryDogImage;
let tiredDogImage;
let sadDogImage;
let goodbyeDogImage;
let sleepingDogImage;
let pettingGif;
let pettingTimer;

// ========================================== //
// LOAD IMAGES
// ========================================== //

/*
  Function preload:

  - Loads images before the game starts.
  - Stores each file in a variable for later use.
*/
function preload() {
  dogImage = loadImage("assets/perrito.png");
  livingRoomImage = loadImage("assets/zonas/sala.png");
  kitchenImage = loadImage("assets/zonas/cocina.png");
  bedroomDayImage = loadImage("assets/zonas/dormitorioDia.jpg");
  bedroomNightImage = loadImage("assets/zonas/dormitorioNoche.png");
  clinicImage = loadImage("assets/zonas/medico.jpg");
  minigamesBackgroundImage = loadImage("assets/zonas/minijuegos/minijuegos.jpg");
  targetBackgroundImage = loadImage("assets/zonas/minijuegos/tiroAlblanco.png");
  spaceBackgroundImage = loadImage("assets/zonas/minijuegos/espacio.jpg");
  alienDogsImage = loadImage("assets/zonas/minijuegos/perritosAliens.png");
  sniperDogImage = loadImage("assets/zonas/minijuegos/sniperPerro.png");
  chefDogImage = loadImage("assets/perroCocinero.png");
  doctorImage = loadImage("assets/estados/doctor.png");
  angryDogImage = loadImage("assets/estados/enojado.png");
  hungryDogImage = loadImage("assets/estados/alimentame.jpg");
  tiredDogImage = loadImage("assets/estados/cansado.png");
  sadDogImage = loadImage("assets/estados/trsite.png");
  goodbyeDogImage = loadImage("assets/estados/perritoAdios.png");
  sleepingDogImage = loadImage("assets/estados/aMimi.png");
}

// ========================================== //
// GAME SETUP AND BUTTONS
// ========================================== //

/*
  Function setup:

  - Creates the canvas and its container.
  - Prepares the GIF and creates the buttons for each area.
*/
function setup() {
  // ========================================== //
  // CANVAS CONTAINER
  // ========================================== //

  /*
    - createDiv creates an HTML container for the game elements.
    - class connects the container to its styles in style.css.
    - parent places the canvas inside the container.
  */
  canvasContainer = createDiv();
  canvasContainer.class("game-container");
  createCanvas(1000, 600).parent(canvasContainer);

  let savedGame = getItem("gameState");
  if (savedGame !== null) {
    wallet = savedGame.wallet;
    bars.hpBar = savedGame.hpBar;
    bars.hungerBar = savedGame.hungerBar;
    bars.energyBar = savedGame.energyBar;
    bars.happyBar = savedGame.happyBar;
    extraLives = savedGame.extraLives;
  }

  pettingGif = createImg("assets/acariziando.gif", "Dog being petted");
  pettingGif.parent(canvasContainer);
  pettingGif.position(390, 190);
  pettingGif.size(220, 220);
  pettingGif.hide();

  buttons.kitchen = makeGameButton("Kitchen", 20, 170, function () {
    changeScreen("kitchen");
  });
  buttons.clinic = makeGameButton("Clinic", 20, 210, function () {
    changeScreen("clinic");
  });
  buttons.pet = makeGameButton("Pet", 20, 250, petDog);
  buttons.bedroom = makeGameButton("Bedroom", 20, 290, function () {
    changeScreen("bedroom");
  });
  buttons.minigames = makeGameButton("Minigames", 20, 330, function () {
    changeScreen("minigames");
  });
  buttons.menu = makeGameButton("Back to menu", 20, 170, function () {
    changeScreen("menu");
  });
  buttons.sleep = makeGameButton("Sleep", 20, 210, sleepDog);
  buttons.dodge = makeGameButton("Dodge ships (-25 energy, -30 hunger)", 20, 210, startDodgeGame);
  buttons.target = makeGameButton("Shoot targets (-15 energy, -5 hunger)", 20, 250, startTargetGame);

  buttons.apple = makeGameButton("Apple +10 hunger -20 $", 20, 210, function () {
    feedPet(foods[0]);
  });
  buttons.bread = makeGameButton("Bread +25 hunger -50 $", 20, 250, function () {
    feedPet(foods[1]);
  });
  buttons.cake = makeGameButton("Cake +100 hunger -150 $", 20, 290, function () {
    feedPet(foods[2]);
  });
  buttons.energyDrink = makeGameButton("Energy drink -5 health +30 energy -50 $", 20, 330, function () {
    feedPet(foods[3]);
  });
  buttons.bandages = makeGameButton("Bandages +15 health -20 $", 20, 210, function () {
    healPet(cures[0]);
  });
  buttons.wraps = makeGameButton("Wraps +25 health -50 $", 20, 250, function () {
    healPet(cures[1]);
  });
  buttons.potion = makeGameButton("Potion +50 health -80 $", 20, 290, function () {
    healPet(cures[2]);
  });
  buttons.firstAidKit = makeGameButton("First aid kit +100 health -180 $", 20, 330, function () {
    healPet(cures[3]);
  });

  updateButtons();
}

/*
  Function makeGameButton:

  - Receives the button text, position, and action.
  - Places the button inside the canvas container.
*/
function makeGameButton(text, x, y, action) {
  let button = createButton(text);
  button.parent(canvasContainer);
  button.position(x, y);
  button.mousePressed(action);
  return button;
}

/*
  Function changeScreen:

  - Changes the visible area.
  - Hides the GIF and updates the buttons.
*/
function changeScreen(name) {
  if (isSleeping) return;
  if (screen === "death") return;

  clearTimeout(pettingTimer);
  pettingGif.hide();
  screen = name;
  updateButtons();
}

/*
  Function updateButtons:

  - Hides every button first.
  - Shows only the buttons for the current area.
*/
function updateButtons() {
  let buttonList = [
    buttons.kitchen, buttons.clinic, buttons.pet, buttons.bedroom,
    buttons.minigames, buttons.menu, buttons.sleep, buttons.dodge,
    buttons.target, buttons.apple, buttons.bread, buttons.cake,
    buttons.energyDrink, buttons.bandages, buttons.wraps, buttons.potion,
    buttons.firstAidKit
  ];

  for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].hide();
  }

  if (screen === "death") return;
  if (isSleeping) return;

  if (screen === "menu") {
    buttons.kitchen.show();
    buttons.clinic.show();
    buttons.pet.show();
    buttons.bedroom.show();
    buttons.minigames.show();
  } else {
    buttons.menu.show();

    if (screen === "kitchen") {
      buttons.apple.show();
      buttons.bread.show();
      buttons.cake.show();
      buttons.energyDrink.show();
    } else if (screen === "clinic") {
      buttons.bandages.show();
      buttons.wraps.show();
      buttons.potion.show();
      buttons.firstAidKit.show();
    } else if (screen === "bedroom") {
      buttons.sleep.show();
    } else if (screen === "minigames") {
      buttons.dodge.show();
      buttons.target.show();
    }
  }
}

// ========================================== //
// DRAW SCREENS AND STATUS BARS
// ========================================== //

/*
  Function draw:

  - Draws the background and elements for the active screen.
  - Updates the status bars, wallet, and death screen.
*/
function draw() {
  storeItem("gameState", {
    wallet: wallet,
    hpBar: bars.hpBar,
    hungerBar: bars.hungerBar,
    energyBar: bars.energyBar,
    happyBar: bars.happyBar,
    extraLives: extraLives
  });

  if (screen === "death") {
    drawDeath();
    return;
  }

  if (screen === "menu") {
    drawBackground(livingRoomImage);
    drawDog(dogImage);
  } else if (screen === "kitchen") {
    drawBackground(kitchenImage);
    drawDog(chefDogImage);
  } else if (screen === "clinic") {
    drawBackground(clinicImage);
    imageMode(CORNER);
    image(doctorImage, 180, 180, 190, 286);
    drawDog(dogImage);
  } else if (screen === "bedroom") {
    drawBackground(isSleeping ? bedroomNightImage : bedroomDayImage);
    drawDog(dogImage);
  } else if (screen === "minigames") {
    drawBackground(minigamesBackgroundImage);
  } else if (screen === "dodge") {
    drawBackground(spaceBackgroundImage);
    drawDodgeGame();
  } else if (screen === "target") {
    drawBackground(targetBackgroundImage);
    drawTargetGame();
  }

  // Status bars
  drawBar(20, "#ff0000", bars.hpBar, "Health");
  if (extraLives > 0) {
    fill(0);
    textSize(16);
    text("+1 life", 455, 27);
  }
  drawBar(45, "#815903", bars.hungerBar, "Hunger");
  drawBar(70, "#e5ff00", bars.energyBar, "Energy");
  drawBar(95, "#22ff05", bars.happyBar, "Happiness");

  // Wallet
  fill(0);
  textSize(30);
  text(wallet + "$", 800, 40);

  if (isSleeping) {
    fill(30, 70, 160);
    textSize(24);
    text("Zzz... sleeping", 400, 180);
  }

  if (screen !== "dodge" && screen !== "target") {
    updateNeeds();
  }
  checkDeath();
}

/*
  Function drawBar:

  - Draws the background and current value of a bar.
  - Adds a label to identify it.
*/
function drawBar(y, color, value, label) {
  fill("#4d4848");
  rect(20, y, 400, 20);
  fill(color);
  rect(20, y, max(0, value) * 4, 20);
  push();
  textAlign(CENTER, CENTER);
  textSize(12);
  stroke(35);
  strokeWeight(2);
  fill(255);
  text(label, 220, y + 10);
  pop();
}

/*
  Function drawDog:

  - Uses the sleeping image or an image for a low need when needed.
  - Otherwise, shows the normal image for the current area.
*/
function drawDog(baseImage) {
  let currentImage = baseImage;

  if (isSleeping) {
    currentImage = sleepingDogImage;
  } else if (bars.hpBar <= 50) {
    currentImage = angryDogImage;
  } else if (bars.hungerBar <= 50) {
    currentImage = hungryDogImage;
  } else if (bars.energyBar <= 50) {
    currentImage = tiredDogImage;
  } else if (bars.happyBar <= 50) {
    currentImage = sadDogImage;
  }

  drawScaledImage(currentImage, width / 2, height / 2, 220, 200);
}

/*
  Function drawDeath:

  - Shows the goodbye image and final message.
*/
function drawDeath() {
  background("#171717");
  drawScaledImage(goodbyeDogImage, width / 2, height / 2 - 25, 360, 360);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(36);
  text("Goodbye", width / 2, height - 45);
}

// Draws an image centered and scaled without changing its proportions.
function drawScaledImage(imageToDraw, x, y, maxWidth, maxHeight) {
  let scale = min(maxWidth / imageToDraw.width, maxHeight / imageToDraw.height);
  imageMode(CENTER);
  image(imageToDraw, x, y, imageToDraw.width * scale, imageToDraw.height * scale);
}

/*
  Function drawBackground:

  - Fits an image to the canvas without stretching it.
  - Crops the excess to cover the full screen.
*/
function drawBackground(backgroundImage) {
  let scale = max(width / backgroundImage.width, height / backgroundImage.height);
  let visibleWidth = width / scale;
  let visibleHeight = height / scale;
  imageMode(CORNER);
  image(
    backgroundImage,
    0, 0, width, height,
    (backgroundImage.width - visibleWidth) / 2,
    (backgroundImage.height - visibleHeight) / 2,
    visibleWidth,
    visibleHeight
  );
}

// ========================================== //
// DODGE MINIGAME
// ========================================== //

/*
  Function startDodgeGame:

  - Checks that enough energy and hunger are available.
  - Resets the projectiles and places the player at the start.
*/
function startDodgeGame() {
  if (isSleeping) return;

  if (bars.energyBar < 25 || bars.hungerBar < 30) {
    alert("You need 25 energy and 30 hunger to play.");
    return;
  }

  bars.energyBar -= 25;
  bars.hungerBar -= 30;
  projectiles = [];
  dodgedShips = 0;
  playerX = 600;
  playerY = 520;
  changeScreen("dodge");
}

/*
  Function drawDodgeGame:

  - Moves the player with WASD or the arrow keys.
  - Creates and moves the falling projectiles.
  - Checks whether a projectile hits the player.
*/
function drawDodgeGame() {
  fill(200);
  textSize(18);
  text("Dodged: " + dodgedShips, 700, 210);

  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) playerX -= 5;
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) playerX += 5;

  playerX = constrain(playerX, 260, 960);
  playerY = constrain(playerY, 230, 565);

  if (frameCount % 5 === 0) {
    projectiles.push({
      x: random(280, 950),
      y: 210,
      speed: random(3, 6)
    });
  }

  imageMode(CENTER);
  image(dogImage, playerX, playerY, 60, 54);

  for (let i = projectiles.length - 1; i >= 0; i--) {
    projectiles[i].y += projectiles[i].speed;
    image(alienDogsImage, projectiles[i].x, projectiles[i].y, 60, 30);

    if (dist(playerX, playerY, projectiles[i].x, projectiles[i].y) < 32) {
      wallet += dodgedShips;
      alert("A ship hit you. You dodged " + dodgedShips + " and earned " + dodgedShips + " $.");
      changeScreen("minigames");
      return;
    }

    if (projectiles[i].y > height) {
      projectiles.splice(i, 1);
      dodgedShips++;
    }
  }
}

// ========================================== //
// SECRET CODE
// ========================================== //

/*
  Function keyPressed:

  - Checks each key against the code sequence.
  - Grants an extra life when the sequence is complete.
*/
function keyPressed() {
  if (isSleeping) return;

  if (keyCode === konamiCode[konamiProgress]) {
    konamiProgress++;

    if (konamiProgress === konamiCode.length) {
      extraLives = 1;
      konamiProgress = 0;
      alert("Konami code! You earned +1 life.");
    }
  } else if (keyCode === konamiCode[0]) {
    konamiProgress = 1;
  } else {
    konamiProgress = 0;
  }
}

// ========================================== //
// TARGET MINIGAME
// ========================================== //

/*
  Function startTargetGame:

  - Checks that enough energy and hunger are available.
  - Resets the score and places the first target.
*/
function startTargetGame() {
  if (isSleeping) return;

  if (bars.energyBar < 15 || bars.hungerBar < 5) {
    alert("You need 15 energy and 5 hunger to play.");
    return;
  }

  bars.energyBar -= 15;
  bars.hungerBar -= 5;
  clickCount = 0;
  clickStartTime = millis();
  targetX = random(450, 900);
  targetY = random(250, 540);
  changeScreen("target");
}

/*
  Function drawTargetGame:

  - Shows the time, score, and target.
  - Adds the score to the wallet when time runs out.
*/
function drawTargetGame() {
  let secondsLeft = 30 - floor((millis() - clickStartTime) / 1000);
  fill(30);
  textSize(22);
  text("Time: " + max(0, secondsLeft) + "   Hits: " + clickCount, 750, 120);

  imageMode(CORNER);
  image(sniperDogImage, 24, 250, 130 * 2, 98 * 2);

  fill("#f31212");
  ellipse(targetX, targetY, 55, 55);

  if (secondsLeft <= 0) {
    wallet += clickCount;
    alert("Time is up! You hit " + clickCount + " targets and earned " + clickCount + " $.");
    changeScreen("minigames");
  }
}

/*
  Function mousePressed:

  - Checks whether the click lands on the target.
  - Adds a point and moves the target when hit.
*/
function mousePressed() {
  if (isSleeping) return;

  if (screen === "target") {
    if (dist(mouseX, mouseY, targetX, targetY) < 28) {
      clickCount++;
      targetX = random(450, 900);
      targetY = random(250, 540);
    }
  }
}


// ========================================== //
// NEEDS AND HUNGER
// ========================================== //

/*
  Function updateNeeds:

  - Reduces hunger, energy, and happiness once per second.
  - Causes fainting when energy reaches zero.
*/
function updateNeeds() {
  if (isSleeping) {
    return;
  }

  if (second() !== lastTime) {
    lastTime = second();

    if (bars.hungerBar > 0) {
      bars.hungerBar -= 0.5;
    }
    if (bars.energyBar > 0) {
      bars.energyBar -= 1.5;
    }
    if (bars.happyBar > 0) {
      bars.happyBar--;
    }
  }

  handleHunger();
  if (bars.energyBar <= 0) {
    faintDog();
  }
}

/*
  Function handleHunger:

  - Removes health when hunger reaches zero.
  - Adds 5 hunger points to give time to recover it.
*/
function handleHunger() {
  if (bars.hungerBar <= 0) {
    bars.hpBar = Math.max(0, bars.hpBar - 35);
    bars.hungerBar += 5;
  }
}

// ========================================== //
// DEATH AND RESTART
// ========================================== //

/*
  Function checkDeath:

  - Uses an extra life if the player has one.
  - Otherwise, shows the goodbye screen and resets the bars.
*/
function checkDeath() {
  if (bars.hpBar > 0 || screen === "death") return;

  if (extraLives > 0) {
    extraLives--;
    bars.hpBar = 100;
    alert("You used your extra life. Keep playing!");
    return;
  }

  screen = "death";
  updateButtons();

  setTimeout(function () {
    wallet = 100;
    bars.hpBar = 100;
    bars.hungerBar = 100;
    bars.energyBar = 100;
    bars.happyBar = 100;
    isSleeping = false;
    projectiles = [];
    screen = "menu";
    updateButtons();
  }, 3500);
}


// ========================================== //
// FOOD AND CARE
// ========================================== //

/*
  Function feedPet:

  - Checks happiness and coins before the purchase.
  - Applies food effects and keeps bars at or below 100.
*/
function feedPet(food) {
  if (isSleeping) return;

  if (bars.happyBar < 25) {
    alert("The dog is too sad to eat. Pet it to cheer it up.");
    return;
  }

  if (wallet < food.price) {
    alert(`You do not have enough money to buy ${food.name}.`);
    return;
  }

  wallet -= food.price;

  if (food.points) {
    bars.hungerBar = Math.min(100, bars.hungerBar + food.points);
  }
  if (food.health) {
    bars.hpBar = Math.max(0, Math.min(100, bars.hpBar + food.health));
  }
  if (food.energy) {
    bars.energyBar = Math.min(100, bars.energyBar + food.energy);
  }
  if (food.happiness) {
    bars.happyBar = Math.min(100, bars.happyBar + food.happiness);
  }
}


// ========================================== //
// HEALING
// ========================================== //

/*
  Function healPet:

  - Checks whether the cure is affordable.
  - Charges the price and restores health up to 100.
*/
function healPet(cure) {
  if (isSleeping) return;

  if (wallet < cure.price) {
    alert(`You do not have enough money to buy ${cure.name}.`);
    return;
  }

  wallet -= cure.price;
  bars.hpBar = Math.min(100, bars.hpBar + cure.points);
}

// ========================================== //
// PETTING
// ========================================== //

/*
  Function petDog:

  - Increases the dog's happiness.
  - Shows the GIF briefly.
*/
function petDog() {
  if (isSleeping) return;

  bars.happyBar = Math.min(100, bars.happyBar + 5);
  clearTimeout(pettingTimer);
  pettingGif.show();
  pettingTimer = setTimeout(function () {
    pettingGif.hide();
  }, 500);
}

// ========================================== //
// SLEEP AND FAINTING
// ========================================== //

/*
  Function sleepDog:

  - Allows sleep only when energy is low.
  - Restores energy and health after a few seconds.
*/
function sleepDog() {
  if (isSleeping) return;

  if (bars.energyBar >= 20) {
    alert("The dog is not tired enough to sleep yet.");
    return;
  }
  isSleeping = true;
  updateButtons();

  setTimeout(function () {
    bars.energyBar = 100;
    bars.hpBar = 100;
    isSleeping = false;
    lastTime = millis();
    updateButtons();
  }, 5000);
}

/*
  Function faintDog:

  - Reduces health and sets energy close to zero.
  - Restores energy after a few seconds.
*/
function faintDog() {
  if (isSleeping) return;

  isSleeping = true;
  bars.hpBar = Math.max(0, bars.hpBar - 50);
  bars.energyBar = 0.1;
  updateButtons();
  alert("The dog fainted.");

  setTimeout(function () {
    bars.energyBar = 100;
    isSleeping = false;
    lastTime = millis();
    updateButtons();
  }, 5000);
}
