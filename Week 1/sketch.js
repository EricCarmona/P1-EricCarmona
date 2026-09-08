function setup() {
  createCanvas(1900, 970);
}

function draw() {
  background(220);

  // Naam
  textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text('1     Eric Carmoina Castaño',50,50,);


  // Vlag Spanje en Colombia
  push();
  text('2',50,100,);
  
  // Spanje

  //red
  fill(242, 183, 0);
  rect(100,170,350,130);

  //Yellow
  fill(168, 20, 24);
  rect(100,100,350,70);
  rect(100,300,350,70);

  // Colombia

  //Yellow
  fill(247, 199, 0);
  rect(100,400,350,130);

  //Blue
  fill(0, 46, 131);
  rect(100,530,350,70);

  //Red
  fill(160, 13, 31);
  rect(100,600,350,70);
  pop();


  // Schaakbord 
  push();
  text('3',50,710,);

  // background
  rect(100,710,250,250);

  //rect black
  fill(0,0,0)
  noStroke()
  rect(100,710,83.33,83.33);
  rect(100,879,83.33,83.33);

  rect(183,795,83.33,83.33);
  
  rect(266,710,83.33,83.33);
  rect(266,879,83.33,83.33);
  pop();


  // Transparant huisje

  push();
  text('4',500,50,);
  
  noFill();
  stroke(0);
  rect(550, 180, 250, 250);

  triangle(674,50,800,180,550,180);
  pop();

  
  // Verkeerslicht
  push()

  text('5',500,500,);

  fill(150);
  noStroke()
  rect(639,650,80,300);//Botton Rect
  rect(604,490,150,400);//Top Rect

  fill(225,0,0);//Red
  circle(680, 570, 100);
  
  fill(225,153,0);//Orange
  circle(680, 690, 100);
  
  fill(0,225,0);//Green
  circle(680, 810, 100);
  pop();


  // Dobbelsteen 
  
  push();
  text('6',830,50,);

  strokeWeight(10)
  rect(890,50,250,250, 20);


  strokeWeight(70);
  point(950, 110);

  
  strokeWeight(70);
  point(1015, 180)
  
  strokeWeight(70);
  point(1080, 245)
  pop();


  // Mario
  push();
  text('7',830,350,);

  noStroke()
  rect(950,390,50,50)
  
  pop();
  
}
