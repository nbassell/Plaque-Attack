import Player from './player';
import Background from './background';
import KeyHandler from './key_handler';
import Column from './column';
import DestructibleSection from './destructible_section';
import EmptySection from './empty_section';

export default class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.player = new Player(ctx);
    this.keyHandler = new KeyHandler(this.player);
    this.background = new Background(ctx);
    this.play = this.play.bind(this);
    this.columnCollisionCheck = this.columnCollisionCheck.bind(this);
    this.bulletCollisionCheck = this.bulletCollisionCheck.bind(this);
    this.bullets = [];
    this.columns = [];
    this.timer = 0;
    //spawn rate
    //columns
    //score
  }

// newGame = () => {
//   this.game = new Game();
//   this.state = {
//     paused: false,
//   }

//   this.startGame();
// }


  // play() {
  //   this.render();
  //   this.update();
  // }

  update() {
    this.timer++;
    this.spawnColumn();
    this.columnCollisionCheck();
    this.bulletCollisionCheck();
    //this.targetDestroyedCheck
    //this.columnOutCheck
  }
  
  togglePause() {
    this.paused = false ? this.paused = true : this.paused = false;
  }
  
  spawnColumn() {
    if (this.timer % 100 === 0) {
      this.columns.push(new Column(this.ctx));
    }
  }

  columnCollisionCheck() {
    this.columns.forEach((column) => {
      column.sections.forEach((section) => {
        if (Math.abs(section.pos.x - this.player.pos.x) < 53
            && Math.abs(section.pos.y - this.player.pos.y) < 53) {
              this.gameOver();
            }
      });
    })
  }

  bulletCollisionCheck() {
    this.columns.forEach((column, i) => {
      column.sections.forEach((section, j) => {
        this.player.bullets.forEach((bullet, k) => {
          if (Math.abs(section.pos.x - bullet.pos.x) < 25
              && Math.abs((section.pos.y + 100) > (bullet.pos.y + 13))
              && Math.abs((section.pos.y < bullet.pos.y + 13)) )
            {
              if (section.health) {
                // debugger
                section.health -=1;
                if (section.health <= 0) {
                  // debugger
                  // this.columns[i].sections[j].splice(j, 1);
                  this.columns[i].sections[j] = new EmptySection;
                  debugger
                }
              }
            this.player.bullets.splice(k, 1);
          }
        })
      })
    })
  }
  //bullet must be between section.pos.y and section.pos.y + 100
  //which means section.pos.y < bullet.y + 13 < section.pos.y + 100
  //if j = column.destructibleIdx => health -1, if health === 0 splice section

  gameOver() {
    alert("YOU LOSE!")
  }

  targetDestroyedCheck() {

  }

  requestAnimFrame() {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 20);
      }
  }

  play() {
    this.update();
    this.render();
    this.requestAnimFrame()(this.play.bind(this));
  }

  render() {
    this.background.drawBackground();
    this.player.drawPlayer();
    this.player.updatePos();
    this.bullets.forEach((bullet) => {
      bullet.drawBullet();
    });
    this.columns.forEach((column) => {
      column.drawColumn();
    })
  }
}