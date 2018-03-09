var x = 180;
var y = 180;
var xspeed = 9;
var yspeed = 10;


function setup() {
  createCanvas(windowWidth, 800);
  background (25);

}

function draw() {

  noStroke();

	//distance from center of the screen
	var d = dist(windowWidth/2, 400, mouseX, mouseY);

  	fill (random(51, 250), random(155, 250), random(240, 250));
  	ellipse (x, y, d, d);

  	//bouncing horizontally
 	 x = x + xspeed;

  	 if (x > windowWidth || x < 0)  {
     	xspeed = -xspeed;
  	}

  	//bouncing veritcally
  	y = y + yspeed;

  	if (y > windowHeight || y < 0) {
	 	  yspeed = -yspeed;
  	}

}
