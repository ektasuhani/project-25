
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	
	//Create ground here.
	ground = Bodies.rectangle(width/2, 650, width, 20 , {isStatic:true} );
 	World.add(world, ground);
	 bottomBody=Bodies.rectangle(width/2+220,650,150,20,{isStatic:true});
	 leftBody=Bodies.rectangle(width/2+150,600,20,150,{isStatic:true});
	 rightBody=Bodies.rectangle(width/2+300,600,20,150,{isStatic:true});
	Engine.run(engine);
	World.add(world,bottomBody);
  World.add(world,leftBody);
  World.add(world,rightBody);
  paperobject=new Paper();
  dustbinobject=new Dustbin();
}
  



function draw() {
  rectMode(CENTER);
  background("white");
 rect(ground.position.x,ground.position.y,800,20)
  fill ("red");
  rect(bottomBody.position.x,bottomBody.position.y,150,20)
  fill ("red");
  rect(leftBody.position.x,leftBody.position.y,20,150);
  fill("red")
  rect(rightBody.position.x,rightBody.position.y,20,150);
  paperobject.display();
dustbinobject.display();
  drawSprites();
 
}

function keyPressed(){
if (keyCode===UP_ARROW);
Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:85,y:-85});
}



