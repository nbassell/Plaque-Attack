import Util from './util';

export default class Virus {
  constructor(ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = './assets/images/virus.png';
    this
    this.xVel = -5;
    this.yVel = (4 * (Math.floor(Math.random() * 2) === 0 ? 1 : -1 ));
    this.size = { x: 45, y: 45 };
    this.pos = { x: 780, y: Math.floor(Math.random() * (500 - this.size.y)) };
  }

  drawVirus() {
    this.pos.x += this.xVel;
    this.pos.y += this.yVel;
    this.ctx.drawImage(this.image, this.pos.x, this.pos.y, this.size.x, this.size.y);
  }
}