
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,ground
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
  
monkey= createSprite(60,229,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.15;
  
  ground=createSprite(300,295,600,10);
  ground.velctiyX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  stoneGroup = createGroup();
  bananasGroup = createGroup();
}


function draw() {
  background("black")
stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("white");
   
  survivalTime=Math.ceil(frameCount/frameRate())
 text("survival Time: "+ survivalTime,15,50 )
  if(keyDown("space")&& monkey.y >= 220) {
    monkey.velocityY = -12;
  }
  
  score = score + Math.round(getFrameRate()/60);
  if(score>0 && score%100 === 0){
    }
  monkey.velocityY=monkey.velocityY+1
  monkey.collide(ground);
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  monkey.depth = monkey.depth + 1;
spanObstacle();
  spawnBanana();
  score=0
  drawSprites();
}

function spanObstacle()
{
  if (frameCount%200===0) {
    stone = createSprite(610, 260,10,10);
    stone.x=610 ;
    stone.addImage(obstacleImage);
    stone.velocityX=-5;
    stone.lifetime=122;
    stone.scale=0.18;
    //stone.debug=true;
    stone.setCollider("rectangle",0,0,350,350);
    stoneGroup.add(stone);
     
  }
}
function spawnBanana(){
  if (frameCount%120===0) {
    banana = createSprite(610, 347,10,10);
    banana.x=610;
    banana.y=random(100,150);
    banana.addImage(bananaImage);
    banana.velocityX=-5;
    banana.lifetime=122;
    banana.scale=0.08;
    bananasGroup.add(banana);
  }
}




