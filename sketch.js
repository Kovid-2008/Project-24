const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;

var arrow;
var PlayerArcher;
var ComputerArcher;
var angle;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
   angle = PI/3;
  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(290, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object
   PlayerArcher = new playerarcher(300,player.body.position.y-49,100,60,angle);
  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  ComputerArcher = new computerarcher(
    width - 380,
    computerBase.body.position.y - 230,
    100,
    60
  );
  
  //Create an arrow Object
  arrow = new playerarrow(PlayerArcher.x,PlayerArcher.y,angle); 
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  
  arrow.display();
  computerBase.display();
  computer.display();
  
  PlayerArcher.display();
  ComputerArcher.display()

   
 console.log(arrow.position);
  
  


  }
  
function keyReleased(){
  if(keyCode === UP_ARROW){
    arrow.shoot();
  }
}

