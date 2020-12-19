
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,b1,b2,b3;
var engine;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 400);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(200,200,50,50);
    ground=new Ground(700, 390, 1400, 10)
	dustbin=new dustbin(1200, 380);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper.display();
  ground.display();
  dustbin.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85}); 

	}
}



