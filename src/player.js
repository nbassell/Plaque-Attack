import KeyHandler from './'
import Bullet from './bullet';

//use switch case 38: case 87: etc.

export default class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.pos = {
      x: 100, y: 500
    }
    this.shoot = this.shoot.bind(this);
    this.fire = [];
    //where do i keep track of game timer?
  }

  draw() {

  }
}