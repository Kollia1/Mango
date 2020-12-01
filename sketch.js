
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyimg=loadImage("boy.png")
	treeimg=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//tree=new Tree(700,650)

	mango1=new Mango(670,380)
	mango2=new Mango(710,420)
	mango3=new Mango(750,400)
	ground = new Ground(600,690,1200,20);
	//Create the Bodies Here.
	stone=new Stone(50,400)

	slingshot = new SlingShot(stone.body,{x:60, y:600});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  //tree.display()

  stone.display()
  image(boyimg,60,520,100,250)
  image(treeimg,580,210,250,500)
  mango1.display()
  mango2.display()
  mango3.display()

  detectCollision(stone,mango1)

}

function mouseDragged(){
    
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
        
    
}


function mouseReleased(){
    slingshot.fly();
    
}

function detectCollision(s1,m1){
	
	mPosition=m1.body.position
	sPosition=s1.body.position
	var distance=dist(sPosition.x,sPosition.y,mPosition.x,mPosition.y,)
	if(distance<=s1.r+m1.r){
		Matter.Body.setStatic(m1.body,false)
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:60,y:600});
		slingShot.attach(stone.body)
	}
}


