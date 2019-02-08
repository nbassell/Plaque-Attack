import Player from './player';
import Game from './game';
import Background from './background';

const W = 800;
const H = 500;

export { W, H };

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = W;
  canvas.height = H;
  const game = new Game(ctx, canvas);
  // const player = new Player(ctx);
  // debugger
  const background = new Background(ctx);
  // const keyHandler = new KeyHandler(player);
  // player.drawPlayer();
  background.drawBackground();
  game.play();
  document.addEventListener("keypress", (e) => {
    if (e.keyCode === 32) game.player.shoot();
});
})
// window.game = game;

