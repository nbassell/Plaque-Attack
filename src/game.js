import Player from './player';
import Background from './background';
import KeyHandler from './key_handler';
import Column from './column';

export default class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.player = new Player(ctx);
    this.keyHandler = new KeyHandler(this.player);
    this.background = new Background(ctx);
    this.play = this.play.bind(this);
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
    //columnCollisionCheck
    //columnOutCheck
    //targetDestroyedCheck
  }
  
  togglePause() {
    this.paused = false ? this.paused = true : this.paused = false;
  }
  
  spawnColumn() {
    if (this.timer % 300 === 0) {
      this.columns.push(new Column(this.ctx));
    }
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
    debugger
    this.render();
    this.update();
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