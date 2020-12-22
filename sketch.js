
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(400,500,50,50);
	bob2 = new Bob(350,500,50,50);
	bob3 = new Bob(300,500,50,50);
	bob4 = new Bob(450,500,50,50);
	bob5 = new Bob(500,500,50,50);
	roof = new Roof(400,250,width,10);
	chain1 = new Chain(bob1.body, {x:bob1.x, y: 250});
	chain2 = new Chain(bob2.body,{x:bob2.x, y: 250});
	chain3 = new Chain(bob3.body,{x:bob3.x, y: 250});
	chain4 = new Chain(bob4.body,{x:bob4.x, y: 250});
	chain5 = new Chain(bob5.body,{x:bob5.x, y: 250});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
 
  drawSprites();
}



