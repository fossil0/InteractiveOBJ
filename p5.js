
//Written by William Luk
// posts data to an Adafuit.io feed
let url = 'Enter your AIP Key';

var data = 160;

function setup() {
  createCanvas(windowWidth,windowHeight);
  myButton = createButton('CLICK ME');
  myButton.mousePressed(press);
  myButton.mouseReleased(off);
}

function draw() {
    
  background(120);
}

function press() {
  data = 160;
  console.log(data);
  sendData(data);
}

function off() {
  data = 180;
  console.log(data);
  sendData(data);
}

function sendData(turnOn){
  let postData ={
    "value": turnOn,
    "X-AIO-Key": "Enter your adafruit io key"
  };
  httpPost(url, 'json', postData, function(result){
    console.log(result);
  });
}
