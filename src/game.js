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
    this.addKeyListeners = this.addKeyListeners.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.bullets = [];
    this.columns = [];
    this.viruses = [];
    this.timer = 0;
    this.score = document.getElementById('score');
    this.play_again = document.getElementsByClassName("play-again-btn")[0];
    this.start_btn = document.getElementsByClassName("start-btn")[0];
    this.instructions = document.getElementsByClassName("instruction-list")[0];
    this.score.innerHTML = '0';
    this.dead = false;
  }

  start() {
    this.addKeyListeners();
    // this.background.drawBackground();
  }
  
  restartGame() {
    // window.location.reload();
    // this.addKeyListeners();
    this.start_btn.classList.add('hide');
    this.instructions.classList.remove('hide');
    this.background.drawBackground();
    this.bullets = [];
    this.columns = [];
    this.viruses = [];
    this.timer = 0;
    this.state = {
      paused: false,
    };
    this.player.xVel = 4;
    this.player.xYel = 6;
    this.dead = false;
    this.play_again.classList.add('hide');
    this.score.innerHTML = '0';
    this.play();
  }

  updateScore() {
    this.score.innerHTML = parseInt(this.score.innerHTML) + 1;
  }


  addKeyListeners() {
    this.play_again.addEventListener('click', this.restartGame.bind(this), false);
    this.start_btn.addEventListener('click', this.restartGame.bind(this), false);
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
    if (this.timer % 160 === 120 && this.timer > 700) {
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
          virus.xVel = Math.abs(virus.xVel);
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
    this.dead = true;
  }

  showMessage(message) {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    this.ctx.fillRect(0, 0, 800, 500);
    this.ctx.font = "50px Luckiest Guy";
    this.ctx.fillStyle = "bisque";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.fillText(message, 400, 250)
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
    if (!this.dead) {
      this.requestAnimFrame()(this.play.bind(this));
    } else {
      this.showMessage("Game Over");
      this.play_again.classList.remove('hide');
    }
  }

  update() {
    this.timer++;
    this.updateScore();
    this.spawnColumn();
    this.spawnVirus();
    this.columnCollisionCheck();
    this.bulletCollisionCheck();
    this.virusWallCheck();
    this.virusPlayerCheck();
    this.columnOutCheck();
    this.virusOutCheck();
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