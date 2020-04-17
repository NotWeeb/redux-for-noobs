"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _setState = _interopRequireDefault(require("./utils/setState"));

var _upperFirst = _interopRequireDefault(require("./utils/upperFirst"));

var _clean = _interopRequireDefault(require("./utils/clean"));

var _OPTIONS = _interopRequireDefault(require("./utils/OPTIONS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ACTIVE_OPTIONS = [];
/**
 * @param defaultState {Object}
 * @param options {Array<OPTIONS>}
 * @param middleware {*}
 * @returns {Store<Object, Action>}
 */

var simpleStore = function simpleStore() {
  var defaultState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var middleware = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

  if (_typeof(defaultState) !== 'object') {
    throw new TypeError("'defaultState' must be an object with default values set or strings of 'any'.");
  }

  if (options && _typeof(options) !== 'object') {
    throw new TypeError("'options' must be an object.");
  }

  if (options) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var optionFlag = _step.value;
        ACTIVE_OPTIONS.push(optionFlag);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  var states = Object.keys(defaultState);
  var customState = {};
  Object.defineProperty(customState, '__types__', {
    value: {}
  });

  var reduxReducer = function reduxReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : customState;
    var reduxAction = arguments.length > 1 ? arguments[1] : undefined;
    // @ts-ignore
    var name = reduxAction.name,
        value = reduxAction.value;
    var action = state && state[name] !== undefined && state[name] !== null;

    if (action) {
      state[name] = value;
    }

    return state;
  };

  var reduxStore = (0, _redux.createStore)(reduxReducer, middleware);

  var _loop = function _loop() {
    var rawName = _states[_i];
    // @ts-ignore
    var name = ACTIVE_OPTIONS.includes(_OPTIONS["default"].STRICT_NAMING) ? (0, _clean["default"])(rawName) : rawName; // @ts-ignore

    Object.defineProperty(customState.__types__, name, {
      get: function get() {
        return _typeof(defaultState[rawName]);
      }
    });
    Object.defineProperty(customState, "set".concat((0, _upperFirst["default"])(name)), {
      // @ts-ignore
      enumerable: true,
      get: function get() {
        return function (value) {
          return (0, _setState["default"])(name, value, customState, reduxStore, ACTIVE_OPTIONS);
        };
      }
    });
    customState[name] = defaultState[rawName];
  };

  for (var _i = 0, _states = states; _i < _states.length; _i++) {
    _loop();
  }

  return reduxStore;
};

var _default = simpleStore;
exports["default"] = _default;