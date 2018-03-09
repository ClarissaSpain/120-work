Claire Spain, Group C

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing
The orginal code is drawing an ellipse that is moving at a constant rate on the x and y axis. By creting a **cieling** around the perameter of the canvas, the code creates the illusion that ellipse is bouncing off the edges of the canvas because it. Furthermore, once you click the mouse once the rate of speed increases.
### Why is it working the way it is?
xpos = xpos + ( xspeed * xdirection ); ypos = ypos + ( yspeed * ydirection );

reverse its direction by multiplying by -1

if (xpos > width-rad || xpos < rad) { xdirection *= -1; } if (ypos > height-rad || ypos < rad) { ydirection *= -1; }
### What does each line do?
```

// Setting variable 'ball' with subsequent perameters
let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = -10;
ball.scale_y = -10;
// Creating the canvas
function setup() {
    createCanvas(windowWidth, 400);
    background(0);
}

function draw() {
// 10 += 1*1;
    ball.x += ball.delta_x * ball.scale_x;
// 10 += 1*1;
    ball.y += ball.delta_y * ball.scale_y;

// Creating a statement if...then...
// If ball.x or 10>= than width(of the canvas) and 10<=0
// then ball.delta_x 1 = -1 * 1; -1 means that it will change direction once it hits the edge of the canvas.
// which means the ball is moving at a rate of on pixel on the x axis
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
// If ball.y 10>= than the height(of the canvas) and 10<=0
// then ball.delta_y 1= -1 * 1; -1 means that it will change directon once it hits a wall (edge of the canvas)
// the ball is moving at a constant rate on the y axis
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
// creating a white circle for the ball
    fill(255);
    ellipse(ball.x, ball.y, ball.width, ball.width);
}
// mouse press function
function mousePressed() {
  // changes the location of the ball's x and y axis more drastically
  // after the mouse click
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}

```
### How can you make the ball change direction?

The statement within the code states that the ellipse is within the perameters ( width or hieght of the canvas) stay at a constant rate, otherwise reverse direction. The -1 is the deciding factor in the code.
```
if (ball.x >= width || ball.x <= 0) {
    ball.delta_x = -1 * ball.delta_x;
```
## How did you alter the sketch?
1. Changed the color and size of the background and canvas.
2. Changed what the fill of the ellipse would be with a random   rgb code.

 ```fill(random(0, 255), random(0, 255), random(0, 255));
  noStroke();```
3. Finally, edited what would happen when the mouse was clicked.
Instead of
 ```
 ball.scale_x = map(mouseX, 0, width, 0.5, 10);
 ball.scale_y = map(mouseY, 0, height, 0.5, 10);
 ```
 We would have
 ```
 ball.scale_x = -ball.scale_x + random(-99, 99)
 ball.scale_y = -ball.scale_y + random(-99, 99)
 ```
That would change the speed of the ellipse drastically.
