
function Cactus(x, y){
  this.x = x;
  this.y = y;
  this.r = 30;
  this.xdir = 2;
  this.toDelete = false;

  this.watered = function (){
    this.toDelte = true;
}

  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  }

  this.move = function() {
    this.x = this.x + this.xdir;
  }

  this.show = function(){
    image(img[3], this.x, this.y, 200, 200);
    image(img[12], this.x - 50, this.y + 150, 200, 200);
    image(img[8], this.x, this.y + 300, 200, 200);


  }

}
