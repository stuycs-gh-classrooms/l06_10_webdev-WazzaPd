var radius;
var x;
var y;
var numCircles;
var speed;

function setup() {
  createCanvas(900,900);
  background(255);
  frameRate(5);
  radius = 50;
  x = radius/2;
  y = radius/2;
  numCircles = 3;
  speed = radius;
}

function draw() {
  background(255);
  fill(0,255,255);
  if((radius/2)+x+(radius*numCircles)==width){
    speed=-speed;
    y+=radius;
  }
  if(x<0){
    speed=-speed;
    y+=radius;
  }
  drawRow(x,y,radius,numCircles);
  x+=speed;
}

function drawRow(x, y, radius, n) {
  while (n >0){
    circle(x,y,radius);
    x+=radius;
    n--;
  }
}
