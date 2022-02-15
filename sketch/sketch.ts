/*
let sound: p5.SoundFile; // to use p5 sound
declare function loadSound(path: string): p5.SoundFile; // a hack to get loadSound working with typescript
declare let ml5: any; // to use ml5 (no ml5 types available)
let qr; // when using qr code generator
let tracker; // when using face tracking
let capture: Capture;
 
const downSize = 10
const zoom = 20;
 
const captureWidth = 640 / downSize
const captureHeight = 480 / downSize;
 
const rotation = map (colorRed, 0,255, 0,360)

// P5 will call this function to preload any assets (sounds, sprites, etc) and will continue with setup only when finished
function preload() {
  // sound = loadSound('assets/ding.mp3');
}
 
async function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(captureWidth, captureHeight);
  capture.hide();
  background("black");
  angleMode(DEGREES)
}
 
// P5 will run this function whenever window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
 
function replicateVideo() {
  for (let x = 0; x < width; x = x + captureWidth) {
    for (let y = 0; y < height; y = y + captureHeight) {
      image(capture, x, y);
    }
  }
}
// P5 will run this function several times per second (depending on frameRate)
function draw() {
  clear()
  push();
  translate((width / 2) - (captureWidth * zoom) / 2, ((height / 2) - (captureHeight * zoom) / 2))
  capture.loadPixels();
  for (let i = 0; i < capture.pixels.length; i = i + 4) {
    const colorRed = capture.pixels[i]; 
    const colorGreen = capture.pixels[i + 1];
    const colorBlue = capture.pixels[i + 2];
    const alpha = capture.pixels[i + 3];
 
    const y = Math.floor((i / 4) / captureWidth) * zoom
    const x = (i / 4) % captureWidth * zoom
   //farby
   /*
    stroke("gray");
    fill(colorBlue, colorGreen, colorRed, alpha);
    rect (x, y, zoom, zoom)
    
   push();
   stroke(colorRed, colorGreen, colorBlue);
   strokeWeight(6);
   translate(x,y);
   rotate(rotation)
    line(-zoom/2, -zoom/2, zoom/2, zoom/2);
    pop();
  }
  pop();
}
 */
let sound: p5.SoundFile; // to use p5 sound
declare function loadSound(path: string): p5.SoundFile; // a hack to get loadSound working with typescript
declare let ml5: any; // to use ml5 (no ml5 types available)
let qr; // when using qr code generator
let tracker; // when using face tracking
let capture: Capture;

const downSize = 10
const zoom = 20;

const captureWidth = 640 / downSize
const captureHeight = 480 / downSize;

// P5 will call this function to preload any assets (sounds, sprites, etc) and will continue with setup only when finished
function preload() {
  // sound = loadSound('assets/ding.mp3');
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(captureWidth, captureHeight);
  capture.hide();
  background("background");
  angleMode(DEGREES);
}

// P5 will run this function whenever window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// P5 will run this function several times per second (depending on frameRate)
function draw() {
  clear();
  push();
  translate((width / 2) - (captureWidth * zoom) / 2, ((height / 2) - (captureHeight * zoom) / 2))
  capture.loadPixels();
  for (let i = 0; i < capture.pixels.length; i = i + 4) {
    const colorRed = capture.pixels[i];
    const colorGreen = capture.pixels[i + 1];
    const colorBlue = capture.pixels[i + 2];
    const alpha = capture.pixels[i + 3];

    const y = Math.floor((i / 4) / captureWidth) * zoom
    const x = (i / 4) % captureWidth * zoom

    const rotation = map(colorRed, 0, 255, 0, 360);

    // negativ
    /*
    fill(255 - colorRed, 255 - colorGreen, 255 - colorBlue, alpha);
    */
    // cierno-biele
    /*
    let BlackAndWhiteColor = colorRed + colorGreen + colorBlue;
    BlackAndWhiteColor = map (BlackAndWhiteColor, 0, 3*255, 0, 255);
    fill(BlackAndWhiteColor, BlackAndWhiteColor, BlackAndWhiteColor,  alpha);
    */

    //rect(x, y, zoom, zoom);
    push();
    stroke(colorRed, colorGreen, colorBlue);
    strokeWeight(10);
    translate(x, y);
    rotate(rotation)
    line(-zoom / 2, -zoom / 2, zoom / 2, zoom / 2);
    pop();
  }
  pop();
}

