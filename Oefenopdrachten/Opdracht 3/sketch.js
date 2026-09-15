let score;

function setup() {
  createCanvas(400, 200);
  
  score = random(0, 100); 
  console.log("Random is: " + score);
}

function draw() {
  background(220);
  
  textAlign(CENTER, CENTER);
  textSize(24);
  
  if (score >= 90) {
    text("Uitstekend", 200, 100);
  } else if (score >= 70) {
    text("Goed gedaan!", 200, 100);
  } else if (score >= 50) {
    text("Voldoende", 200, 100);
  } else {
    text("Onvoldoende", 200, 100);
  }
}
