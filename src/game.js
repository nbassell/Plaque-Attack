import Player from './player';
import Background from './background';
import KeyHandler from './key_handler';
import Column from './column';
import Virus from './virus';
import EmptySection from './empty_section';
import Util from './util';

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
    this.virusPlayerCheck = this.virusPlayerCheck.bind(this);
    this.virusWallCheck = this.virusWallCheck.bind(this);
    this.bullets = [];
    this.columns = [];
    this.viruses = [];
    this.timer = 0;
    //score
  }

  // newGame = () => {
  //   this.game = new Game();
  //   this.state = {
  //     paused: false,
  //   }

  //   this.startGame();
  // }

  update() {
    this.timer++;
    this.spawnColumn();
    this.spawnVirus();
    this.columnCollisionCheck();
    this.bulletCollisionCheck();
    this.virusWallCheck();
    this.virusPlayerCheck();
    this.columnOutCheck();
    this.virusOutCheck();
  }

  togglePause() {
    this.paused = false ? this.paused = true : this.paused = false;
  }

  spawnColumn() {
    if (this.timer % 160 === 0) {
      this.columns.push(new Column(this.ctx));
    }
  }

  spawnVirus() {
    if (this.timer % 160 === 120 && this.timer > 200) {
      this.viruses.push(new Virus(this.ctx));
    }
  }

  columnCollisionCheck() {
    this.columns.forEach((column) => {
      column.sections.forEach((section) => {
        if (Util.isCollided(this.player, section)) {
          this.gameOver();
        }
      });
    })
  }

  bulletCollisionCheck() {
    this.columns.forEach((column, i) => {
      column.sections.forEach((section, j) => {
        this.player.bullets.forEach((bullet, k) => {
          if (Util.isCollided(bullet, section)) {
            if (section.health) {
              section.health -= 1;
              if (section.health <= 0) {
                this.columns[i].sections[j] = new EmptySection;
              }
            }
            this.player.bullets.splice(k, 1);
          }
        })
      })
    })
  }

  virusPlayerCheck() {
    this.viruses.forEach((virus) => {
      if (Util.isCollided(this.player, virus)) {
        this.gameOver();
      }
    })
  }

  virusWallCheck() {
    this.columns.forEach((column) => {
      this.viruses.forEach((virus) => {
        if (Util.isCollidedLeft(virus, column) && virus.xVel < 0) {
          debugger
          virus.xVel = Math.abs(virus.xVel);
          debugger
        }
        if (Util.isCollidedRight(virus, column) && virus.xVel > 0) {
          virus.xVel = Math.abs(virus.xVel) * -1;
        }
        if ((virus.pos.x + virus.size.x >= 800) && virus.xVel > 0) {
          virus.xVel = Math.abs(virus.xVel) * -1;
        }
        if (virus.pos.y <= 0) {
          virus.yVel = Math.abs(virus.yVel);
        }
        if ((virus.pos.y + virus.size.y) >= 499) {
          virus.yVel = Math.abs(virus.yVel) * -1;
        }
      })
    })
  }

  columnOutCheck() {
    this.columns.forEach((column, i) => {
      if (column.pos.x + column.size.x < 0) {
        this.columns.splice(i, 1);
      }
    })
  }

  virusOutCheck() {
    this.viruses.forEach((virus, i) => {
      if (virus.pos.x + virus.size.x < 0 || virus.pos.y + virus.size.y < 0
        || virus.pos.y > 800) {
        this.viruses.splice(i, 1);
      }
    })
  }

  gameOver() {
    alert("YOU LOSE!")
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
    });
    this.viruses.forEach((virus) => {
      virus.drawVirus();
    })
  }
}