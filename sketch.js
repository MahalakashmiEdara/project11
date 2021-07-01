var runner,runnerImg,path,pathImg,left,right;
function preload(){
  runnerImg = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg=loadImage("path.png");
    
 
}

function setup() {

        createCanvas(400, 400);

        path=createSprite(200,200);
        path.addImage(pathImg);
        path.scale=1.2;

        runner = createSprite(170,330,20,50);
        runner.addAnimation("Runner", runnerImg);
        runner.scale = 0.5;

        left=createSprite(0,0,100,400);
        left.visible=false;

        right=createSprite(400,0,100,400);
        right.visible=false;
        
}


function draw() {
  background(0);
//Moving background
path.velocityY = 4;

runner.x=mouseX;

edges=createEdgeSprites();
runner.collide(edges[3]);
runner.collide(left);
runner.collide(right);



//coad to reset the background
if(path.y > 400) {
  path.y = height/2;

}

drawSprites();
}











