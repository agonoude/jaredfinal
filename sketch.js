function setup() {
    let cnv = createCanvas(300, 200);
    cnv.parent('sketch-container');
    background(240);
  }
  
  function draw() {
    fill(200, 100, 150);
    ellipse(mouseX, mouseY, 30);
  }