var mic;
var xspacing = 1;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 400; // Height of wave
var period = 200.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave

function setup() {
    mic = new p5.AudioIn();
    mic.start();
    createCanvas(1280, 720);
    var vol = mic.getLevel();
    w = width+16;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(floor(w/xspacing));
}

function draw() {
    background(0);
    calcWave();
    renderWave();
}

function calcWave() {
    var vol = mic.getLevel();
    // Increment theta (try different values for 
    // 'angular velocity' here
    theta += 0.05;

  // For every x value, calculate a y value with sine function
    var x = theta;
    for (var i = 0; i < yvalues.length; i++) {
      yvalues[i] = sin(x)*amplitude*vol;
      x+=dx;
  }
}

function calcWave2() {
    var vol = mic.getLevel();
    // Increment theta (try different values for 
    // 'angular velocity' here
    theta += 0.05;

  // For every x value, calculate a y value with sine function
    var x = theta;
    for (var i = 0; i < yvalues.length; i++) {
      yvalues[i] = sin(x)*amplitude2*vol;
      x+=dx;
    }
}

function renderWave() {
    noStroke();
    fill(255);
  // A simple way to draw the wave with an ellipse at each location
    for (var x = 0; x < yvalues.length; x++) {
      ellipse(x*xspacing, height/2+yvalues[x], 8, 8);
    }
}

function renderWave2() {
      noStroke();
      fill(255,255,0);
      // A simple way to draw the wave with an ellipse at each location
      for (var x = 0; x < yvalues.length; x++) {
        ellipse(x*xspacing, height/2+yvalues/2[x], 8, 8);
  }
}
