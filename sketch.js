let cnv;
let bg;
let proportion;
let sas;

let freccia;
let netflix;

function preload() {
  freccia = loadImage("./assets/cursor.svg");
  netflix = loadImage("./assets/netflix-trace.png");
}

function setup() {
  cnv = createCanvas(windowWidth,windowHeight);
  noCursor();
  background("white");
  imageMode(CENTER);

  // proportion = max(width / netflix.width, height / netflix.height);
	// netflix.resize (netflix.width * proportion, netflix.height * proportion);
  //
  // image(netflix, 0, 0);

  sas = backgroundImage(netflix);
}

function draw() {
  imageMode(CENTER);
  image(freccia, mouseX, mouseY, 35, 35);
}

function mouseClicked() {
  saveCanvas(cnv, "mouse-path-screenshot", "jpg");
}

function keyPressed() {
  if (key === "c"){
    console.log("pressato c");
    //backgroundImage.clear();
  }
}

function backgroundImage(img) {
  push();
  translate(width/2, height/2);
  imageMode(CENTER);
  let scale = Math.max(width/img.width, height/img.height);
  image(img, 0, 0, img.width*scale, img.height*scale);
  pop();
}
