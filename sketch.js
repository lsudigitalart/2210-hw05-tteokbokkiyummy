function setup() {
  createCanvas(500, 500);
  background(255);
  frameRate(30);
  noFill();
}

function draw() {

  let centerX = width/2;
  let centerY = height/2;

  // random circles
  let angle = random(TWO_PI);
  let w = random(10,1500);
  let h = random(10,1500);
  let rotationAngle = random(TWO_PI);
  
  let x = centerX + cos(angle) * w/2;
  let y = centerY + sin(angle) * h/2;
  
  push();
  
  translate(centerX, centerY);
  rotate(rotationAngle);
  strokeWeight(2);
  
  ellipse(0,0,x - centerX,y - centerY);
  
  pop();

}
