//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock
var dogImg
var happyDogImg
var database;
function preload()
{
  //load images here
  dogImg=loadImage('Images/dogImg.png');
  happyDogImg= loadImage('Images/dogImg1.png');

}

function setup() {
  createCanvas(500, 500);
  database= firebase.database();
  dog=createSprite(250,250,50,50);
  dog.addImage(dogImg);
  dog.scale=0.2;
  foodstock=database.ref('food');
  foodstock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImg);
}
  drawSprites();
  //add styles here
  textSize(20);
  fill('black');
  text('Food remaining'+ foodS, 250, 100);
  fill('black');
  text('PRESS UP_ARROW KEY TO FEED DRAGO MILK!', 20,400);

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



