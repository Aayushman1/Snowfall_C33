const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var bg, bgImg
var boy, boyImg
var snowman, snowmanImg
var ch, chImg
var snow =[], snowImg
var engine,world

function preload() {
  bgImg=loadImage("Capture.PNG")
  boyImg=loadImage("boy.png")
  chImg=loadImage("jingle.png")
  //snowImg=loadImage("snowImg")
}

function setup() {
 engine=Engine.create()
 world=engine.world;
  createCanvas(1000,600);
if(frameCount%50==0){
  for(var i=0;i<200;i++){
    snow.push(new Snow(random(50,1000),random(50,1000)))
  }
}
boy=createSprite(0,320,10,10)
boy.addImage(boyImg)
boy.scale=0.5
boy.velocityX=1.5
boy.velocityY=0.5
boy.lifetime=700
boy.isStatic=true

ch=createSprite(1000,200,10,10)
ch.addImage(chImg)
ch.velocityX=-1.5
ch.scale=0.6
ch.lifetime=1000
ch.isStatic=true




 
}

function draw() {
  background(bgImg); 
  Engine.update(engine)
  for(var i=0;i<200;i++){
    snow[i].showDrop()
    snow[i].updateY()
  }

  
  drawSprites();
}
