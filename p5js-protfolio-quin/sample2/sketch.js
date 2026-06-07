function setup() {
  createCanvas(600, 400);
}
  
function draw() {
  background('   #87ceeb');
  noStroke();
  fill('#8b4513');
 ellipse(300, 250, 250, 400); //toc

  
  fill('#ffe4b5');
  quad(225, 170, 375, 170, 375, 225, 225, 225); //mattren
  arc(300, 225, 150, 150, 0, PI, PIE); //matduoi
  quad(275, 275, 325, 275, 325, 325, 275, 325); //co
  arc(375, 200, 40, 50, -HALF_PI, HALF_PI, PIE); //taiphai
  arc(225, 200, 40, 50, HALF_PI, PI + HALF_PI, PIE); //taitrai
  
  fill('#fffafa');
  quad(125, 350, 100, 400, 500, 400, 450, 350); //ao
  fill('#8b4513');
  arc(325, 350, 166, 200, 0, HALF_PI); // tocduoi
  
    fill('#ffe4b5');
  quad(275,325, 325,325,325,350, 200, 350); //vai
  arc(325, 350, 250, 25, HALF_PI, PI, PIE); //vai

  
  stroke(10); //mat
  strokeWeight(3);
  fill(300);
  arc(270, 215, 40, 65, PI + QUARTER_PI/15, TWO_PI - QUARTER_PI/15);
  arc(330, 215, 40, 65, PI + QUARTER_PI/15, TWO_PI - QUARTER_PI/15);
  line(250, 214, 238, 214);
  line(350, 214, 362, 214);
  
  strokeWeight(0);
  fill(20);
  ellipse(271, 200, 23, 26);
  ellipse(329, 200, 23, 26);
  fill(300);
  ellipse(273, 198, 7);
  ellipse(327, 198, 7);
  
  stroke('#cd853f'); //mui
  strokeWeight(3);
  noFill();
  bezier(300, 220, 295, 225, 280, 230, 300, 240);
  
  stroke('   #db7093'); //moi
  arc(300, 255, 30, 30, 0, PI);
  
  strokeWeight(0);
  fill('#ffe4e1'); //phanma
  ellipse(260, 235, 30, 15);
  ellipse(340, 235, 30, 15);
  
  
  stroke(300);
  strokeWeight(15);
  point(220,230);
  point(380, 230);
  
}