var stars = [];
var numStars = 2000;
var maxStars = 3000;
var forwardSpeed = 5;

function setup() {
  createCanvas(400, 400);
  for(var i=0;i<maxStars;i++){
    stars[i]=new Star();
  }
}

function draw() {
  forwardSpeed = map(mouseX, 0, width, 0,30);
  numStars = map(mouseY, 0, height, 0,2000);
  background(0);
  translate(width/2, height/2);
  for(var i=0;i<numStars;i++){
    stars[i].update();
    stars[i].show();
  }
}