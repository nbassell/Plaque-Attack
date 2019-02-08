// import KeyHandler from './key_handler'
import Bullet from './bullet';
import { UP, DOWN, LEFT, RIGHT } from './key_handler';
// import Game from 

//use switch case 38: case 87: etc.

export default class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = './assets/images/white-blood-cell.png';
    this.pos = {
      x: 100, y: 250
    }
    this.size = {
      x: 35, y: 35
    };
    this.bullet = [];
    this.shoot = this.shoot.bind(this);
    // this.fire = [];
    // this.speed = 3;
  }

  drawPlayer() {
    this.ctx.drawImage(this.image, this.pos.x, this.pos.y, this.size.x, this.size.y);
    this.bullet.forEach((b, i) => {
      b.drawBullet();
      if (b.pos.x > 800) {
        this.bullet.splice(i, 1);
      } else {
        b.update();
      }
    })
  }

  shoot() {
    this.bullet.push(new Bullet({
      ctx: this.ctx,
      x: this.pos.x + 20,
      y: this.pos.y + 5,
      dx: 8,
      dy: 0,
    }))
  }

  moveUp() {
    if (UP) {
      this.pos.y += this.speed;
    }
  }

  moveDown() {
    if (DOWN) {
      this.pos.y -= this.speed;
    }
  }

  moveLeft() {
    if (LEFT) {
      this.pos.x -= this.speed;
    }
  }

  moveRight() {
    if (RIGHT) {
      this.pos.x += this.speed;
    }
  }
}