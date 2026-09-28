let color = ["red", "yellow", "green"];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(225)
  rect(5, 10, 50, 120);

  for (let i = 0; i < 3; i++) {
    fill(color[i]);
    circle(30, 35 * (i + 1), 30);
  }


  fill("red")
  let index = 0;
  while (index < 5) {
    rect(80 + (index * 60), 50, 50, 50);
    index++
  }
}
