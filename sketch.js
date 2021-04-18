var canvas;
var music;
var box1,box2,box3,box4;
var block;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 box1=createSprite(0,580,360,30)
 box1.shapeColor="yellow"
 box2=createSprite(295,580,200,30)
 box2.shapeColor="pink"
box3=createSprite(515,580,200,30)
box3.shapeColor="blue"
box4=createSprite(740,580,220,30)
box4.shapeColor="green"
//create box sprite and give velocity
block=createSprite(random(20,750),100,40,40)
block.shapeColor="white"
block.velocityX=4
block.velocityY=9
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
 
   edges = createEdgeSprites()


    //add condition to check if box touching surface and make it box
    if(box1.isTouching(block)&&block.bounceOff(box1))
    {
        block.shapeColor="yellow"
       music.play();
    
    }
    if(box2.isTouching(block))
    {
        block.shapeColor="pink"
        block.velocityX=0
        block.velocityY=0
        music.stop();
    
    }
    if(box3.isTouching(block)&&block.bounceOff(box3))
    {
        block.shapeColor="blue"
       
    
    }
    if(box4.isTouching(block)&&block.bounceOff(box4))
    {
        block.shapeColor="green"
       
    
    }
    drawSprites();
    



}
