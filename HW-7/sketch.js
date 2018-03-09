// Setting variable 'ball' with subsequent perameters
let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 10;
ball.scale_y = 10;
// Creating the canvas
function setup() {
    createCanvas(windowWidth, windowHeight);
    background('pink');
}
// changed the size of canvas and the color of the background

function draw() {
// 10 += 1*1;
    ball.x += ball.delta_x * ball.scale_x;
// 10 += 1*1;
    ball.y += ball.delta_y * ball.scale_y;

// Creating a statement if...then...
// If ball.x or 10>= than width(of the canvas) and 10<=0
// then ball.delta_x 1 = -1 * 1; -1 means that it
// will change direction once it hits the edge of the canvas.
// which means the ball is moving at a rate of on pixel on the x axis
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
// If ball.y 10>= than the height(of the canvas) and 10<=0
// then ball.delta_y 1= -1 * 1;-1 means that it will
// change directon once it hits a wall (edge of the canvas)
// the ball is moving at a constant rate on the y axis
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
// creating a white circle for the ball
//Changed the fill to be random
    fill(random(0, 255), random(0, 255), random(0, 255));
    noStroke();
    ellipse(ball.x, ball.y, ball.width, ball.width);
}
// mouse press function
function mousePressed() {
  // changes the location of the ball's x and y axis more drastically
  // after the mouse click
  // ball.scale_x = map(mouseX, 0, width, 0.5, 10);
  // ball.scale_y = map(mouseY, 0, height, 0.5, 10);

    ball.scale_x = -ball.scale_x + random(-99, 99)
    ball.scale_y = -ball.scale_y + random(-99, 99)
// changed what happen when the mouse button is clicked
}
