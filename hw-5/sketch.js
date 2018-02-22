function setup() {
  // created canvas
  createCanvas(800, 800);
  x = width / 2;
  y = height;
  background('#ecb9c7');
}
function draw() {
  push()
  noCursor();
  fill('#ff5cdd');
  // an ellipse controlled by the mouse
  translate(400, 400);
  noStroke();
  for (var i = 0; i < 10; i++) {
    ellipse(mouseX, mouseY, 20, 30);
    rotate(PI / 5);
  }
  pop()
  push()
  noCursor();
  fill('#fff46c');
  // started out with a flower and then messed with some numbers
  translate(400, 800);
  noStroke();
  for (var i = 0; i < 10; i++) {
    ellipse(x, y, 20, 90);
    rotate(PI / 5);
  }
  // jiggle randomly on the horizontal axis
  x = x + random(-1, 1);
  // moving at a constant speed
  y = y - 1;
  pop()
  // that was pretty cool, can I do another color?
  push()
  noCursor();
  fill('#cceeff');
  translate(500, 600);
  noStroke();
  for (var i = 0; i < 10; i++) {
    ellipse(x, y, 20, 90);
    rotate(PI / 5);
  }
  // jiggle randomly on the horizontal axis
  x = x + random(-1, 1);
  // moving at a constant speed
  y = y - 1;
  pop()
}function setup() {
  // created canvas
  createCanvas(800, 800);
  x = width / 2;
  y = height;
  background('#ecb9c7');
}

function draw() {
  push()
  noCursor();
  fill('#ff5cdd');
  // an ellipse controlled by the mouse
  translate(400, 400);
  noStroke();
  for (var i = 0; i < 10; i++) {
    ellipse(mouseX, mouseY, 20, 30);
    rotate(PI / 5);
  }
  pop()
  push()
  noCursor();
  fill('#fff46c');
  // started out with a flower and then messed with some numbers
  translate(400, 800);
  noStroke();
  for (var i = 0; i < 10; i++) {
    ellipse(x, y, 20, 90);
    rotate(PI / 5);
  }
  // jiggle randomly on the horizontal axis
  x = x + random(-1, 1);
  // moving at a constant speed
  y = y - 1;
  pop()
  // that was pretty cool, can I do another color?
  push()
  noCursor();
  fill('#cceeff');
  translate(500, 600);
  noStroke();
  for (var i = 0; i < 10; i++) {
    ellipse(x, y, 20, 90);
    rotate(PI / 5);
  }
  // jiggle randomly on the horizontal axis
  x = x + random(-1, 1);
  // moving at a constant speed
  y = y - 2;
  pop()
}
