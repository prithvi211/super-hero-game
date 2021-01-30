
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var background;



function preload(){



}
function setup() {
  createCanvas(800, 400);
  
  engine = Engine.create();
  world  = engine.world;

  ground = new Ground();
  hero = new Hero(300,50,50);
  fly = new Fly(hero.body,{x:300,y:50});

  box1 = new Box(400,350,50,50);
  box7 = new Box(400,350,50,50);
  box2=new Box(400,300,50,50);
  box3 = new Box(400,250,50,50);
  box4 = new Box(400,200,50,50);
  box5=new Box(400,150,50,50);
  box6 = new Box(400,100,50,50);

  box8 = new Box(450,350,50,50);
  box9 = new Box(450,350,50,50);
  box10=new Box(450,300,50,50);
  box11 = new Box(450,250,50,50);
  box12 = new Box(450,200,50,50);
  box13=new Box(450,150,50,50);
  box14 = new Box(450,100,50,50);

  box15 = new Box(500,350,50,50);
  box16 = new Box(500,350,50,50);
  box17=new Box(500,300,50,50);
  box18 = new Box(500,250,50,50);
  box19 = new Box(500,200,50,50);
  box20=new Box(500,150,50,50);
  box21 = new Box(500,100,50,50);
}

function draw() {
  background("GamingBackground.png");
  Engine.update(engine);
  background("lightblue");  
  ground.display();
  hero.display();
  fly.display();

  fill("red");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("red");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  fill("red");
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();


}

function mouseDragged(){

  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});

}