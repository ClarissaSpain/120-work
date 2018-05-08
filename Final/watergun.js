function Watergun(){
  this.x = width/2;
  this.img = img[0]

  this.show = function(){
    imageMode(CENTER);
    image(this.img, this.x, height-75, 200, 200);
  }

  this.move = function(dir) {
    this.x = mouseX;
  }
}
