

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  
  let sqCol = 0;
  for (var x = 0;  x <= width; x = x + width/8) {
    for (var y = 0; y <= height; y += height/8) {
      if (sqCol % 2) {
        fill ("#50C878"); 
      } else { 
          fill ('Bisque'); 
      }  
    rect (x, y, width/8, height/8); 
      sqCol++
    }
  }
  noStroke();
  for (let piecePos = 25; piecePos <= width - 25; piecePos += 50) {
    fill(255);
  pawn(piecePos, 312, 20);
    fill(0);
  pawn(piecePos, 60, 20);
  
  }
  fill(255)
  rook(25,368,0)
}
{
}
function pawn(x, y, head) { 
  rect(x -6, y, width/30, 30);
  ellipse(x, y, head, head);
  ellipse(x, y+25, width/20 +10, 20);
}

function rook(x,y,s) {
  ellipse(x, y+25, width/20 +10, 20);
  rect(x-7, y, width/30, 30);
 rect(30, 355, 5, 15);
  rect(22.5, 355, 5, 15);
  rect(15, 355, 5, 15);
}
function rooks(x,y,s){
  ellipse(x, y+25, width/20 +10, 20);
  rect(x-7, y, width/30, 30);
 rect(30, 30, 5, 15);
  rect(22.5, 30, 5, 15);
  rect(15, 30, 5, 15);
}

