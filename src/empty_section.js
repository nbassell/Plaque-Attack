export default class EmptySection {
  constructor(ctx, idx) {
    this.ctx = ctx;
    this.idx = idx;
    this.image = new Image();
    this.image.src = './assets/images/artery-wall.png';
    this.pos = { x: 1050, y: (this.idx * 100) }
    this.size = { x: 0, y: 0 };
  }

  drawSection() {

  }
}