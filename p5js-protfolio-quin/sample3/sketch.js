let eyeColor;

function setup() {
  createCanvas(600, 400);
  eyeColor = color(20);
}

function draw() {
  // nền đổi theo chuột
  if (mouseX > width / 2) {
    background('#87ceeb');
  } else {
    background('#ffd700');
  }

  noStroke();

  // tóc
  fill('#8b4513');
  ellipse(300, 250, 250, 400);

  // mặt
  fill('#ffe4b5');
  quad(225, 170, 375, 170, 375, 225, 225, 225);
  arc(300, 225, 150, 150, 0, PI, PIE);

  // cổ + tai
  quad(275, 275, 325, 275, 325, 325, 275, 325);
  arc(375, 200, 40, 50, -HALF_PI, HALF_PI, PIE);
  arc(225, 200, 40, 50, HALF_PI, PI + HALF_PI, PIE);

  // áo
  fill('#fffafa');
  quad(125, 350, 100, 400, 500, 400, 450, 350);

  // tóc dưới
  fill('#8b4513');
  arc(325, 350, 166, 200, 0, HALF_PI);

  // vai
  fill('#ffe4b5');
  quad(275,325, 325,325,325,350, 200, 350);
  arc(325, 350, 250, 25, HALF_PI, PI, PIE);

  // mắt ngoài
  stroke(10);
  strokeWeight(3);
  fill(300);
  arc(270, 215, 40, 65, PI + QUARTER_PI/15, TWO_PI - QUARTER_PI/15);
  arc(330, 215, 40, 65, PI + QUARTER_PI/15, TWO_PI - QUARTER_PI/15);
  line(250, 214, 238, 214);
  line(350, 214, 362, 214);

  // tròng mắt
  noStroke();
  fill(eyeColor);
  ellipse(271, 200, 23, 26);
  ellipse(329, 200, 23, 26);

  // con ngươi
  fill(0);
  ellipse(273, 198, 7);
  ellipse(327, 198, 7);

  // mũi
  stroke('#cd853f');
  strokeWeight(3);
  noFill();
  bezier(300, 220, 295, 225, 280, 230, 300, 240);

  // ✅ miệng thay đổi mượt theo chuột
  let mouthCurve = map(mouseX, 0, width, -20, 20);

  stroke('#db7093');
  strokeWeight(3);
  noFill();

  beginShape();
  vertex(280, 255);
  bezierVertex(
    290, 255 + mouthCurve,
    310, 255 + mouthCurve,
    320, 255
  );
  endShape();

  // má
  noStroke();
  fill('#ffe4e1');
  ellipse(260, 235, 30, 15);
  ellipse(340, 235, 30, 15);

  // highlight
  stroke(300);
  strokeWeight(15);
  point(220,230);
  point(380, 230);
}

// click đổi màu mắt
function mousePressed() {
  eyeColor = color(random(255), random(255), random(255));
}
