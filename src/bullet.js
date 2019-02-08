export default class Bullet {
  constructor({ctx, x, y, dx, dy}) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = './assets/images/bullet.png'
    this.pos = { x, y, dx, dy };
  }

  drawBullet() {
    this.ctx.drawImage(this.image, this.pos.x, this.pos.y, 20, 20);
  }

  update() {
    this.pos.x += this.pos.dx;
    this.pos.y += this.pos.dy;
  }
}