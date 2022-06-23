
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground

var distance
var pos

var sprite

var stones = [];

var time = 0
var time2 = 100

function setup() {
  createCanvas(800,windowHeight);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Base(0, height - 10, width * 2, 20);

  sprite = createSprite(200,200,20,20)

}


function draw() 
{


  background(51);
  Engine.update(engine);
  

  for (var stone of stones) {
    stone.show();

  
  }
  ground.show()

  dropStone()

  if (frameCount % 2400 === 0) {
    time = time + 1
  }
if (frameCount % 240 === 0) {
  time2 = time2 - 1
}
if (time2<20) {
  time2 = time2 + 1
}
drawSprites()
}

function dropStone(){
  if (frameCount % time2 === 0) {
    
  
  for (var i = 0; i <= time; i++) {
    var x = Math.round(random(30, 780));
    var y = 10;
    var stone = new Stone(x, y, 80, 80);
   
    stones.push(stone);
  }



 
  }
  if(collide(stone,ground,40) == true)
  {
    engine.world.gravity.y = -1;
    ground.position.x = stone.position.x;
    ground.position.y = stone.position.y;
  }
}

function collide(body,sprite,x)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=x)
            {
              
               return true; 
            }
            else{
              return false;
            }
         }
}


