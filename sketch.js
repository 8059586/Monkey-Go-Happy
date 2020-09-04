
var player, monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

player = createSprite(100,340,20,50);
player.addAnimation("monkey",monkey_running);
player.scale=0.1;
  
ground = createSprite(400,350,800,10);
ground.velocityX=-4;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
var survivalTime = 0;
  
}


function draw() {

   background(180);
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100, 50);
  
  player.collide(ground);
  if (keyDown("space")&& player.y >= 150){
  player.velocityY = -12;
  }
  
  player.velocityY = player.velocityY +0.8;
  
  bananas();
  obstacles();
  
  if(obstacleGroup.isTouching(player)){
        ground.velocityX = 0;
        player.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        bananaGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
       bananaGroup.setLifetimeEach(-1);
    
    
    }
  
  drawSprites();
}

function bananas(){
if (frameCount % 80 === 0){
  banana = createSprite(600,120,40,10);
  banana.y = Math.round(random(120,200));
  banana.addImage("Banana",bananaImage);
  banana.scale=0.05;
  banana.velocityX = -3;
  
  banana.lifetime = 200;
  
  bananaGroup.add(banana);
}
}


function obstacles(){
if (frameCount % 300 === 0){
  obstacle=createSprite(600,320,40,10);
  obstacle.addImage("Stone",obstacleImage);
  obstacle.scale=0.15;
  obstacle.velocityX = -3;
  
  obstacle.lifetime = 200;
  
  obstacleGroup.add(obstacle);
 }
}