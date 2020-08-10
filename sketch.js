//Create variables here
var dog,happyDog,database,foodS,foodStock,dog1;

function preload()
{
  dog=loadImage("Images/dogImg.png")
  happyDog=loadImage("Images/dogImg1.png")
	//load images here
}

function setup() {
  createCanvas(500,500);
  
  database=firebase.database();
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
  dog1=createSprite(250,250,50,50)
  dog1.addImage("dog1",dog)
}


function draw() {  
background(46,139,87)
if(keyWentup(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog);
  
}
  drawSprites();
  textSize(20)
  stroke("red")
   text("press UP_ARROW to feed the dog milk",150,150)

  //add styles here
}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
   databaase.ref('/').update({
     Food:x
   })
}



