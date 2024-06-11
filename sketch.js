function setup() {
  createCanvas(400, 400);
}

function draw() { 
background('white');
  
fill('#009688');  
textSize(60) ; 
textAlign(CENTER,CENTER);  
 textFont('georgia') 

  
let maximo =width;  
let minimo=0;  

console.log('Viajando'.length);
let palavra='Viajando';
let quantidade=map(mouseX,0,width,1,palavra.length);
let parcial=palavra.substring(0,quantidade);
text(parcial,200,200)




}