//

var Game = require('./game')

const Screen = function(ctx) {
    this.ctx = ctx;
}

Screen.prototype.newGame = () => {
  this.game = new Game();
  this.state = {
    paused: false,
  }

  this.startGame();
}

ctx.fillRect(0, 0, 100, 100)