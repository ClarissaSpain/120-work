var ship;
var flowers = [];
var drops = [];

function setup(){
  createCanvas(800, 600);
  ship = new Ship();
  drop = new Drop(width/2, height/2);
  for (var i = 0; i < 9; i++){
    flowers[i] = new Flower(i*80+80, 60);
  }
}

function draw(){
background('#86ed7d');
ship.show();
ship.move();
for (var i = 0; i < drops.length; i++){
  drops[i].show();
  drops[i].move();
  for (var j = 0; j < flowers.length; j++){
    if (drops[i].hits(flowers[j])) {
      flowers[j].grow();
      drops[i].evaporate();
      }
    }
  }

var edge = false;

for (var i = 0; i < flowers.length; i++){
  flowers[i].show();
  flowers[i].move();
  if (flowers[i].x > width || flowers[i]. x < 0){
    edge = true;
  }

}

if (edge) {
  for (var i = 0; i < flowers.length; i++){
    flowers[i].shiftDown();
  }
}


// walking through the array backwards so that I don't skip elements.
for (var i = drops.length-1; i >= 0; i--){
  if (drops[i].toDelete){
    drops.splice(i, 1);
    }
  }
}

function mousePressed(){
  var drop = new Drop(ship.x, height);
  drops.push(drop);
}
