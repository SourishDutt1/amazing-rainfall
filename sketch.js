const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var stand1, stand2, stand3, stand4, stand5, stand6, stand7;
var particles = [];
var plinkos = [];

function preload(){
   bg=loadImage("galaxy.jpg");
}
function setup() {
  createCanvas(800,800);
 
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 780, 1200, 10);

  stand1 = new Division(100, 680, 10, 200);
  stand2 = new Division(200, 680, 10, 200);
  stand3 = new Division(300, 680, 10, 200);
  stand4 = new Division(400, 680, 10, 200);
  stand5 = new Division(500, 680, 10, 200);
  stand6 = new Division(600, 680, 10, 200);
  stand7 = new Division(700, 680, 10, 200);

  for (var j = 50; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plink(j,175,10));
  }

  for (var j = 75; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plink(j,275,10));
  }

   for (var j = 50; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plink(j,375,10));
  }

   for (var j = 75; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plink(j,475,10));
     
  }

  

  
  
}

function draw() {

   background(bg);  
   Engine.update(engine);

   ground.display();

   stand1.display();
   stand2.display();
   stand3.display();
   stand4.display();
   stand5.display();
   stand6.display();
   stand7.display();

   for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  
  if(frameCount%60===0){
   particles.push(new Particle(random(10, 790), 10,10));
   
 }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

   

}