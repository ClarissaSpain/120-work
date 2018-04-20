var bug;

function setup(){
  createCanvas(600, 600);
  background('grey');
  // create object and pass in parameters
  bug = new JitterBug(width/2, height/2, 20);

}

function draw(){
  bug.move();
  bug.display();

}

function JitterBug(tempX, tempY, tempDiameter){
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 2.5;

  this.move = function(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }
  this.display = function(){
    fill('yellow');
    ellipse(this.x, this.y, this.diameter, this. diameter);
  }
}
