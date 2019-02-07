import Game from './game';
import Player from './player';
import KeyHandler from './key_handler';


document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  const screen = new Screen(ctx);
  const player = new Player();
  const keyHandler = new KeyHandler(player);

  screen.drawBackground(ctx);
  player.drawPlayer(ctx);

  document.onkeydown = keyHandler.handleKeyPress;
  document.onkeyup = keyHandler.handleKeyUp;
})

class G_radius function(ctx) {
    this.ctx = ctx;
}

G_radius.prototype.newGame = () => {
  this.game = new Game();
  this.state = {
    paused: false,
  }

  this.startGame();
}

ctx.fillRect(0, 0, 100, 100)