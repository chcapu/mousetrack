let cnv;
let freccia;

function preload(){
  freccia = loadImage("./assets/cursor.svg");
}

function setup() {
  cnv = createCanvas(windowWidth,windowHeight);
  background("white");
  noCursor();
}

function draw() {
  imageMode(CENTER);
  image(freccia, mouseX, mouseY, 35, 35);
}

function mouseClicked() {
  saveCanvas(cnv, "mouse path screenshot", "jpg");
}
