import Game from './game';
import Background from './background';

const W = 1000;
const H = 500;

export { W, H };

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = W;
  canvas.height = H;
  const play_again = document.getElementsByClassName("play-again-btn")[0];
  play_again.classList.add('hide');
  const game = new Game(ctx, canvas);
  const background = new Background(ctx);
  background.drawBackground();
  game.start();
})

