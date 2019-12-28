"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _OPTIONS = _interopRequireDefault(require("./OPTIONS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ANY_TYPES = ['*', 'any'];

var setState = function setState(name, value, state, store) {
  var ACTIVE_OPTIONS = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var type = state.__types__[name]; // @ts-ignore

  if (_typeof(value) !== type && !ANY_TYPES.includes(type) && ACTIVE_OPTIONS.includes(_OPTIONS["default"].STRICT_TYPES)) {
    throw new TypeError("\"".concat(name, "\" was set using type \"").concat(type, "\" but you used type \"").concat(_typeof(value), "\" instead."));
  }

  return store.dispatch({
    type: "SET_".concat(name.toUpperCase()),
    name: name,
    value: value
  });
};

var _default = setState;
exports["default"] = _default;