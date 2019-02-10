import ColumnSection from './column_section';
import DestructibleSection from './destructible_section';

export default class Column {
  constructor(ctx) {
    this.ctx = ctx;
    this.speed = 5;
    this.sections = [];
    // this.columnSection = new ColumnSection(ctx);
    // this.destructibleSection = new DestructibleSection(ctx);
    this.destructibleIdx = null;
  }

  drawColumn() {
    let destructibleIdx = Math.floor(Math.random() * 5);
    let i = 0;
    while (i < 5) {
      if (i === destructibleIdx) {
        this.sections.push(new DestructibleSection(this.ctx, i));
        i++;
      } else {
        this.sections.push(new ColumnSection(this.ctx, i));
        i++;
      }
    }  
  }
}


