class Game {
    constructor() {
this.resetButton=createButton("");

    }
    start() {
        player = new Player();
        playerCount= player.obtainNumber();
        
        formulary = new Form();
        formulary.display();

        player1=createSprite(width/2-50,height-100,30,30);
        player1.shapeColor="red";

        player2=createSprite(width/2+50,height-100,30,30);
        player1.shapeColor="blue";

        players=[player1,player2];
    }

    play() {
        this.manejarElementos();
        this.presionarBotonReset()
        Player.obtenerInfoPlayers();
        formulary.ocultar();
        Player.obtenerInfoPlayers();
        if (allPlayers !== undefined) {
            background(background2);
           
            var index = 0
            for (var pl in allPlayers) {
                index = index + 1
                var x = allPlayers[pl].positionX;
                var y = height - allPlayers[pl].positionY;

                players[index-1].position.x=x;
                players[index-1].position.y=y;
            }
            if(index===player.index){
                stroke(10);
                fill("green")
                ellipse(x,y,40,40);

                camera.position.x=players[index-1].position.x;
                camera.position.y=players[index-1].position.y;
            }
            this.controles();
            drawSprites();
        }
    }

    gameState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function (data){
            gameState = data.val();
        });
    }

presionarBotonReset(){
    this.presionarBotonReset.mousePressed(()=>{
        database.ref("/").set({
                playerCount:0,
                gameState:0,
                players:{}
        });
        window.location.reload();
    });        
}




    updateState(state) {
        database.ref("/").update({
            gameState: state
        });
    }

    controles(){
        if(keyIsDown(UP_ARROW)){
            player.positionY +=5;
            player.updatePosition();
        }
    

        if(keyIsDown(DOWN_ARROW)){
        player.positionY -=5;
        player.updatePosition();
        
        }

        if(keyIsDown(RIGHT_ARROW)){
            player.positionY +=5;
            player.updatePosition();
        }
    

    if(keyIsDown(LEFT_ARROW)){
        player.positionY -=5;
        player.updatePosition();
        }
}

manejarElementos(){
    formulary.ocultar();
   this.resetButton.class("resetButton");
   this.resetButton.position(width/2+200,100);
   };


}