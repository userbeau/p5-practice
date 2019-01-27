var osc, osc2, osc3, osc4, osc5, osc6, osc7, osc8, osc9, osc10, osc11, osc12, osc13, osc14;
var fft, mic, env1, env2, env3, env4, env5, env6, env7, env8, env9, env10, env11, env12, env13, env14;
// var oSlider;
var o;

function setup() {
  createCanvas(1400, 650);
  noStroke();

  env1 = new p5.Envelope();
  env1.setADSR(.1, .5, 1, .2);
  env1.setRange(3, 0);

  env2 = new p5.Envelope();
  env2.setADSR(.1, .5, 1, .2);
  env2.setRange(3, 0);

  env3 = new p5.Envelope();
  env3.setADSR(.1, .5, 1, .2);
  env3.setRange(3, 0);

  env4 = new p5.Envelope();
  env4.setADSR(.1, .5, 1, .2);
  env4.setRange(3, 0);

  env5 = new p5.Envelope();
  env5.setADSR(.1, .5, 1, .2);
  env5.setRange(3, 0);

  env6 = new p5.Envelope();
  env6.setADSR(.1, .5, 1, .2);
  env6.setRange(3, 0);

  env7 = new p5.Envelope();
  env7.setADSR(.1, .5, 1, .2);
  env7.setRange(3, 0);

  env8 = new p5.Envelope();
  env8.setADSR(.1, .5, 1, .5);
  env8.setRange(1, 0);

  env9 = new p5.Envelope();
  env9.setADSR(.1, .5, 1, .5);
  env9.setRange(1, 0);

  env10 = new p5.Envelope();
  env10.setADSR(.1, .5, 1, .5);
  env10.setRange(1, 0);

  env11 = new p5.Envelope();
  env11.setADSR(.1, .5, 1, .5);
  env11.setRange(1, 0);

  env12 = new p5.Envelope();
  env12.setADSR(.1, .5, 1, .5);
  env12.setRange(1, 0);

  env13 = new p5.Envelope();
  env13.setADSR(.1, .5, 1, .5);
  env13.setRange(1, 0);

  env14 = new p5.Envelope();
  env14.setADSR(.1, .5, 1, .5);
  env14.setRange(1, 0);

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);


  osc = new p5.Oscillator();
  osc.setType('sawtooth');
  osc.freq(1);
  osc.amp(env1);

  osc2 = new p5.Oscillator();
  osc2.setType('sine');
  osc2.freq(1);
  osc2.amp(env2);

  osc3 = new p5.Oscillator();
  osc3.setType('square');
  osc3.freq(1);
  osc3.amp(env3);

  osc4 = new p5.Oscillator();
  osc4.setType('triangle');
  osc4.freq(1);
  osc4.amp(env4);

  osc5 = new p5.Oscillator();
  osc5.setType('triangle');
  osc5.freq(1);
  osc5.amp(env5);

  osc6 = new p5.Oscillator();
  osc6.setType('triangle');
  osc6.freq(1);
  osc6.amp(env6);

  osc7 = new p5.Oscillator();
  osc7.setType('triangle');
  osc7.freq(1);
  osc7.amp(env7);

  osc8 = new p5.Oscillator();
  osc8.setType('triangle');
  osc8.freq(1);
  osc8.amp(env8);

  osc9 = new p5.Oscillator();
  osc9.setType('triangle');
  osc9.freq(1);
  osc9.amp(env9);

  osc10 = new p5.Oscillator();
  osc10.setType('triangle');
  osc10.freq(1);
  osc10.amp(env10);

  osc11= new p5.Oscillator();
  osc11.setType('triangle');
  osc11.freq(1);
  osc11.amp(env11);

  osc12 = new p5.Oscillator();
  osc12.setType('triangle');
  osc12.freq(1);
  osc12.amp(env12);

  osc13 = new p5.Oscillator();
  osc13.setType('triangle');
  osc13.freq(1);
  osc13.amp(env13);

  osc14 = new p5.Oscillator();
  osc14.setType('triangle');
  osc14.freq(1);
  osc14.amp(env14);

}

