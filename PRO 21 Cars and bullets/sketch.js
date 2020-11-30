var bullet,wall;
var thickness, speed, weight; 
function setup() {
  createCanvas(1600, 400);

	thickness=random(22,83)
	speed=random(223,321)
	weight=random(30,52)

	bullet = createSprite(50,150,30,30);
	bullet.velocityX = speed;
	bullet.shapeColor = "white";

	wall=createSprite(1200, 200, thickness,height/2);   
  	wall.shapeColor=color(80,80,80)
}	

function draw() {
  background(0);
  if(hasCollided(bullet, wall))
	{
		bullet.velocityX = 0;
		var damage = 0.5 * weight *speed *speed/(thickness *thickness *thickness)

		if(damage>10)
		{
			wall.shapeColor = "red";
		}

		if(damage<10)
		{
			wall.shapeColor = color(0,255,0);
		}
	}
  drawSprites();
}
function hasCollided(myBullet, myWall){
	bulletRightEdge = myBullet.x + myBullet.width;
	wallLeftEdge = myWall.x;
	   if(bulletRightEdge >= wallLeftEdge)
	   {
		   return true
	   }
	   return false;
}
