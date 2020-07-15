class Game {
    constructor() {
     this.playButton = createSprite(width/2,height/2 + 200,30,40);
    }
    start() {
        textSize(40);
        fill("blue");
        text("SUPER WEAPON",width/2,height/2);
        
        if(mousePressedOver(this.playButton)) {
            gameState = 1;
            
        }
        player.sprite.visible = false;
        obstacles.hide();
    }
    play() {
      player.sprite.visible= true;
      this.playButton.visible = false;
      player.controls();
      player.collision();
      obstacles.reveal();
    }

}