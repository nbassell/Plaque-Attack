const KEYCODE_UP = 38,
      KEYCODE_DOWN = 40,
      KEYCODE_LEFT = 37,
      KEYCODE_RIGHT = 39,
      KEYCODE_SPACE = 32;

export let UP = false;
export let DOWN = false;
export let LEFT = false;
export let RIGHT = false;
export let SPACE = false;

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
        break;
      case KEYCODE_DOWN:
        DOWN = true;
        break;
      case KEYCODE_LEFT:
        LEFT = true;
        break;
      case KEYCODE_RIGHT:
        RIGHT = true;
        break;
      case KEYCODE_SPACE:
        SPACE = true;
        break;
    }
  }

  handleKeyUp(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case KEYCODE_UP:
        UP = false;
        break;
      case KEYCODE_DOWN:
        DOWN = false;
        break;
      case KEYCODE_LEFT:
        LEFT = false;
        break;
      case KEYCODE_RIGHT:
        RIGHT = false;
        break;
      case KEYCODE_SPACE:
        SPACE = false;
        break;
    }
  }
}