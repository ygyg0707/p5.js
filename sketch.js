/*********************************************
 * 1. mouse:
 *    - 마우스 이동 → 눈 따라감
 *    - 클릭 → 볼 + 입 변화
 *    - 드래그 → 캐릭터 이동
 * 2. keyboard:
 *    - A → 흔들림
 *    - D → 좌우 이동
 *    - W → 점프
 *    - S → 눈 깜빡임
 *    - Q → 회전
 *    - E → 크기 변화
 *********************************************/
let x = 0;
let y = 0;
let vy = 0;
let isJump = false;
let shake = 0;
let shaking = false;
let blush = false;
let blink = false;
let angle = 0;
let rotating = false;
let scaleVal = 1;
let scaling = false;
let dragX, dragY;
let dragging = false;
function setup() {
  createCanvas(400, 600);
}

function draw() {
  background("#FFE7E7");
  noStroke();
  fill(255, 180);
  ellipse(50, 50, 100, 60);
  ellipse(350, 80, 120, 70);
  if (shaking) {
    shake = sin(frameCount * 0.3) * 8;
  } else {
    shake = 0;
  }

  if (isJump) {
    vy += 0.6;
    y += vy;

    if (y > 0) {
      y = 0;
      vy = 0;
      isJump = false;
    }
  }
  angle = rotating ? sin(frameCount * 0.1) * 0.3 : 0;
  scaleVal = scaling ? 1 + sin(frameCount * 0.1) * 0.1 : 1;
  push();
  translate(width/2 + x + shake, height/2 + y);
  rotate(angle);
  scale(scaleVal);
  translate(-200, -300);

  drawCharacter();
  pop();
}

function drawCharacter() {

  noStroke();
  fill("#663300");
  ellipse(200, 280, 320, 380); 
  rect(40, 280, 80, 300, 40);  
  rect(280, 280, 80, 300, 40); 
  ellipse(80, 550, 80, 100);
  ellipse(320, 550, 80, 100);
  ellipse(120, 440, 80, 100);
  ellipse(280, 440, 80, 100);

  fill("#EBCBB0"); 
  rect(170, 400, 60, 100, 10);
  fill("#FFE5CC");
  rect(172, 380, 56, 120, 30);

  fill("#FFE5CC");
  ellipse(200, 280, 260, 310);
  let eyeX1 = constrain(mouseX, 120, 160);
  let eyeY1 = constrain(mouseY, 240, 280);
  let eyeX2 = constrain(mouseX, 240, 280);
  let eyeY2 = constrain(mouseY, 240, 280);

  fill(255);

  if (blink) {
    ellipse(140, 260, 65, 5);
    ellipse(260, 260, 65, 5);
  } else {
    ellipse(140, 260, 65, 35);
    ellipse(260, 260, 65, 35);

    fill("#6d4c41");
    ellipse(eyeX1, eyeY1, 30, 30);
    ellipse(eyeX2, eyeY2, 30, 30);

    fill(0);
    ellipse(eyeX1, eyeY1, 15, 15);
    ellipse(eyeX2, eyeY2, 15, 15);

    fill(255);
    ellipse(eyeX1 - 5, eyeY1 - 5, 8, 8);
    ellipse(eyeX2 - 5, eyeY2 - 5, 8, 8);
  }

  fill("#d98c8c");
  if (blush) {
    arc(200, 350, 90, 50, 0, PI);
  } else {
    arc(200, 350, 50, 25, 0, PI);
  }

  if (blush) {
    fill(255, 80, 80, 150);
  } else {
    fill(255, 150);
  }
  ellipse(100, 320, 40, 20);
  ellipse(300, 320, 40, 20);

  stroke("#d1a481");
  strokeWeight(3);
  line(200, 270, 195, 310);
  line(195, 310, 205, 310);

  noFill();
  stroke("#804000");
  strokeWeight(5);
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

function mousePressed() {
  blush = !blush;
  dragging = true;
  dragX = mouseX;
  dragY = mouseY;
}

function mouseDragged() {
  if (dragging) {
    x += mouseX - dragX;
    y += mouseY - dragY;
    dragX = mouseX;
    dragY = mouseY;
  }
}
function mouseReleased() {
  dragging = false;
}
// 키보드
function keyPressed() {
  if (keyCode === 65) shaking = true;
  if (keyCode === 68) x += 20;

  if (keyCode === 87 && !isJump) {
    isJump = true;
    vy = -12;
  }
  if (keyCode === 83) blink = true;
  if (keyCode === 81) rotating = true;
  if (keyCode === 69) scaling = true;
}
function keyReleased() {
  if (keyCode === 65) shaking = false;
  if (keyCode === 83) blink = false;
  if (keyCode === 81) rotating = false;
  if (keyCode === 69) scaling = false;
}