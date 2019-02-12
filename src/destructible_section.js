import ColumnSection from './column_section';

export default class DestructibleSection extends ColumnSection {
  constructor(ctx, idx) {
    super(ctx, idx)
    this.image = new Image();
    this.image.src = './assets/images/plaque-in-artery.png';
    this.health = 3;
  }

  // isHit() {
  //   this.health -= 1;
  //   if (this.health <= 0) {
      
  //   }
  // }

  // drawSection() {
  //   this.pos.x -= 5;
  //   this.ctx.drawImage(this.image, this.pos.x, this.pos.y, this.size.x, this.size.y);
  // }
}