// import Column from './column';

export default class DestructibleSection {
  constructor(ctx, idx) {
    this.ctx = ctx;
    this.idx = idx;
    this.image = new Image();
    this.image.src = './assets/images/plaque-in-artery.png';
    this.pos = { x: 810, y: (this.idx * 100) }
    this.size = { x: 75, y: 100 };
  }

  // drawDestructibleSection() {
  // }
}