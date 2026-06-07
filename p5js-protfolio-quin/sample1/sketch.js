function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(189, 233, 245);
  strokeWeight(0);
  
  fill(128, 130, 133); //nui
  triangle(100,50,275,300,-75, 300);
  fill(125,135, 133);
  triangle(250, 100, 350, 300, 150, 300);
  
  fill(124,179,66);
  rect(0, 300, 600);
  
  fill(140,198, 63);
  rect(0, 325, 600);
  
  ellipse(350, 225, 100); //caytron
  fill(124,179,66);
  ellipse(410, 225, 90, 130);
  
  strokeWeight(8); //thancay
  stroke(109,76,65);
  line(350, 275, 350, 312); 
  line(410, 290, 410, 312);
  
  strokeWeight(0); //mattroi
  fill(253, 184, 19);
  ellipse(500, 95, 80);
  strokeWeight(6);
  stroke(253, 184, 19); //mauvien
  line(430, 95, 570, 95);
  line(500, 30, 500, 90);
line(470, 150, 500, 90);
line (530, 150, 500, 90);
  
  strokeWeight(0); //caycontamgiac
  fill(100, 160, 70);
  triangle(525,225, 560, 300, 490, 300);
  triangle(-25, 300, 25, 225, 75, 300);
  triangle(150, 200, 200, 300, 100, 300);
  fill(130, 160, 80);
  triangle(480, 200, 520, 300, 440, 300);
  triangle(30, 300, 60, 240, 85, 300);
  triangle(200, 225, 230, 300, 170, 300);

  fill(241, 242, 242); //nuituyet
  triangle(100, 50, 27, 150, 80, 125);
  quad(100, 50, 80, 125, 120, 170, 153, 125);
  triangle(250, 100, 210, 180, 250, 160);
  triangle(250, 100, 250, 160, 285, 170);
  
  arc(350, 85, 50, 60, PI, TWO_PI); //may
  arc(320, 85, 40, 40, PI, TWO_PI);
  arc(380,85, 40, 40, PI, TWO_PI);
  
  strokeWeight(10);
  stroke(230);
  point(100, 350);
  point(500, 350);
  point(300, 350);
  point(200, 375);
  point(15, 375);
  point(575, 375);
  point(400, 375);
  
  saveCanvas()
}