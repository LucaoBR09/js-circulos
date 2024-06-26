let cor;
let circuloX; // horizontal
let circuloY; // vertical

function setup() {
  createCanvas(400, 400);
  background(color(255,255,255));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  
  circuloX = [0, 0, 0];
  circuloY = [random(height), random(height), random(height)];
}

function draw() {
  
  fill(random(0, 255), random(0, 255), random(0, 255));
  
  for(let contador in circuloX) {
    circle(circuloX[contador], circuloY[contador], random(0, 32));    
    circuloX[contador]+= random(0,5);
    circuloY[contador]+= random(-23,23); 
    
    if(circuloX[contador] >= width){
      circuloX[contador] = 0;
      circuloY[contador] = random(height);
    }
  }
  
 
}
