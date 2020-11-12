var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage, groundImage;
var FoodGroup, obstacleGroup;
var score;
var SurvivalTime;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {

  createCanvas(400, 400);

  //creating a sprite for monkey.
  monkey = createSprite(65, 330, 50, 40);
  //adding animation to the monkey.
  monkey.addAnimation("monkeyrunning", monkey_running);
  monkey.scale = 0.1;

  //crating a sprite for ground.
  ground = createSprite(400, 350, 900, 10);
  // dividing the ground into two.
  ground.x = ground.width / 2;
}




function draw() {

  // giving background colour as lightblue.
  background("lightblue");

  stroke("white");
  textSize(20);
  fill("black");
  text("Score: " + score, 500, 50);

  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime = Math.ceil(frameCount / frameRate())
  text("SurvivalTime: ", SurvivalTime, 100, 50)

  text.depth = monkey.depth;
  monkey.depth = monkey.depth + 1;

  //jump when the space key is pressed.
  if (keyDown("space") && monkey.y >= 200) {
    monkey.velocityY = -18;
  }
  //add gravity.
  monkey.velocityY = monkey.velocityY + 0.8;

  // monkey collide with ground.
  monkey.collide(ground);

  // giving velocity to the ground.
  ground.velocityX = -10;

  // reseting the ground.
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  //text(mouseX + ","+ mouseY,mouseX,mouseY);

  food();
  obstacles();

  drawSprites();
}

function food() {

  if (frameCount % 80 === 0) {
    banana = createSprite(400, 130, 10, 30);
    banana.y = Math.round(random(120, 200))
    banana.addImage("banana", bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;

    banana.lifetime = 130;

    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  }

}

function obstacles() {

  if (frameCount % 200 === 0) {
    obstacle = createSprite(400, 310, 40, 40);
    obstacle.addImage("obstacle", obstacleImage)
    obstacle.scale = 0.2
    obstacle.velocityX = -3

    obstacle.lifetime = 130
  }

}