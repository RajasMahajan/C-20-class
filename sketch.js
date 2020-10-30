var movingRect;
var fixedRect;
function setup(){
    createCanvas(400,400);
    movingRect=createSprite(40,40,30,60);
    fixedRect=createSprite(200,200,20,40);
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
    movingRect.debug=true;
    fixedRect.debug=true;
}
function draw(){
    background("black");
    movingRect.y=mouseY;
    movingRect.x=mouseX;

    if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
        fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
        fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2&&
        movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){
        movingRect.shapeColor="red";
        fixedRect.shapeColor="red";
    }
    else
    {
        fixedRect.shapeColor="blue";
        movingRect.shapeColor="blue";
    }
    drawSprites();
}