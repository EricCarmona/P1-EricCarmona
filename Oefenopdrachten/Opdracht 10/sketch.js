let kleuren = ["red", "green", "blue", "orange", "purple", "yellow"];
let bestanden = ["elephant", "giraffe", "hippo", "monkey", "panda", "parrot", "penguin", "pig", "rabbit", "snake"];

let afbeeldingen = [];
let img;

let button = [];
let backGr = kleuren[0];

let hideButoom = null;

function preload() {
  for (let i = 0; i < kleuren.length; i++) {
    afbeeldingen[i] = loadImage("./assets/" + bestanden[i] + ".png");
  }
}

function setup() {
  createCanvas(800, 400);

  img = afbeeldingen[0];

  for (let i = 0; i < kleuren.length; i++) {
    button[i] = createButton('Klik mij ' + i);
    button[i].position(100 * i + 125, 350);
    button[i].style('background-color', kleuren[i]);
    button[i].style('font-size', '20px');

    button[i].img = i;

    button[i].mousePressed(mijnFunctie);
  }
}

function draw() {
  background(backGr);

  push();
  imageMode(CENTER);
  image(img, width / 2, height / 2 - 40);
  pop();
}

function mijnFunctie() {
  backGr = this.style("background-color");
  img = afbeeldingen[this.img];
  
  this.hide()

  if (hideButoom != null) [
    hideButoom.show()
  ]

  hideButoom = this;
}
