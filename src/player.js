import KeyHandler from './key_handler'
import Bullet from './bullet';
import Game from 

//use switch case 38: case 87: etc.

export default class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.pos = {
      x: 100, y: 300
    }
    this.shoot = this.shoot.bind(this);
    this.fire = [];
    //where do i keep track of game timer?
  }



  draw() {
    this.ctx.drawImage(this.image, this.pos.x, this.pos.y);
    this.fire.forEach((f, i) => {
      f.draw();
      if (f.pos.x > )
    })
  }
}