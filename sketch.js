let globos = []; // variables en js. Arrays en js.  
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(100,220,100);
  for (let i=0; i<globos.length; i++) {
    globos[i].update();
    globos[i].show();
  }
}

function mousePressed() {
  globos.push(new Globo(mouseX,mouseY)); 
}
       