class Player{
    constructor(){
       this.index = null;
       this.distance = 0;
       this.name = null;
       this.rank = 0;
    }

    getCarsAtEnd(){
       database.ref('carsAtEnd').on ("value",function(data){
         this.rank = data.val();
       });
    }
   static updateCarsAtEnd(rank){
      database.ref('/').update({
         carsAtEnd:rank
      });
    }

      getCount(){
        database.ref('playerCount').on("value",function(data){
            playerCount=data.val();
        });
    
      }
     
    
    updateCount(count){
        database.ref('/').update({
          playerCount:count
        })
    }
    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
          name:this.name,
          distance: this.distance
        })
    }
    static getPlayerInfo(){
        database.ref('players').on("value",function(data){
            allPlayers = data.val();
        });


    }
     /* start(){
      if(gameSate===0){
          player=new Player();
          player.getCount();
          form = new Form();
          form.display();
      }
    */
      }
    
    