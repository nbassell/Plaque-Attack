import ColumnSection from './column_section';

export default class DestructibleSection extends ColumnSection {
  constructor(ctx, idx) {
    super(ctx, idx)
    this.image = new Image();
    this.image.src = './assets/images/plaque-in-artery.png';
    this.health = 4;
  }
}