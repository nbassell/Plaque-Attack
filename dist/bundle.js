/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/g-radius.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Background; });
// import { W, H } from './g-radius';


class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.background = new Image();
    this.background.src = './assets/images/muscle-cells.png';
    this.background.onload = () => {
      this.ctx.drawImage(this.background, 0, 0, 800, 500);
    }
    this.scrollVal = 0;
  }

  drawBackground() {
    // this.ctx.clearRect(0, 0, W, H);
    if (this.scrollVal >= 800) {
      this.scrollVal = 0;
    }
    this.scrollVal += 4.5;

    this.ctx.fillStyle = '#8B1C15';
    this.ctx.fillRect(0, 0, 800, 500);
    this.ctx.drawImage(this.background, -this.scrollVal, 0, 800, 500);
    this.ctx.drawImage(this.background, 800 -this.scrollVal, 0, 800, 500);
  }
}

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bullet; });
class Bullet {
  constructor({ctx, x, y, dx, dy}) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = './assets/images/bullet.png';
    this.pos = { x, y, dx, dy };
    this.size = { x: 25, y: 25 };
  }

  drawBullet() {
    this.ctx.drawImage(this.image, this.pos.x, this.pos.y, this.size.x, this.size.y);
  }

  update() {
    this.pos.x += this.pos.dx;
    this.pos.y += this.pos.dy;
  }
}

/***/ }),

/***/ "./src/column.js":
/*!***********************!*\
  !*** ./src/column.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Column; });
/* harmony import */ var _column_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column_section */ "./src/column_section.js");
/* harmony import */ var _destructible_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./destructible_section */ "./src/destructible_section.js");



class Column {
  constructor(ctx) {
    this.ctx = ctx;
    this.speed = 5;
    this.sections = this.setColumn();
    this.destructibleIdx = null;
  }
  
  setColumn() {
    let destructibleIdx = Math.floor(Math.random() * 5);
    let sections = [];
    let i = 0;
    while (i < 5) {
      if (i === destructibleIdx) {
        sections.push(new _destructible_section__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx, i));
      } else {
        sections.push(new _column_section__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, i));
      }
      i++;
    }
    this.pos = { x: sections[0].pos.x };
    this.size = { x: sections[0].size.x };
    return sections;
  }

  drawColumn() {
    this.pos = { 
      x: this.sections[0].pos.x < 850 ? this.sections[0].pos.x : this.sections[1].pos.x };
    this.sections.forEach((section) => {
      if (section !== null) {
        section.drawSection();    
      }
    })
  }
}




/***/ }),

/***/ "./src/column_section.js":
/*!*******************************!*\
  !*** ./src/column_section.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColumnSection; });
// import Column from './column';

class ColumnSection {
  constructor(ctx, idx) {
    this.ctx = ctx;
    this.idx = idx;
    this.image = new Image();
    this.image.src = './assets/images/artery-wall.png';
    this.pos = { x: 810, y: (this.idx * 100) }
    this.size = { x: 120, y: 100 };
  }

  drawSection() {
    this.pos.x -= 3;
    this.ctx.drawImage(this.image, this.pos.x, this.pos.y, this.size.x, this.size.y);
  }
}

/***/ }),

/***/ "./src/destructible_section.js":
/*!*************************************!*\
  !*** ./src/destructible_section.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DestructibleSection; });
/* harmony import */ var _column_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column_section */ "./src/column_section.js");


class DestructibleSection extends _column_section__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(ctx, idx) {
    super(ctx, idx)
    this.image = new Image();
    this.image.src = './assets/images/plaque-in-artery.png';
    this.health = 4;
  }

  // isHit() {
  //   this.health -= 1;
  //   if (this.health <= 0) {
      
  //   }
  // }

  // drawSection() {
  //   this.pos.x -= 5;
  //   this.ctx.drawImage(this.image, this.pos.x, this.pos.y, this.size.x, this.size.y);
  // }
}

/***/ }),

/***/ "./src/empty_section.js":
/*!******************************!*\
  !*** ./src/empty_section.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmptySection; });
class EmptySection {
  constructor(ctx, idx) {
    this.ctx = ctx;
    this.idx = idx;
    this.image = new Image();
    this.image.src = './assets/images/artery-wall.png';
    this.pos = { x: 850, y: (this.idx * 100) }
    this.size = { x: 0, y: 0 };
  }

  drawSection() {
    // this.pos.x -= 5;
    // this.ctx.drawImage(this.image, this.pos.x, this.pos.y, this.size.x, this.size.y);

  }
}

/***/ }),

