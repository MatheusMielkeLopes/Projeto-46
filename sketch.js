var space
var spaceship
var alien
var alien2
var alien3
var spaceimg
var spaceshipimg
var alienimg
var alienimg2
var alienimg3
var shot
var shotimg
var alienGroup
var alien2Group
var alien3Group
var shotGroup
var score=0




function preload(){
  spaceimg = loadImage ("space.jpg")
  spaceshipimg = loadImage ("spaceship.png")  
  alienimg = loadImage ("alien.png")
  alienimg2 = loadImage ("alien2.png")
  alienimg3 = loadImage ("alien3.png")
  shotimg = loadImage ("shot.png")
}


function setup() {
  createCanvas(800,400);
  spaceship = createSprite(400, 350, 50, 50);

  spaceship.addImage(spaceshipimg)
  
  score = 0

  spaceship.scale = 0.27
  
  alienGroup = createGroup()
  alien2Group = createGroup()
  alien3Group = createGroup()
  shotGroup = createGroup()

}

function draw() {
  background(spaceimg);  

  

  spaceship.x = World.mouseX;

  edges= createEdgeSprites();
  spaceship.collide(edges);

  if (frameCount % 100 === 0) {
    drawAlien();
  }

  if (frameCount % 130 === 0) {
    drawAlien2();
  }

  if (frameCount % 160 === 0) {
    drawAlien3();
  }

  if(keyDown("space")){
    shootBullet();
  }

  if(alienGroup.collide(shotGroup)){
    alienGroup.destroyEach()
    shotGroup.destroyEach()
    score=score+2;
  }

  if(alien2Group.collide(shotGroup)){
    alien2Group.destroyEach()
    shotGroup.destroyEach()
    score=score+6;
  }

  if(alien3Group.collide(shotGroup)){
    alien3Group.destroyEach()
    shotGroup.destroyEach()
    score=score+10;
  }

  
 
 fill("#FFFF");
 textAlign("center");
 textSize(20);
 text("Pontuação: " + score, width - 710, 30);
  
  drawSprites();
}


function drawAlien(){
  alien = createSprite(random(50,750),0,40,40);
  alien.addImage(alienimg);
  alien.scale = 0.7;
  alien.velocityY = 5;
  alien.lifetime = 400;
  alienGroup.add(alien);
}

function drawAlien2(){
  alien2 = createSprite(random(50,750),0,40,40);
  alien2.addImage(alienimg2);
  alien2.scale = 0.7;
  alien2.velocityY = 5;
  alien2.lifetime = 400;
  alien2Group.add(alien2);
}

function drawAlien3(){
  alien3 = createSprite(random(50,750),0,40,40);
  alien3.addImage(alienimg3);
  alien3.scale = 0.7;
  alien3.velocityY = 5;
  alien3.lifetime = 400;
  alien3Group.add(alien3);
}

function shootBullet(){
  shot = createSprite(0, 340, 30, 30)
  shot.x = spaceship.x 
  shot.addImage(shotimg)
  shot.scale=0.1
  shot.velocityY= -7
  shotGroup.add(shot)
}