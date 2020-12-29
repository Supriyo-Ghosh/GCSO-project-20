var car, wall;
var speed, weight;

function setup() {
  createCanvas(400,400);

  speed = random(500,90)
  weight = random(140,1500)

  car = createSprite(50,200,50,50);
 
  car.velocityX=3;

  wall = createSprite (350, 200, 20, 60);
 
}

function draw() {
  background(0);

 if (wall.x-car.x < (car.width+wall.width)/2){
   car.velocityX = 0;
   var deformation = 0.5 * weight * speed * speed/22509;
   if (deformation>180);
 }
 {
   car.shapeColor=color(255,0,0,)
 }
 if (deformation>180 && deformation>100)
{
  car.shapeColor=color(230,230,0)
}
if (deformation<100)
{
  car.shapeColor=color(0,225,0)
}

 drawSprites();
}