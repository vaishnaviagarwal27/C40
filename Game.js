class Game{
constructor(){
   

}
  getState(){
    database.ref('gameState').on("value",function(data){
        gameState=data.val();
    });

  }
  update(state){
    database.ref('/').update({
      gameState:state
    })
}
  start(){
  if(gameState===0){
      player=new Player();
      player.getCount();
      form = new Form();
      form.display();
  }
  car1 = createSprite(100,200);
  car1.addImage("car1",car1Image);
  car2 = createSprite(300,200);
  car2.addImage("car2",car2Image);
  car3 = createSprite(500,200);
  car3.addImage("car3",car3Image);
  car4 = createSprite(700,200);
  car4.addImage("car4",car4Image);
  cars = [car1,car2,car3,car4];
   }
 play(){
  form.hide();
  textSize(30);
  text("gameStart",120,100);
  Player.getPlayerInfo();
  player.getCarsAtEnd();
  
  if(allPlayers !== undefined){
 //   var y_position = 130;
 background(groundImage);
 image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
 var index = 0;
 var x = 200;
 var y;
    for(var i in allPlayers){
        index = index+1;
        x = x+200;
        y = displayHeight - allPlayers[i].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;
     if(index === player.index){
         fill("red");
         stroke ("black");
         ellipse(x,y,60,60);
         cars[index - 1].shapeColor = "red";
         camera.position.x = displayWidth/2;
         camera.position.y = cars[index - 1].y;
     }
   //  y_position+=20;
   //textSize(15);
    // text(allPlayers[i].name+":"+allPlayers[i].distance,120,y_position);
    }
    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
        player.distance+=50
        player.update();
    }
    if(player.distance>displayHeight*5){
        gameState = 2;
        console.log(player.rank);
        player.rank+=1;
        Player.updateCarsAtEnd(player.rank);
    }
    drawSprites();
 }
 end(){
     console.log("game ended");
     console.log(player.rank);
 }
}
