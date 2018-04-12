let Cacti = [];
let num_of_cacti = 17

function setup(){
  createCanvas(windowWidth, 800);
  for (let i = 0; i < num_of_cacti; i++) {
      Cacti.push( new Cactus() );
  }
}

function draw() {
  background('#bacaef');

}

// a class definition
class Cactus {
  constructor() {
    this.green = color(random(255), random(255), random(255));
    this.brown = color(random(255), random(255), random(255));
    this.pink = color(random(255), random(255), random(255));
    this.length_h = random()
  }

display()  {
  push();
  translate(x, y);
  // details like flower top
  push();
  fill(this.pink);
  noStroke();
  translate(35, 10);
  for (var i = 0; i < 10; i++) {
    ellipse(0, 5, 5, 10);
    rotate(PI / 5);
  }
  pop();
  // Cactus
  fill(this.green);
  noStroke();
  rect(10, 10, 50, 70, 25, 25, 3, 3);
  // top of clay pot
  push();
  fill(this.brown);
  noStroke();
  ellipse(35, 55, 65, 15);
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


}
