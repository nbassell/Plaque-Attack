const KEYCODE_UP = 38;
const KEYCODE_DOWN = 40;
const KEYCODE_LEFT = 37;
const KEYCODE_RIGHT = 39;
const KEYCODE_SPACE = 32;


export default class KeyHandler {
  constructor(player) {
    this.player = player;

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyPress(e) {
    e.preventDefault();

    switch (e.keyCode) {
      case KEYCODE_UP:
        this.player.moveUp();
        break;
      case KEYCODE_DOWN:
        this.player.moveDown();
        break;
      case KEYCODE_LEFT:
        this.player.moveLeft();
        break;
      case KEYCODE_RIGHT:
        this.player.moveRight();
        break;
      case KEYCODE_SPACE:
        this.player.shoot();
        break;
    }
  }

  handleKeyUp(e) {
    e.preventDefault();
    this.player.stopMoving();
  }
}