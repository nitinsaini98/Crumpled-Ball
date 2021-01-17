const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbin,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
;
	
	bin1 = new Dustbin(550,640,20,80);
	bin2 = new Dustbin(610,670,110,20);
	bin3 = new Dustbin(660,640,20,80);
	ball = new Ball(100,600,20)
	ground = new Ground(400,680,800,10)
	
  
}


function draw() {
  
	Engine.update(engine)
	background(0);
	bin1.display();
	bin2.display();
	bin3.display();
	ball.display();
	ground.display();
 
}

function keyPressed(){
	
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.ball,ball.ball.position,{x:65,y:-85});
	}
}

