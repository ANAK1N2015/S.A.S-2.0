var game, player,allPlayers;
var gameState, playerCount=0;
var database;
var formulary, game;
var bkImg;

var player1,player2;
var players=[];

function preload() {
    bkImg = loadImage("Concept art/main menu.jpeg")
    background2 = loadImage("Concept art/bk1.jpg")
}
function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    database = firebase.database();
    game = new Game();
    game.gameState();
    game.start();
    
}
function draw() {
    background(bkImg);
    if(playerCount===2){
        game.updateState(1);
    }
    if(gameState===1){// 0 INICIANDO 1 YA ES JUGABLE
        game.play();// JUEGO COMIENCE
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}