function draw() {
  // keep draw() here to continue looping while waiting for keys

  var frequency = map(mouseX, 0, width, 50, 1000);
  frequency = constrain(frequency, 10, 5000);
  osc.freq(frequency);
  osc2.freq(frequency+50);
  osc3.freq(frequency+100);
  osc4.freq(frequency+150);
  osc5.freq(frequency+200);
  osc6.freq(frequency+250);
  osc7.freq(frequency+300);
  osc8.freq(frequency+350);
  osc9.freq(frequency+400);
  osc10.freq(frequency+450);
  osc11.freq(frequency+500);
  osc12.freq(frequency+550);
  osc13.freq(frequency+600);
  osc14.freq(frequency+650);


  background(0, 0, 0, 20);
  fill(255, 0, 0);
  stroke(255,0,0);
  var waveform = fft.waveform();  // analyze the waveform
  beginShape();
  strokeWeight(5);
  for (var i = 0; i < waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();

}

function keyPressed() {
  var keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }
  if (keyIndex == -1) {
    // If it's not a letter key, clear the screen
    background(230);
  } else {
      if (key == 'q'){
        osc.start();
        env1.triggerAttack(osc);
      }
      else if (key == 'w') {
        osc2.start();
        env2.triggerAttack(osc2);
      }
      else if (key == 'e') {
        osc3.start();
        env3.triggerAttack(osc3);
      }
      else if (key == 'r') {
        osc4.start();
        env4.triggerAttack(osc4);
      }
      else if (key == 't') {
        osc5.start();
        env5.triggerAttack(osc5);
      }
      else if (key == 'y') {
        osc6.start();
        env6.triggerAttack(osc6);
      }
      else if (key == 'u') {
        osc7.start();
        env7.triggerAttack(osc7);
      }
      else if (key == 'a') {
        osc8.start();
        env8.triggerAttack(osc8);
      }
      else if (key == 's') {
        osc9.start();
        env9.triggerAttack(osc9);
      }
      else if (key == 'd') {
        osc10.start();
        env10.triggerAttack(osc10);
      }
      else if (key == 'f') {
        osc11.start();
        env11.triggerAttack(osc11);
      }
      else if (key == 'g') {
        osc12.start();
        env12.triggerAttack(osc12);
      }
      else if (key == 'h') {
        osc13.start();
        env13.triggerAttack(osc13);
      }
      else if (key == 'j') {
        osc14.start();
        env14.triggerAttack(osc14);
      }
    }
  }


function keyReleased() {

  if (key === 'q') {
    env1.triggerRelease(osc);
  }
  else if (key == 'w') {
    env2.triggerRelease(osc2);
  }
  else if (key == 'e') {
    env3.triggerRelease(osc3);
  }
  else if (key == 'r') {
    env4.triggerRelease(osc4);
  }
  else if (key == 't') {
    env5.triggerRelease(osc5);
  }
  else if (key == 'y') {
    env6.triggerRelease(osc6);
  }
  else if (key == 'u') {
    env7.triggerRelease(osc7);
  }
  else if (key == 'a') {
    env8.triggerRelease(osc8);
  }
  else if (key == 's') {
    env9.triggerRelease(osc9);
  }
  else if (key == 'd') {
    env10.triggerRelease(osc10);
  }
  else if (key == 'f') {
    env11.triggerRelease(osc11);
  }
  else if (key == 'g') {
    env12.triggerRelease(osc12);
  }
  else if (key == 'h') {
    env13.triggerRelease(osc13);
  }
  else if (key == 'j') {
    env14.triggerRelease(osc14);
  }
  return false; // prevent any default behavior
}

function mouseClicked() {
  env.play(oscT, 0 , 1);
}
