import ColumnSection from './column_section';
import DestructibleSection from './destructible_section';

export default class Column {
  constructor(ctx) {
    this.ctx = ctx;
    this.speed = 5;
    this.sections = this.setColumn();
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
    this.pos = { x: sections[0].pos.x };
    this.size = { x: sections[0].size.x };
    return sections;
  }

  drawColumn() {
    this.pos = { 
      x: this.sections[0].pos.x < 1050 ? this.sections[0].pos.x : this.sections[1].pos.x };
    this.sections.forEach((section) => {
      if (section !== null) {
        section.drawSection();    
      }
    })
  }
}