/***/ "./src/g-radius.js":
/*!*************************!*\
  !*** ./src/g-radius.js ***!
  \*************************/
/*! exports provided: W, H */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return H; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background */ "./src/background.js");




const W = 800;
const H = 500;



document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = W;
  canvas.height = H;
  const play_again = document.getElementsByClassName("play-again-btn")[0];
  play_again.classList.add('hide');
  const game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, canvas);
  const background = new _background__WEBPACK_IMPORTED_MODULE_2__["default"](ctx);
  background.drawBackground();
  game.start();
})



/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ "./src/background.js");
/* harmony import */ var _key_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./key_handler */ "./src/key_handler.js");
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./column */ "./src/column.js");
/* harmony import */ var _virus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./virus */ "./src/virus.js");
/* harmony import */ var _empty_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./empty_section */ "./src/empty_section.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./src/util.js");








class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
    this.keyHandler = new _key_handler__WEBPACK_IMPORTED_MODULE_2__["default"](this.player);
    this.background = new _background__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
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
    this.background.drawBackground();
  }
  
  restartGame() {
    // window.location.reload();
    this.addKeyListeners();
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
    this.play();
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

  updateScore() {
    this.score.innerHTML = parseInt(this.score.innerHTML) + 1;
  }


  addKeyListeners() {
    this.play_again.addEventListener('click', this.restartGame.bind(this), false);
    this.start_btn.addEventListener('click', this.restartGame.bind(this), false);
  }

  togglePause() {
    this.paused = false ? undefined : this.paused = false;
  }

  spawnColumn() {
    if (this.timer % 160 === 0) {
      this.columns.push(new _column__WEBPACK_IMPORTED_MODULE_3__["default"](this.ctx));
    }
  }

  spawnVirus() {
    if (this.timer % 160 === 120 && this.timer > 700) {
      this.viruses.push(new _virus__WEBPACK_IMPORTED_MODULE_4__["default"](this.ctx));
    }
  }

  columnCollisionCheck() {
    this.columns.forEach((column) => {
      column.sections.forEach((section) => {
        if (_util__WEBPACK_IMPORTED_MODULE_6__["default"].isCollided(this.player, section)) {
          this.gameOver();
        }
      });
    })
  }

  bulletCollisionCheck() {
    this.columns.forEach((column, i) => {
      column.sections.forEach((section, j) => {
        this.player.bullets.forEach((bullet, k) => {
          if (_util__WEBPACK_IMPORTED_MODULE_6__["default"].isCollided(bullet, section)) {
            if (section.health) {
              section.health -= 1;
              if (section.health <= 0) {
                this.columns[i].sections[j] = new _empty_section__WEBPACK_IMPORTED_MODULE_5__["default"];
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
      if (_util__WEBPACK_IMPORTED_MODULE_6__["default"].isCollided(this.player, virus)) {
        this.gameOver();
      }
    })
  }

  virusWallCheck() {
    this.columns.forEach((column) => {
      this.viruses.forEach((virus) => {
        if (_util__WEBPACK_IMPORTED_MODULE_6__["default"].isCollidedLeft(virus, column) && virus.xVel < 0) {
          virus.xVel = Math.abs(virus.xVel);
        }
        if (_util__WEBPACK_IMPORTED_MODULE_6__["default"].isCollidedRight(virus, column) && virus.xVel > 0) {
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

/***/ }),

/***/ "./src/key_handler.js":
/*!****************************!*\
  !*** ./src/key_handler.js ***!
  \****************************/
/*! exports provided: UP, DOWN, LEFT, RIGHT, SPACE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP", function() { return UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN", function() { return DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT", function() { return RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE", function() { return SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyHandler; });
const KEYCODE_UP = 38,
      KEYCODE_DOWN = 40,
      KEYCODE_LEFT = 37,
      KEYCODE_RIGHT = 39,
      KEYCODE_SPACE = 32;

let UP = false;
let DOWN = false;
let LEFT = false;
let RIGHT = false;
let SPACE = false;

class KeyHandler {
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

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet */ "./src/bullet.js");
/* harmony import */ var _key_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key_handler */ "./src/key_handler.js");




class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = './assets/images/drix.png';

    this.pos = { x: 500, y: 220 };
    this.size = { x: 50, y: 50 };

    this.bullets = [];
    this.fireable = true;
    this.shoot = this.shoot.bind(this);
    this.xVel = 4;
    this.yVel = 6;

    // this.playerHurtbox = {
    //   x: this.pos.x + this.size.x,
    //   y: this.pos.y + this.size.y,
    // }
  }

  drawPlayer() {
    this.ctx.drawImage(this.image, this.pos.x, this.pos.y, this.size.x, this.size.y);
    this.bullets.forEach((b, i) => {
      b.drawBullet();
      if (b.pos.x > 800) {
        this.bullets.splice(i, 1);
      } else {
        b.update();
      }
    })
  }

  shoot() {
    if (_key_handler__WEBPACK_IMPORTED_MODULE_1__["SPACE"] && this.fireable) {
      this.bullets.push(new _bullet__WEBPACK_IMPORTED_MODULE_0__["default"]({
        ctx: this.ctx,
        x: this.pos.x + 50,
        y: this.pos.y + 15,
        dx: 8,
        dy: 0,
      }));
      this.fireable = false;
      setTimeout(() => { this.fireable = true }, 170);
    }
  }

  updatePos() {
    this.moveUp();
    this.moveDown();
    this.moveLeft();
    this.moveRight();
    this.shoot();
  }

  moveUp() {
    if (_key_handler__WEBPACK_IMPORTED_MODULE_1__["UP"] && this.pos.y > 0) {
      this.pos.y -= this.yVel;
    }
  }

  moveDown() {
    if (_key_handler__WEBPACK_IMPORTED_MODULE_1__["DOWN"] && (this.pos.y + this.size.y) < 498) {
      this.pos.y += this.yVel;
    }
  }

  moveLeft() {
    if (_key_handler__WEBPACK_IMPORTED_MODULE_1__["LEFT"] && this.pos.x > 0) {
      this.pos.x -= this.xVel;
    }
  }

  moveRight() {
    if (_key_handler__WEBPACK_IMPORTED_MODULE_1__["RIGHT"]) {
      this.pos.x += this.xVel;
    } else {
      if (this.pos.x === 0) {
        this.pos.x;
      } else {
        this.pos.x -= this.xVel;
      }
    }
  }
}

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Util = {
  isCollided(source, target) {
    return !(
      ( ( source.pos.y + source.size.y ) < ( target.pos.y ) ) ||
      ( source.pos.y > ( target.pos.y + target.size.y ) ) ||
      ( ( source.pos.x + source.size.x ) < target.pos.x ) ||
      ( source.pos.x > ( target.pos.x + target.size.x ) )
    );
  },

  isCollidedLeft(source, target) {
    return (
      ( ( target.pos.x + target.size.x ) >= source.pos.x ) &&
      ( ( target.pos.x + target.size.x ) < source.pos.x + source.size.x)
    );
  },

  isCollidedRight(source, target) {
    return (
      ( ( target.pos.x ) <= source.pos.x + source.size.x) &&
      ( ( target.pos.x ) > source.pos.x )
    );
  },

  isCollidedY(source, target) {
    return !(
      ( ( source.pos.y + source.size.y ) < ( target.pos.y ) ) ||
      ( source.pos.y > ( target.pos.y + target.size.y ) )
    );
  }
}

// randomDirection() {
//   return Math.floor(Math.random() * 2)
// }

/* harmony default export */ __webpack_exports__["default"] = (Util);

  // isCollided(player, section) {
  //   return !(
  //     ( ( player.pos.y + player.size.y ) < ( section.pos.y ) ) ||
  //     ( player.pos.y > ( section.pos.y + section.size.y ) ) ||
  //     ( ( player.pos.x + player.size.x ) < section.pos.x ) ||
  //     ( player.pos.x > ( section.pos.x + section.size.x ) )
  //   );
  // }


  // export function bulletCollided(bullet, section) {
  //   return !(
  //     ( ( bullet.pos.y + bullet.size.y ) < ( section.pos.y ) ) ||
  //     ( bullet.pos.y > ( section.pos.y + section.size.y ) ) ||
  //     ( ( bullet.pos.x + bullet.size.x ) < section.pos.x ) ||
  //     ( bullet.pos.x > ( section.pos.x + section.size.x ) )
  //   );
  // }


/***/ }),

/***/ "./src/virus.js":
/*!**********************!*\
  !*** ./src/virus.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Virus; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");


class Virus {
  constructor(ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = './assets/images/virus.png';
    this
    this.xVel = -5;
    this.yVel = (4 * (Math.floor(Math.random() * 2) === 0 ? 1 : -1 ));
    this.size = { x: 45, y: 45 };
    this.pos = { x: 780, y: Math.floor(Math.random() * (500 - this.size.y)) };
  }

  drawVirus() {
    this.pos.x += this.xVel;
    this.pos.y += this.yVel;
    this.ctx.drawImage(this.image, this.pos.x, this.pos.y, this.size.x, this.size.y);
  }
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map