class Player {
    constructor() {
        this.name = null;
        this.index = null;
        this.positionX = 0;
        this.positionY = 0;
    }

    addPlayer() {
        var playerIndex = "players/player" + this.index;
        if (this.index === 1) {
            this.positionX = width / 2 - 100
        } else {
            this.positionX = width / 2 + 100
        }
        database.ref(playerIndex).set({
            name: this.name,
            positionX: this.positionX,
            positionY: this.positionY
        });
    }



    updatePosition(){
        var playerNumbers = "players/player" + this.index;
        database.ref(playerNumbers).update({
            positionX: this.positionX,
            positionY: this.positionY
        });
    }

    obtainNumber(){
        var obtainNumberRef=database.ref("playerCount");
        obtainNumberRef.on("value",data=>{
                playerCount=data.val()
        });


    }

    updateNumber(number){// sintaxis JSON
        database.ref("/").update({
            playerCount: number
        });
    }

    obtainDistance(){
        var obtenerDistanciaRef = database.ref("players/player" + this.index);
        obtenerDistanciaRef.on("value", data => {
            var data= data.val();
            this.positionX = data.positionX;
            this.positionY = data.positionY;
        });
    }

    static obtenerInfoPlayers(){
            var playerInfoRef = database.ref("players");
            playerInfoRef.on("value", data => {
                allPlayers=data.val();
            });
    }

}