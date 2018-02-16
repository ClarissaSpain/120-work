function setup() {
  // create a canvas to draw my portrait on
  createCanvas(500, 500);
}

function draw() {
  // set the background color
  background('rgb(204, 237, 255)');
  // creating sweater
  push();
  // making sweater pink because why not
  fill('rgb(236, 185, 199)');
  // remove stroke
  noStroke();
  //Shape for the sweater
  beginShape();
  vertex(85, 375);
  vertex(125, 400);
  vertex(245, 435);
  vertex(275, 425);
  vertex(350, 365);
  vertex(400, 340);
  vertex(415, 315);
  vertex(405, 295);
  vertex(355, 280);
  vertex(300, 270);
  vertex(255, 310);
  vertex(240, 315);
  vertex(203, 305);
  vertex(205, 295);
  vertex(175, 315);
  vertex(130, 330);
  vertex(105, 345);
  endShape(CLOSE);
  // end sandbox
  pop();

  push();
  // making neck color
  fill('#e6a884');
  // remove noStroke
  noStroke();
  // making shape for neck
  beginShape();
  vertex(198, 255);
  vertex(280, 245);
  vertex(280, 265);
  vertex(300, 270);
  vertex(255, 310);
  vertex(240, 315);
  vertex(203, 305);
  vertex(205, 295);
  endShape(CLOSE)
  // end sandbox
  pop();

  push();
  fill('#ecc09b')
  noStroke();
  // The basic head shape
  beginShape();
  vertex(153, 100);
  vertex(290, 90);
  vertex(300, 105);
  vertex(305, 150);
  vertex(300, 215);
  vertex(290, 248);
  vertex(250, 285);
  vertex(225, 290);
  vertex(180, 250);
  vertex(165, 210);
  vertex(150, 155);
  endShape(CLOSE)
  pop();
  // End sandbox for the head
  // now for the ears
  // left ear
  push();
  fill('#da9e81')
  noStroke();
  beginShape();
  vertex(305, 150);
  vertex(310, 140);
  vertex(325, 145);
  vertex(335, 170);
  vertex(325, 185);
  vertex(305, 195);
  vertex(300, 190);
  endShape(CLOSE)
  // right ear
  push();
  fill('#da9e81')
  noStroke();
  beginShape();
  vertex(152, 160);
  vertex(145, 158);
  vertex(140, 160);
  vertex(130, 170);
  vertex(128, 195);
  vertex(155, 215);
  vertex(166, 213);
  endShape(CLOSE);
  pop();
  // working on the hair,
  // decided against the highlight and the individual
  // strands of hair as it would be more difficult.
  push();
  fill('#775546')
  noStroke();
  beginShape();
  vertex(165, 185);
  vertex(150, 180);
  vertex(135, 160);
  vertex(134, 158);
  vertex(134, 140);
  vertex(125, 145);
  vertex(150, 70);
  vertex(200, 50);
  vertex(260, 45);
  vertex(300, 60);
  vertex(315, 90);
  vertex(325, 140);
  vertex(315, 170);
  vertex(300, 175);
  vertex(300, 155);
  vertex(248, 162);
  vertex(160, 150);
  endShape(CLOSE);
  pop();
  // time for the face details...
  // nose
  push();
  fill('#f2a27b')
  quad(225, 175, 215, 215, 230, 225, 248, 210);
  pop();
  // mouth
  push();
  // after creating the mouth I realized I needed to move it over.
  translate(-2, 5)
  fill('#da9e81')
  noStroke();
  beginShape();
  vertex(215, 245);
  vertex(235, 235);
  vertex(256, 240);
  vertex(241, 241);
  vertex(235, 243);
  vertex(230, 242);
  endShape(CLOSE);
  triangle(230, 249, 235, 253, 243, 249);
  pop();
  // Creating the eyes
  // whites
  push();
  fill('#f5f1e6');
  noStroke();
  beginShape();
  vertex(215, 175);
  vertex(200, 165);
  vertex(185, 166);
  vertex(180, 175);
  vertex(190, 185);
  vertex(206, 186);
  endShape(CLOSE);
  beginShape();
  vertex(250, 174);
  vertex(260, 163);
  vertex(275, 163);
  vertex(285, 167);
  vertex(275, 180);
  vertex(260, 181);
  endShape();
  pop();
  // the pupils
  push();
  fill('#c89174');
  noStroke();
  beginShape();
  vertex(190, 165);
  vertex(190, 175);
  vertex(200, 187);
  vertex(207, 180);
  vertex(210, 172);
  vertex(201, 166);
  endShape(CLOSE);
  beginShape();
  vertex(260, 163);
  vertex(257, 173);
  vertex(270, 181);
  vertex(276, 172);
  vertex(275, 163);
  endShape(CLOSE);
  pop();
  // eyelashes
  push();
  strokeWeight(2)
  stroke('#cc7e4d');
  line(215, 175, 200, 165);
  line(200, 165, 185, 166);
  line(185, 166, 180, 175);
  line(250, 174, 260, 163);
  line(260, 163, 275, 163);
  line(275, 163, 285, 167);
  pop();
  // eyelid
  push();
  fill('#cc8269')
  quad(180, 165, 200, 155, 215, 165, 197, 160);
  pop();
  // also Beautified the file to make it easier to read. 
}
