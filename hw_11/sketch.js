let particles = [];
// realized I needed to set variables to make the random particle color
var r, g, b;

function setup() {
  createCanvas(windowWidth, 800);
  r = random(255);
  g = random(255);
  b = random(255);

}

function draw() {
  background('pink');
  // because that's a great color
  for (let i = 0; i < 5; i++) {
    let p = new Particle();
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    // Dan Shiffman was a great help in this assignment. I learned a lot,
    // and I hope my code is still unique.
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove the particle
      particles.splice(i, 1);
    }
  }
}
class Particle {
  constructor() {
    this.x = (mouseX);
    this.y = (mouseY);
    // this. x and this.y were actually numbers but I wanted
    // the curser to be the start of the particles. So I threw those
    // in and was very surprised it worked the first time. Usually,
    // any changes break the code twenty times before it works.
    this.vx = random(-1, 1);
    this.vy = random(-6, -1);
    this.alpha = 255
  }

  finished() {
    return this.alpha < 0;
  }
// 'Animates' the particles to move with every frame.
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 3;
  }
// Show similar to display
  show() {
    noStroke();
    // stroke(255);
    fill(r, g, b, this.alpha);
    ellipse(this.x, this.y, 30);
  }
}
