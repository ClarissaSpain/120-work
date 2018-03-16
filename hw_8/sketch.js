function setup() {
  createCanvas(800, 400);
  // strokeWeight(2);
  noStroke();
}

function draw() {
  // Referenced Make: Getting started with p5.js 4.10 example.
  // However! I decided to make it pink rather than grey because I'm girly like that.
  background('pink');
  for (var y = 0; y <= height; y += 40){
    for(var x = 0; x <= width; x += 40){
      fill(255, 140);
      ellipse(x, y, 40, 40);
    }
  }
  // Decided to add a new shape which interestly also utilizes loops.
  // the first two perameters specify the first point of the curve. Which includes the mouse.
  // And the last two present the last point of the curve which I wanted to keep in the middle.
  for (var i = 0; i < 200; i += 20) {
    bezier(mouseX-(i/2.0), 40+i, 410, 20, 440, 400, 400-(i/16.0), 200+(i/8.0));
  }

}
