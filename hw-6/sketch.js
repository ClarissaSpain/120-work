// setting variables for background function
var r = 0;
var b = 255;
var y = 0;
var ax = [];
var ay = [];
// set object variable
function setup() {
  createCanvas(windowWidth, 400);
}
function draw(){
  r = map(mouseX, 0, windowWidth, 0, 255);
  b = map(mouseX, 0, windowWidth, 255, 0);
  y = map(0, mouseY, windowWidth, 255, 0);
  //background
background(r, y, b);
var eSize = 20;
// setting variable for pow function
 //ellipse
 fill('#50ab80')
 noStroke()
 ellipse(mouseX, mouseY, eSize, eSize);
 // another bigger ellipse follows the small curser ellipse.
 // gets closer nearer to 0, 0, and farther apart further away from origin.
 ellipse(mouseX * 2, mouseY * 2, pow(eSize, 2), pow(eSize, 2));
// creating randomly generated lines along the left side of the canvas.
 for (var i = 0; i < 400; i++) {
   var r = random(-50, 50);
   stroke( r /5 );
   line(50, i, 50 + r, i);
  // Contrain for black ellipse
   var leftWall= 100;
   var rightWall = windowWidth - 100;
   var xm = mouseX
   var xc = constrain(mouseX, leftWall, rightWall);
push();
// The grey and black ellipses.
   noStroke();
   fill(150);
   ellipse(xm, 33, 9, 9);
   fill(0);
   ellipse(xc, 66, 9, 9);
pop();
 }
 // the line that goes between the curser ellipse and the stagnant circle.
  var x1 = windowWidth - 50;
  var y1 = 90;
  var x2 = mouseX;
  var y2 = mouseY;
  line(x1, y1, x2, y2);
  ellipse(x1, y1, 7, 7);
  ellipse(x2, y2, 7, 7);
}
