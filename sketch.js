
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1005,145,30);
	mango3=new mango(975,278,30);
	mango4=new mango(1115,215,30);
	mango5=new mango(1225,235,30);

	stoneObj=new Stone(265,370,50,25)

	treeObj=new tree(1050,610);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

	//console.log(mouseX,mouseY)

  background(230);
  //Add code for displaying text here!
  image(boy ,200,370,200,300);
  
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stoneObj.display();
  groundObject.display();
}
/*function keyPressed(){
	if(keyCode === "w"){
		Matter.Body.applyForce(stoneObj.body,stoneObj.body.position, {x:85,y:-85 })
  }
}*/

///function detectCollision (lmango,lstone){
 
//}//