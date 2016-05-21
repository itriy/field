var game =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _game = __webpack_require__(1);
	
	var _game2 = _interopRequireDefault(_game);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var newGame = new _game2.default({
	  fieldElem: document.getElementById('field'),
	  fieldWidth: 200,
	  fieldHeight: 300,
	  fieldBorderWidth: 20,
	  ballElem: document.getElementById('ball'),
	  ballRadius: 20
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _field = __webpack_require__(2);
	
	var _field2 = _interopRequireDefault(_field);
	
	var _ball = __webpack_require__(3);
	
	var _ball2 = _interopRequireDefault(_ball);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Game = function Game(_ref) {
	    var _this = this;
	
	    var fieldElem = _ref.fieldElem;
	    var fieldWidth = _ref.fieldWidth;
	    var fieldHeight = _ref.fieldHeight;
	    var fieldBorderWidth = _ref.fieldBorderWidth;
	    var ballElem = _ref.ballElem;
	    var ballRadius = _ref.ballRadius;
	
	    _classCallCheck(this, Game);
	
	    this._ball = new _ball2.default(ballElem, ballRadius);
	    this._field = new _field2.default(fieldElem, fieldWidth, fieldHeight, fieldBorderWidth);
	
	    this._field.element.addEventListener('click', function () {
	        var fieldCoords = _this._field.element.getBoundingClientRect();
	
	        var fieldInnerCoords = {
	            top: fieldCoords.top + _this._field.element.clientTop,
	            left: fieldCoords.left + _this._field.element.clientLeft
	        };
	
	        var toMoveCoords = {
	            x: event.clientX - fieldInnerCoords.left,
	            y: event.clientY - fieldInnerCoords.top
	        };
	        var ballToMoveCoords = {
	            x: toMoveCoords.x - ballRadius,
	            y: toMoveCoords.y - ballRadius
	
	        };
	
	        if (toMoveCoords.x - ballRadius < 0) {
	            ballToMoveCoords.x = 0;
	        }
	        if (toMoveCoords.y - ballRadius < 0) {
	            ballToMoveCoords.y = 0;
	        }
	        if (toMoveCoords.x + ballRadius > fieldWidth) {
	            ballToMoveCoords.x = fieldWidth - fieldBorderWidth - ballRadius;
	        }
	        if (toMoveCoords.y + ballRadius > fieldHeight) {
	            ballToMoveCoords.y = fieldHeight - fieldBorderWidth - ballRadius;
	        }
	
	        _this._ball.moveBall(ballToMoveCoords);
	    });
	};
	
	exports.default = Game;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Field = function () {
	    function Field(fieldElem, fieldWidth, fieldHeight, fieldBorderWidth) {
	        _classCallCheck(this, Field);
	
	        this.element = fieldElem;
	        this._drawField(fieldWidth, fieldHeight, fieldBorderWidth);
	    }
	
	    _createClass(Field, [{
	        key: '_drawField',
	        value: function _drawField(fieldWidth, fieldHeight, fieldBorderWidth) {
	
	            this.element.style.width = fieldWidth + 'px';
	            this.element.style.height = fieldHeight + 'px';
	            this.element.style.borderWidth = fieldBorderWidth + 'px';
	        }
	    }]);
	
	    return Field;
	}();
	
	exports.default = Field;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Ball = function () {
	    function Ball(ballElem, ballRadius) {
	        _classCallCheck(this, Ball);
	
	        this.element = ballElem;
	        //draw ball
	        this.element.width = ballRadius * 2;
	    }
	
	    _createClass(Ball, [{
	        key: 'moveBall',
	        value: function moveBall(_ref) {
	            var x = _ref.x;
	            var y = _ref.y;
	
	            this.element.style.left = x + 'px';
	            this.element.style.top = y + 'px';
	        }
	    }]);
	
	    return Ball;
	}();
	
	exports.default = Ball;

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map