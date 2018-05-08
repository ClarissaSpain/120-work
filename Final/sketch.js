var watergun;
var cactus = [];
var drops = [];
var Score = 0;

var scoreElem;

function setup(){
  scoreElem = createDiv('Score = 0');
 scoreElem.position(20, 20);
 scoreElem.id = 'score';
 scoreElem.style('color', 'white');
  createCanvas(windowWidth, windowHeight);
  watergun = new Watergun();
  drop = new Drop(width/2, height/2);
  for (var i = 0; i < 18; i++){
    cactus[i] = new Cactus(i*80+100, 60);
  }
}

function draw(){
background('#86ed7d');
watergun.show();
watergun.move();
for (var i = 0; i < drops.length; i++){
  drops[i].show();
  drops[i].move();
  for (var j = 0; j < cactus.length; j++){
    if (drops[i].hits(cactus[j])) {
      cactus[j].watered();
      drops[i].evaporate();
      }
    }
  }


var edge = false;

for (var i = 0; i < cactus.length; i++){
  cactus[i].show();
  cactus[i].move();
  if (cactus[i].x > width || cactus[i]. x < 0){
    edge = true;
  }

}

if (edge) {
  for (var i = 0; i < cactus.length; i++){
    cactus[i].shiftDown();
  }
}

// walking through the array backwards so that I don't skip elements.
for (var i = drops.length-1; i >= 0; i--){
  if (drops[i].toDelete){
    drops.splice(i, 1);
    var prevScore = parseInt(scoreElem.html().substring(8));
        scoreElem.html('Score = ' + (prevScore + 1));
    }
  }

for (var i = cactus.length-1; i >= 0; i--){
  if (cactus[i].toDelete){
    cactus.splice(i, 1);
    }
  }
}

function mousePressed(){
  var drop = new Drop(watergun.x, height);
  drops.push(drop);
}
