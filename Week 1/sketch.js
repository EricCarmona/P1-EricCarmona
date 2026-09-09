function setup() {
  createCanvas(1900, 2000);
}

function draw() {
  background(220);

  //Lo de las cordenadas es sencillo, pero lo del crosshair debo investigar mas.
  // Mouse coordinates
  fill(0);
  textSize(50);
  text("X: " + mouseX + " Y: " + mouseY, 1500, 40);

  // Crosshair
  stroke(255, 0, 0);
  line(mouseX - 10, mouseY, mouseX + 10, mouseY);
  line(mouseX, mouseY - 10, mouseX, mouseY + 10);


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
  push();

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

  strokeWeight(10);
  rect(890,50,250,250, 20);

  strokeWeight(70);
  point(950, 110);
  
  strokeWeight(70);
  point(1015, 180);
  
  strokeWeight(70);
  point(1080, 245);
  pop();


  // Mario
  push();
  text('7',830,350,);

  noStroke()
  // Red
  fill(255, 1, 0)
  rect(1150,390,350,50);
  rect(1100,740,100,50);
  rect(1250,740,250,50);
  rect(1100,440,550,50);
  rect(1050,790,150,50);
  rect(1250,790,150,50);
  rect(1450,790,150,50);
  rect(1450,840,200,50);
  rect(1100,890,50,50);
  rect(1500,890,50,50);
  rect(1000,840,200,50);

  // Brownn
  fill(152, 64, 57)
  rect(1100,490,150,50);
  rect(1050,540,50,50);
  rect(1150,540,50,50);
  rect(1050,590,50,50);
  rect(1050,640,100,50);
  rect(1150,590,100,50);
  rect(1050,1090,150,50);
  rect(1450,1090,150,50);
  rect(1000,1140,200,50);
  rect(1450,1140,200,50);

  // Skin tone
  fill(255, 200, 159)
  rect(1250,490,200,50);
  rect(1100,540,50,50);
  rect(1200,540,250,50);
  rect(1500,540,150,50);
  rect(1250,590,250,50);
  rect(1550,590,150,50);
  rect(1150,640,300,50);
  rect(1150,690,450,50);
  rect(1100,590,50,50);
  rect(1000,890,100,50);
  rect(1550,890,100,50);
  rect(1000,940,150,50);
  rect(1500,940,150,50);
  rect(1000,990,100,50);
  rect(1550,990,100,50);

  // Blue
  fill(0, 0, 255)
  rect(1200,740,50,50);
  rect(1200,790,50,50);
  rect(1400,790,50,50);
  rect(1150,890,50,50);
  rect(1200,840,250,50);
  rect(1450,890,50,50);
  rect(1150,940,350,50);
  rect(1100,990,450,50);
  rect(1100,1040,150,50);
  rect(1400,1040,150,50);
  rect(1250,890,150,50);

  // Yellow
  fill(255, 255, 2)
  rect(1400,890,50,50);
  rect(1200,890,50,50);

  // Darck
  fill(0, 0, 0)
  rect(1450,490,50,50);
  rect(1500,590,50,50);
  rect(1450,640,200,50);
  rect(1450,540,50,50);
  pop();
  
}
