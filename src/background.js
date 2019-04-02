// import { W, H } from './g-radius';


export default class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.background = new Image();
    this.background.src = './assets/images/muscle-cells.png';
    this.background.onload = () => {
      this.ctx.drawImage(this.background, 0, 0, 1000, 500);
    }
    this.scrollVal = 0;
  }

  drawBackground() {
    // this.ctx.clearRect(0, 0, W, H);
    if (this.scrollVal >= 1000) {
      this.scrollVal = 0;
    }
    this.scrollVal += 4.5;
    this.ctx.fillStyle = '#8B1C15';
    this.ctx.fillRect(0, 0, 1000, 500);
    this.ctx.drawImage(this.background, -this.scrollVal, 0, 1000, 500);
    this.ctx.drawImage(this.background, 1000 -this.scrollVal, 0, 1000, 500);
  }
}