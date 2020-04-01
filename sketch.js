const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,bob,fixed,bg;

function preload()
{
bg=loadImage("bg.jpg");
}
function setup()
{
    var canvas = createCanvas(300,600);

    engine = Engine.create();
    world = engine.world;

var options_ground=
{
    isStatic:true
}
var options_fixed = {
    isStatic:true
    
}

var options_bob = {

    restitution : 1.0,
    density : 70
  
  }

  
  
ground=Bodies.rectangle(200,330,400,20,options_ground);
bob=Bodies.circle(147,350,20,options_bob);
fixed=Bodies.rectangle(147,220,200,20,options_fixed);
World.add(world,ground);
World.add(world,bob);
World.add(world,fixed);

var options = {
    bodyA : bob,
    bodyB : fixed,
    stiffness:0.5,
    length : 200
  }
  var thread = Constraint.create(options);
  World.add(world,thread);
  

}

function draw()
{
   background(bg);
    Engine.update(engine);
    rectMode(CENTER);
//rect(fixed.position.x,fixed.position.y,200,20);

strokeWeight(5);
stroke("#212021");
fill("#FFCB05");
//cirlceMode(RADIUS);

line(bob.position.x,bob.position.y,fixed.position.x,fixed.position.y);
circle(bob.position.x,bob.position.y,70);




if(keyCode===32){
bob.position.y = mouseY;
bob.position.x = mouseX;
}

else if (keyCode === ENTER){
bob.position.x = 200;

}

}

