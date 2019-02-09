import Bullet from './bullet';
import { UP, DOWN, LEFT, RIGHT, SPACE } from './key_handler';
import KeyHandler from './key_handler';

export default class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = './assets/images/white-blood-cell.png';

    this.pos = {
      x: 500, y: 220
    }
    this.size = {
      x: 50, y: 50
    };

    this.bullet = [];
    this.shoot = this.shoot.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.speed = 4;

    this.playerHitbox = {
      x: this.pos.x + this.size.x,
      y: this.pos.y + this.size.y,
    }
  }

  drawPlayer() {
    // this.ctx.clearRect(0, 0, 800, 500);
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
    if (SPACE) {
      this.bullet.push(new Bullet({
        ctx: this.ctx,
        x: this.pos.x + 50,
        y: this.pos.y + 15,
        dx: 8,
        dy: 0,
      }))
    }
  }

  updatePos() {
    this.moveUp();
    this.moveDown();
    this.moveLeft();
    this.moveRight();
    this.shoot();
  }

  moveUp() {
    if (UP) {
      this.pos.y -= this.speed;
    }
  }

  moveDown() {
    if (DOWN) {
      this.pos.y += this.speed;
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
    } else {
      if (this.pos.x === 0) {
        this.pos.x;
      } else {
        this.pos.x -= this.speed;
      }
    }
  }
}