var car , wall
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
speed=random(223,321);
weight=random(30,52);

  car= createSprite(50,200,50,50);
  wall=createSprite(1500,200,50,weight/2);
  car.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  if (wall.x-car.x<(car.width+wall.width)/2) {
car.velocityX=0;
 deformation=0.5 * weight *speed*speed/22509;
if(deformation>180){
  car.shapeColor=("red");
}
if(deformation<180 && deformation>100){
  car.shapeColor=("yellow");
}
if(deformation<100){
  car.shapeColor=("green");
}

  }
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bullet.velocityX=0;
  var damage=0.5*width*speed*speed/(thickness *thickness*thickness);
  
  if(damage>10)
  {
wall.shapeColor=color(255,0,0);
  }
  if(damage<10)
  {
wall.shapeColor=color(0,255,0);
  }


  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}