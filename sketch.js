
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine,world;
var stone,stoneimg,boy,tree;
var man1,man2,man3,man4,man5,man6,man7,man8
var ground1,land
var chain;
var square;
var show = 1
var notshow = 0
var img = 0;

function preload(){  
   boy = loadImage("boy.png")
   tree = loadImage("tree.png")
   land = loadImage("land.png")
   stoneimg = loadImage("stone.png")
   square = loadImage("scorerect.png")
}
function setup() {
	createCanvas(1000, 500);
	engine = Engine.create();
	world = engine.world;

	stone = new Stone(68,312,20,20)
	ground1 = new ground(width/2,470,width,10)
	man1 = new Mango(740,200,40,45)
	man2 = new Mango(780,125,48,53)
    man3 = new Mango(820,70,38,43)
	man4 = new Mango(878,60,40,45)
	man5 = new Mango(925,120,45,50)
	man6 = new Mango(945,200,40,50)
	man7 = new Mango(890,175,48,48)
	man8 = new Mango(835,130,40,46)
	man9 = new Mango(815,215,43,50)
	chain = new Chain(stone.body,{x:68,y:310})
	Engine.run(engine);
}
function draw() {
	if(img == 0){
		image(square,350,100,100,30)
	}
	background(51,171,240)
	if(img == 1){
		image(square,425,55,210,60)
	}
  rectMode(CENTER);
  imageMode(CENTER);
  image(boy,115,387,170,280)
  ground1.display()
  image(land,width/2,477,width+5,40)
  image(tree,830,240,315,470)
  stone.display()
  image(stoneimg,stone.body.position.x,stone.body.position.y,50,50)
  
  man1.display()
  man2.display()
  man3.display()
  man4.display()
  man5.display()
  man6.display()
  man7.display()
  man8.display()
  man9.display()
  chain.display()
  
  detectollision(stone,man1)
  detectollision(stone,man2)
  detectollision(stone,man3)
  detectollision(stone,man4)
  detectollision(stone,man5)
  detectollision(stone,man6)
  detectollision(stone,man7)
  detectollision(stone,man8)
  detectollision(stone,man9)
   
  if(man1.body.isStatic == false && man2.body.isStatic == false && man3.body.isStatic == false && man4.body.isStatic == false && man5.body.isStatic == false && man6.body.isStatic == false && man7.body.isStatic == false && man8.body.isStatic == false && man9.body.isStatic == false){
	 textSize(30)
	 stroke("green")
	 strokeWeight(2)
	 fill("red")
	 text("YOU WON!",450,95)
	 img = 1
  }
} 
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	chain.fly()
}
function keyPressed(){
	if(keyCode == 32){
		chain.attach(stone.body)
	}
}



