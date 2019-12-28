"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var setState = function setState(name, value, state, store) {
  var type = state.__types__[name];

  if (_typeof(value) !== type && !['*', 'any'].includes(type)) {
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