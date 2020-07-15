var player;
var playerImg,rockImg;
var gameState = 0;
var game;
var obstacles;
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8;
function preload() {
  playerImg = loadImage("player.jpg");
  rockImg = loadImage("rocks.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  player = new Player();
  game = new Game();
  obstacles = new Obstacles();

}
function draw() {
  background(122,122,88);  
  edges = createEdgeSprites();
  fill("white");
  text("x:" + mouseX + ",y:"+mouseY,mouseX,mouseY);
  drawSprites();
  if(gameState === 0) {
    game.start();
  }
  if(gameState === 1) {
    game.play();
  }

}