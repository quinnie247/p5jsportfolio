let sunColorStart, sunColorEnd;
let treeColorStart, treeColorEnd;

function setup() {
  createCanvas(600, 400); // Khởi tạo canvas phù hợp với tọa độ tranh
  
  // Thiết lập màu sắc để làm hiệu ứng đổi màu bằng lerpColor
  sunColorStart = color(253, 184, 19);   // Vàng mặt trời
  sunColorEnd = color(255, 80, 0);       // Cam hoàng hôn
  
  treeColorStart = color(100, 160, 70);  // Xanh lá tươi
  treeColorEnd = color(60, 120, 50);     // Xanh lá đậm
                   
}

function draw() {
  
  // NỀN TRỜI MÀU XANH DA TRỜI
  
  background(135, 206, 235); 

  // NỀN ĐẤT MÀU XANH LÁ
 
  noStroke();
  fill(34, 139, 34); 
  rect(0, 300, 600, 100); 

  // 1. HIỆU ỨNG THỜI GIAN (Dùng sin, cos, frameCount)
 
  let timeFactor = sin(frameCount * 0.02); 
  let colorProgress = map(sin(frameCount * 0.01), -1, 1, 0, 1); 

  // THÂN CÂY VÀ KHỐI TRÒN
 
  fill(124,179,66);
  ellipse(410, 225, 90, 130);
  
  strokeWeight(8); //thancay
  stroke(109,76,65); 
  line(410, 290, 410, 312);

  // MẶT TRỜI [Thay đổi màu sắc hoàng hôn & Tia sáng]
  
  strokeWeight(0); 
  let currentSunColor = lerpColor(sunColorStart, sunColorEnd, colorProgress);
  fill(currentSunColor); 
  
  let sunY = 95 + cos(frameCount * 0.02) * 8;
  ellipse(500, sunY, 80); 

fill(128, 130, 133); //nui
  triangle(100,50,275,300,-75, 300);
  fill(125,135, 133);
  triangle(250, 100, 350, 300, 150, 300);
  strokeWeight(6); 
  stroke(currentSunColor); 
  let rayExtend = timeFactor * 5;
  line(430 - rayExtend, sunY, 570 + rayExtend, sunY); 
  line(500, sunY - 65 - rayExtend, 500, sunY - 5 + rayExtend); 
  line(470, sunY + 55, 500, sunY - 5); 
  line(530, sunY + 55, 500, sunY - 5);  

  // CÂY CON TAM GIÁC [ Co giãn kích thước]
  
  strokeWeight(0); 
  
  let currentTreeColor1 = lerpColor(treeColorStart, treeColorEnd, colorProgress);
  fill(currentTreeColor1);
  let grow = timeFactor * 8;
  triangle(525, 225 + grow, 560, 300, 490, 300);
  triangle(-25, 300, 25, 225 + grow, 75, 300);
  triangle(150, 200 + grow, 200, 300, 100, 300); 

  fill(130, 160, 80); 
  let growInverse = cos(frameCount * 0.02) * 8; 

  triangle(480, 200 + growInverse, 520, 300, 440, 300);
  triangle(30, 300, 60, 240 + growInverse, 85, 300);
  triangle(200, 225 + growInverse, 230, 300, 170, 300);  
   
  // NGỌN NÚI TRẮNG 
  
  fill(241, 242, 242);
 
  triangle(100, 50, 27, 150, 80, 125);
  quad(100, 50, 80, 125, 120, 170, 153, 125);
  triangle(250, 100, 210, 180, 250, 160);
  triangle(250, 100, 250, 160, 285, 170);
  
  // ĐÁM MÂY trôi
 
  let cloudX = (frameCount * 0.5) % (width + 100) - 50; 
  arc(cloudX, 85, 50, 60, PI, TWO_PI);
  arc(cloudX - 30, 85, 40, 40, PI, TWO_PI);
  arc(cloudX + 30, 85, 40, 40, PI, TWO_PI);   


  // ĐỐM SÁNG / ĐOM ĐÓM nhấp nháy
   
  if (random(1) > 0.3) {
    strokeWeight(10 + random(4)); 
    stroke(240, 240, 150); 
    
    point(100, 350);
    point(500, 350);
    point(300, 350);
    point(200, 375);
    point(15, 375);
    point(575, 375);
    point(400, 375);
    
  }
}
