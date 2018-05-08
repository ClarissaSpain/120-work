function Drop(x, y){
  this.x = mouseX;
  this.y = height-125;
  this.r = 4;
  this.toDelete = false;


  this.show = function(){
    noStroke();
    fill('#87b5ff');
    ellipse(this.x, this.y, this.r*2, this.r*3);
  }

  this.evaporate = function() {
    this.toDelete = true;
  }

  this.hits = function(cactus){

    var d = dist(this.x, this.y, cactus.x, cactus.y);
    if (d < this.r + cactus.r){
        return true;
    }else {
      return false;
    }
  }

  this.move = function(){
    this.y = this.y - 5;

  }
}
