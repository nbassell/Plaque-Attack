const KEYCODE_UP = 38,
      KEYCODE_DOWN = 40,
      KEYCODE_LEFT = 37,
      KEYCODE_RIGHT = 39,
      KEYCODE_SPACE = 32;

export let UP = false;
export let DOWN = false;
export let LEFT = false;
export let RIGHT = false;

export default class KeyHandler {
  constructor(player) {
    this.player = player;

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

    document.onkeydown = this.handleKeyPress;
    document.onkeyup = this.handleKeyUp;
  }

  handleKeyPress(e) {
    e.preventDefault();


    switch (e.keyCode) {
      case KEYCODE_UP:
        UP = true;
        // this.player.moveUp();
        break;
      case KEYCODE_DOWN:
        DOWN = true;
        // this.player.moveDown();
        break;
      case KEYCODE_LEFT:
        LEFT = true;
        // this.player.moveLeft();
        break;
      case KEYCODE_RIGHT:
        RIGHT = true;
        // this.player.moveRight();
        break;
      // case KEYCODE_SPACE:
      //   this.player.shoot();
      //   break;
    }
  }

  handleKeyUp(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case KEYCODE_UP:
        UP = false;
        // this.player.moveUp();
        break;
      case KEYCODE_DOWN:
        DOWN = false;
        // this.player.moveDown();
        break;
      case KEYCODE_LEFT:
        LEFT = false;
        // this.player.moveLeft();
        break;
      case KEYCODE_RIGHT:
        RIGHT = false;
        // this.player.moveRight();
        break;
      // case KEYCODE_SPACE:
      //   this.player.shoot();
      //   break;
    }
  }
}