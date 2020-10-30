var movingRect;
var fixedRect;
function setup(){
    createCanvas(400,400);
    movingRect=createSprite(40,200,30,60);
    fixedRect=createSprite(300,200,20,40);
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
    movingRect.debug=true;
    fixedRect.debug=true;
    movingRect.velocityX=+3;
    fixedRect.velocityX=-3;
}
function draw(){
    background("black");
    
    if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
        fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){
            movingRect.velocityX=movingRect.velocityX*-1;
            fixedRect.velocityX=fixedRect.velocityX*-1;
        }
        if(fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2&&
            movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2)
            {
                movingRect.velocityY=movingRect.velocityY*-1;
                fixedRect.velocityY=fixedRect.velocityY*-1;
            }

    drawSprites();
}