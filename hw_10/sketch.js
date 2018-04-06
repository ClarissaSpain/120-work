var x = 320;
var y = 180;
var xspeed = 5;
var yspeed = 2;

var r = 25;

function setup() {
  createCanvas(windowWidth, 200);

}

function draw() {
  background('pink');
  for (var x = -35; x < windowWidth + 70; x += 70) {
    cactus(x, 50);
  }
  ball();
}

// created a function called cactus
function cactus(x, y) {
  push();
  translate(x, y);
  // details like flower top
  push();
  fill('#ff4d70');
  noStroke();
  translate(35, 10);
  for (var i = 0; i < 10; i++) {
    ellipse(0, 5, 5, 10);
    rotate(PI / 5);
  }
  pop();
  // Cactus
  fill('#84f882');
  noStroke();
  rect(10, 10, 50, 70, 25, 25, 3, 3);
  // top of clay pot
  push();
  fill('#47291f');
  noStroke();
  ellipse(35, 55, 65, 15);
  pop();
  // bottom of clay pot
  push();
  fill('#47291f');
  noStroke();
  arc(35, 58, 55, 50, 0, PI, CHORD);
  pop();
  // Face
  push();
  fill('black')
  ellipse(25, 40, 5, 5);
  ellipse(45, 40, 5, 5);
  pop();
  push();
  noFill();
  stroke(3);
  arc(35, 35, 15, 15, QUARTER_PI, PI - QUARTER_PI);
  pop();
  pop();
}

function ball() {
  push();
  fill('yellow');
  noStroke();
  ellipse(x, y, r * 2, r * 2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }
  pop();
}
