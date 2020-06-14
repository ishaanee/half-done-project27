var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint= Matter.Constraint

var paper1;
var line1
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  paper1= new Paper(220,550,70)
  paper2= new Paper(290,550,70)
  paper3= new Paper(360,550,70)
  paper4= new Paper(430,550,70)
  paper5= new Paper(500,550,70)

 
  ground = new Roof(360,200,400,20);
 
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper1.display();
  paper2.display();
  paper3.display();
  paper4.display();
  paper5.display();
  
 
  //chain1.display();
  ground.display();
  
  
  
  drawSprites();
 
}
function fly()
    {
        this.chain.bodyA=null;
        
    }
    

    
    function mouseDragged ()
{
    Matter.Body.setPosition(chain.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    chain.fly()
}





