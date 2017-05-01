function setup(){
  mic = new p5.AudioIn()
  console.log(mic.getSources());
  mic.start();
  var cnv = createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw(){
  background(0);
  var spectrum = fft.analyze();
  noStroke();
  fill(0,255,0); // spectrum is green
  for (var i = 0; i< spectrum.length; i++){
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h )
  }
}
