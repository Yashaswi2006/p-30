
var ground
function setup() {
  createCanvas(800,800);
  ground = new Ground (200,200,20,200);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  ground.display();
}