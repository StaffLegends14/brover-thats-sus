
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;



function setup() {
  
  createCanvas(800,800)
  engine = Engine.create();
  world = engine.world;
  pipe = createSprite(280, 410, 300, 30);
  pipe.shapeColor = "#654321";
  blower = createSprite(500, 350, 150, 150);
  blower.shapeColor = "#341c02";
  button = createImg("Start.png");
  imageMode(CENTER);
  button.position(400,500);
  button.size(200,200);
  button.mouseClicked(ora);
  ball = Bodies.circle(500,150,40,{isStatic: false});
  World.add(world,ball)

  rectMode(CENTER)


}

function draw() {
  background(0);

  



  drawSprites();
  var opt = {
    isStatic: true
  }
  spare = Bodies.rectangle(500, 350,  150,150,opt);
  //rect(spare.position.x,spare.position.y,150,150);

  Matter.Engine.update(engine);
  World.add(world,spare);
 
  ellipse(ball.position.x,ball.position.y,40,40);

 
}

function ora(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y: -0.1})
}







