export default class Bullet {
  constructor({ctx, x, y, dx, dy}) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = './assets/images/bullet.png';
    this.pos = { x, y, dx, dy };
    this.size = { x: 25, y: 25 };
  }

  drawBullet() {
    this.ctx.drawImage(this.image, this.pos.x, this.pos.y, this.size.x, this.size.y);
  }

  update() {
    this.pos.x += this.pos.dx;
    this.pos.y += this.pos.dy;
  }
}


