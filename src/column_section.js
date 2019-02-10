// import Column from './column';

export default class ColumnSection {
  constructor(ctx, idx) {
    this.ctx = ctx;
    this.idx = idx;
    this.image = new Image();
    this.image.src = './assets/images/artery-wall.png';
    this.pos = { x: 810, y: (this.idx * 100) }
    this.size = { x: 75, y: 100 };
    // this.ctx.fillStyle = 'red';
    // this.ctx.fillRect(0, 0, 75, 100)
  }
}