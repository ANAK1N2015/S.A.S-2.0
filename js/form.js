class Form {
    constructor() {
        this.input = createInput("").attribute("placeholder", "ingresa tu nombre");
        this.button = createButton("play");
        this.saludos = createElement("h2");
    }
    setStyle() {
        this.input.class("inputstyle");
        this.button.class("buttonPlay");
        this.saludos.class("efectos");
    }

    setElementsPosition() {
        
        this.input.position(width / 2 - 110, height / 2 - 80);
        this.button.position(width / 2 - 90, height / 2 - 20);
        this.saludos.position(width / 2 - 300, height / 2 - 100);
      }

    display() {
        this.setElementsPosition();
        //this.input.position(130, 160)
        //this.button.position(250, 200)
        this.setStyle();
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            var mensaje = `Hola ${this.input.value()}</br>espera a que otro jugador se una...`;
            this.saludos.html(mensaje);
            playerCount =playerCount+1;
            player.name = this.input.value();
            player.index = playerCount;
           
            player.updateNumber(playerCount);
            player.addPlayer();
            player.obtainDistance();
        });
    }

    ocultar(){
        this.input.hide();
        this.button.hide();
        this.saludos.hide();
    }
}