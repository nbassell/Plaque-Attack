// import Column from './column';

export default class ColumnSection {
  constructor(ctx, idx) {
    this.ctx = ctx;
    this.idx = idx;
    this.image = new Image();
    this.image.src = './assets/images/artery-wall.png';
    this.pos = { x: 810, y: (this.idx * 100) }
    this.size = { x: 75, y: 100 };
  }

  drawSection() {
    this.pos.x -= 5;
    this.ctx.drawImage(this.image, this.pos.x, this.pos.y, this.size.x, this.size.y);
  }
}