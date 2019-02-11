import ColumnSection from './column_section';
import DestructibleSection from './destructible_section';

export default class Column {
  constructor(ctx) {
    this.ctx = ctx;
    this.speed = 5;
    this.sections = this.setColumn();
    // this.columnSection = new ColumnSection(ctx);
    // this.destructibleSection = new DestructibleSection(ctx);
    this.destructibleIdx = null;
  }

  setColumn() {
    let destructibleIdx = Math.floor(Math.random() * 5);
    let sections = [];
    let i = 0;
    while (i < 5) {
      if (i === destructibleIdx) {
        sections.push(new DestructibleSection(this.ctx, i));
      } else {
        sections.push(new ColumnSection(this.ctx, i));
      }
      i++;
    }
    return sections;
  }

  drawColumn() {
    this.sections.forEach((section) => {
      section.drawSection();    
    })
  }
}


