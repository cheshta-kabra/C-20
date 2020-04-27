var moving_rectangle;
var fixed_rectangle;
function setup() {
  createCanvas(800,400);
  moving_rectangle=createSprite(400, 200, 50, 100);
  fixed_rectangle=createSprite(100, 200, 100, 50);
  moving_rectangle.shapeColor="blue";
  fixed_rectangle.shapeColor="blue";
  fixed_rectangle.velocityX=3;
  moving_rectangle.velocityX=-3;
}


function draw() {
  background("black");  
  //moving_rectangle.x=mouseX;
 // moving_rectangle.y=mouseY;
  var sum=fixed_rectangle.width/2+moving_rectangle.width/2;
  var sum1=fixed_rectangle.height/2+moving_rectangle.height/2;
  if(moving_rectangle.x-fixed_rectangle.x<sum
    &&fixed_rectangle.x-moving_rectangle.x<sum){
    //&&moving_rectangle.y-fixed_rectangle.y<sum1
    //&&fixed_rectangle.y-moving_rectangle.y<sum1){
    //moving_rectangle.shapeColor="red";
  //fixed_rectangle.shapeColor="red";
  fixed_rectangle.velocityX*=-1;
  moving_rectangle.velocityX*=-1
  }//else{
    //moving_rectangle.shapeColor="blue";
  //fixed_rectangle.shapeColor="blue";
//}
  drawSprites();
}