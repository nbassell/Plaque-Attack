import Player from './player';
import Bullet from './bullet';
import Column from './column';
import Target from './target';
import Screen from './screen';



document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  new Screen(ctx);
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