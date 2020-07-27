var fixedRect, movingRect, square1, square2;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 300, 50, 70);
  movingRect=createSprite(400,100,70,50);
  square1=createSprite(700,300,30,30);
  square2=createSprite(600,200,40,40);
  fixedRect.velocityY=-4;
  movingRect.velocityY=4;

}

function draw() {
  background(255,255,255); 
  edges=createEdgeSprites();
  fixedRect.bounceOff(edges);
  movingRect.bounceOff(edges); 
  /*movingRect.x=mouseX;
  movingRect.y=mouseY;*/ 
  square1.x=mouseX;
  square1.y=mouseY;
  bounceOff(fixedRect,movingRect);

  if(isTouching(square1,square2)){
    square1.shapeColor="red";
    square2.shapeColor="red";
  }
  else{
    square1.shapeColor="green";
    square2.shapeColor="green";
  }
  
  drawSprites();
}


