
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1;
var engine,world;
var plane;
var stone;
var rubber;
var iron;
var sand1,sand2,sand3,sand4,sand5,sand6;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	plane = new Plane(600,height,1200,20);
	
	hammer1 = new Hammer(200,400,120,300);
	stone = new Stone(120,340)

	rubber = new Rubber(500,560,130,300);

	iron = new Iron(340,260,100,130);

	sand1 = new Sand(150,250,10,10);
	sand2 = new Sand(200,300,10,10);
	sand3 = new Sand(250,350,10,10);
	sand4 = new Sand(300,400,10,10);
	sand5 = new Sand(350,450,10,10);
	sand6 = new Sand(400,500,10,10);


	Engine.run(engine);
	
  
}


function draw() {
  
  background("blue");
  

  hammer1.display();
  plane.display();
  stone.display();
  rubber.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();

  drawSprites();
 
}



