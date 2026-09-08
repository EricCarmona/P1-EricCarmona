function setup() {
  createCanvas(600, 409);
  /* Om te voorkomen dat ik al het werk moet herhalen of veel getallen voor elk rechthoekje moet aanpassen, heb ik 9 pixels aan de hoogte van het canvas toegevoegd. Ik hoop dat dat geen probleem is. */
}

function draw() {
  background(0);

  // White
  fill(255, 255, 255);
  rect(166,4,80,30);
  rect(248,4,80,30);
  rect(330,4,170,30);

  rect(4,36,40,115);
  rect(166,36,80,115);
  rect(330,36,84,115);
  rect(502,86,50,65);
  rect(554,36,42,115);

  rect(46,153,118,60);
  rect(46,215,118,78);
  rect(166,215,80,78);
  rect(330,153,170,60);
  rect(502,215,50,78);

  rect(330,295,100,78);
  rect(502,295,50,110);
  rect(554,295,42,78);

  rect(166,375,80,30);
  rect(248,375,80,30);

  // Red
  fill(226, 38, 31);
  rect(46,36,118,115);
  rect(554,153,42,140);
  rect(416,36,84,115);
  rect(4,375,160,30);
  rect(554,375,42,30);
  rect(248,215,80,158);

  // Blue
  fill(75, 75, 205);
  rect(166,153,80,60);
  rect(502,153,50,60);
  rect(330,215,170,78);
  rect(4,295,160,78);  
  rect(4,4,160,30);

  //Yellow
  fill(249, 245, 1);
  rect(502,4,50,80);
  rect(248,153,80,60);
  rect(166,295,80,78);
  rect(432,295,68,78);
  rect(4,153,40,140);

  //Black
  fill(0, 0, 0);
  rect(554,4,42,30);
  rect(330,375,170,30);
  rect(248,36,80,115);






}
