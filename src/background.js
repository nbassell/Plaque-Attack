import { W, H } from './g-radius';


export default class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.background = new Image();
    this.background.src = './assets/images/bloodstream-bg.jpg'
    this.size = {
      x: 800, y: 500
    };
  }

  drawBackground() {
    this.ctx.clearRect(0, 0, W, H);
    this.ctx.drawImage(this.background, 0, 0, this.size.x, this.size.y);
  }
}