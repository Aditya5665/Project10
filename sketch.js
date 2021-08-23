var seaImg;
var shipImg;
var ship;
var bg;
function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  bg = createSprite(630,200,300,300);
  bg.addImage(seaImg);
  ship = createSprite(50,210,50,50);
  ship.addAnimation("run",shipImg);
}

function draw() {
  background("Red");
  bg.scale = 0.3;
  ship.scale = 0.1;
  bg.velocityX = -1; 
  if(bg.x < 200){
    bg.x = 630
  }
  drawSprites();
}