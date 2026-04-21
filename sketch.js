function setup() {
  createCanvas(400, 600);
}

function draw() {
  background("#FFE7E7");
  noStroke();
  fill(255, 180);
  ellipse(50, 50, 100, 60);
  ellipse(350, 80, 120, 70);
  
  fill("#663300	");
  ellipse(200, 280, 320, 380); 
  rect(40, 280, 80, 300, 40);  
  rect(280, 280, 80, 300, 40); 
  ellipse(80, 550, 80, 100);
  ellipse(320, 550, 80, 100);
  ellipse(120, 440, 80, 100);
  ellipse(280, 440, 80, 100);
  
  noStroke();
  fill("#663300");
  ellipse(200, 300, 310, 390); 
  fill("#EBCBB0"); 
  rect(170, 400, 60, 100, 10);
  fill("#FFE5CC");
  rect(172, 380, 56, 120, 30);
  fill("#221717"); 
  arc(200, 620, 350, 300, PI, TWO_PI);
  fill("#42302A");
  triangle(200, 470, 140, 600, 260, 600);

  noStroke();
  fill("#FFE5CC");
  ellipse(200, 280, 260, 310);
  
  fill(255);
  ellipse(140, 260, 65, 35);
  ellipse(260, 260, 65, 35);
  
  fill("#6d4c41");
  ellipse(140, 260, 30, 30);
  ellipse(260, 260, 30, 30);
  
  
  fill(0);
  ellipse(140, 260, 15, 15);
  ellipse(260, 260, 15, 15);
  
  fill(255);
  ellipse(132, 255, 8, 8);
  ellipse(252, 255, 8, 8);
  
  noFill();
  stroke("#d1a481");
  strokeWeight(1.5);

  arc(140, 245, 60, 15, PI + 0.2, TWO_PI - 0.2); 
  arc(260, 245, 60, 15, PI + 0.2, TWO_PI - 0.2);

  stroke("#d1a481");
  strokeWeight(3);
  line(200, 270, 195, 310);
  line(195, 310, 205, 310); 
  
  noStroke();
  fill("#d98c8c");
  arc(200, 350, 50, 25, 0, PI);
  fill(255, 150);
  ellipse(100, 320, 40, 20);
  ellipse(300, 320, 40, 20);

  stroke("#804000");
  strokeWeight(5);
  noFill();
  arc(140, 230, 60, 20, PI + 0.2, TWO_PI - 0.2);
  arc(260, 230, 60, 20, PI + 0.2, TWO_PI - 0.2);

  noStroke();
  fill("#804000");
  arc(200, 220, 265, 200, PI, TWO_PI);
  triangle(70, 210, 110, 210, 85, 280);
  triangle(290, 210, 330, 210, 315, 280);
  fill("#330000");
  ellipse(175, 215, 4, 4); 
  ellipse(240, 380, 5, 5); 
  fill("#FFE5CC");
  noStroke();
  ellipse(75, 280, 30, 50);  
  ellipse(325, 280, 30, 50); 
  fill("#EBCBB0"); 
  ellipse(80, 280, 12, 22);
  ellipse(320, 280, 12, 22);
  noFill();
  stroke("#FFFFCC"); 
  strokeWeight(2.5);  
  arc(200, 460, 65, 85, 0.3, PI - 0.3); 
}