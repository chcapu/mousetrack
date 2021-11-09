let cnv;
let freccia;
let netflix;

function preload(){
  freccia = loadImage("./assets/cursor.svg");
  netflix = loadImage("./assets/netflix-trace.png");
}

function setup() {
  cnv = createCanvas(windowWidth,windowHeight);
  //background("white");
  backgroundImage(netflix); 
  noCursor();
}

function draw() {
  imageMode(CENTER);
  image(freccia, mouseX, mouseY, 35, 35);
}

function mouseClicked() {
  saveCanvas(cnv, "mouse path screenshot", "jpg");
}
