var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  bullet=createSprite(50,200,30,30);
  thickness=random(28,83);
  speed=random(10,25);
  weight=random(223,321);
  
  
  //speed=random(55,90);
  wall=createSprite(400,200,thickness,400/2);

  //car.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  
  bullet.velocityX=speed;

  function hasCollided(bullet,wall){
    bulletRightedge=bullet.x+bullet.width;
    wallLeftedge=wall.x;
    if(bulletRightedge>=wallLeftedge){
      return true
    }
    return false;
  }

  if(hasCollided(bullet,wall)){

    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>0.1){
      bullet.shapeColor=color(255,0,0);
    } 
    
     if(damage<0.4 ){
      bullet.shapeColor=color(0,255,0);
    }
  }
  console.log(damage);
  drawSprites();
}