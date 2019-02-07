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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var _destructable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./destructable */ "./src/destructable.js");


class Column {
  constructor() {
    this.velocity = velocity
  }
}

/***/ }),

/***/ "./src/destructable.js":
/*!*****************************!*\
  !*** ./src/destructable.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Destructable; });
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column */ "./src/column.js");


class Destructable extends _column__WEBPACK_IMPORTED_MODULE_0__["default"] {
  
}

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
/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullet */ "./src/bullet.js");
/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bullet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./column */ "./src/column.js");
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./target */ "./src/target.js");
/* harmony import */ var _key_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key_handler */ "./src/key_handler.js");








document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  const screen = new Screen(ctx);
  const player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]();
  const keyHandler = new _key_handler__WEBPACK_IMPORTED_MODULE_4__["default"](player);

  screen.drawBackground(ctx);
  player.drawPlayer(ctx);

  document.onkeydown = keyHandler.handleKeyPress;
  document.onkeyup = keyHandler.handleKeyUp;
})

//Game logic here too?

class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]({
      position: [100, 500]
    });
    this.draw = this.draw.bind(this);
    //spawn rate
    //columns
    //score
  }


  play() {
    this.render();
    this.update();
  }

  update() {
    //wallCollisionCheck
    //columnCollisionCheck
    //columnOutCheck
    //targetDestroyedCheck
    //createColumn
  }
  
  togglePause() {
    this.paused = false ? undefined : this.paused = false;
  }
  
  createColumn() {
    
  }

  targetDestroyedCheck() {

  }

  draw(ctx) {

  }



}

/***/ }),

/***/ "./src/key_handler.js":
/*!****************************!*\
  !*** ./src/key_handler.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyHandler; });
const KEYCODE_UP = 38,
      KEYCODE_DOWN = 40,
      KEYCODE_LEFT = 37,
      KEYCODE_RIGHT = 39,
      KEYCODE_SPACE = 32;


class KeyHandler {
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
/* harmony import */ var _key_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key_handler */ "./src/key_handler.js");
/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullet */ "./src/bullet.js");
/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bullet__WEBPACK_IMPORTED_MODULE_1__);


// import Game from 

//use switch case 38: case 87: etc.

class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.pos = {
      x: 100, y: 300
    }
    this.shoot = this.shoot.bind(this);
    this.fire = [];
    //where do i keep track of game timer?
  }



  // draw() {
  //   this.ctx.drawImage(this.image, this.pos.x, this.pos.y);
  //   this.fire.forEach((f, i) => {
  //     f.draw();
  //     if (f.pos.x > )
  //   })
  // }
}

/***/ }),

/***/ "./src/target.js":
/*!***********************!*\
  !*** ./src/target.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Target; });
class Target {

}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map