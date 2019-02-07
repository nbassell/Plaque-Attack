import Player from './player';
import Bullet from './bullet';
import Column from './column';
import Target from './target';
import KeyHandler from './key_handler';



document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  const screen = new Screen(ctx);
  const player = new Player();
  const keyHandler = new KeyHandler(player);

  screen.drawBackground(ctx);
  player.drawPlayer(ctx);

  document.onkeydown = keyHandler.handleKeyPress;
  document.onkeyup = keyHandler.handleKeyUp;
})

//Game logic here too?

export default class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.player = new Player({
      position: [100, 500]
    });
    this.draw = this.draw.bind(this);
    //spawn rate
    //columns
    //score
  }


  play() {
    this.render();
    this.update();
  }

  update() {
    //wallCollisionCheck
    //columnCollisionCheck
    //columnOutCheck
    //targetDestroyedCheck
    //createColumn
  }
  
  togglePause() {
    this.paused = false ? this.paused = true : this.paused = false;
  }
  
  createColumn() {
    
  }

  targetDestroyedCheck() {

  }

  draw(ctx) {

  }



}