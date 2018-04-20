function Ship(){
  this.x = width/2;

  this.show = function(){
    fill(255);
    noStroke();
    triangle(this.x, height-60, this.x-20, height-20, this.x+20, height-20);
  }

  this.move = function(dir) {
    this.x = mouseX;
  }
}
