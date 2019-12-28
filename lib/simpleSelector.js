"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var simpleSelector = function simpleSelector(state) {
  var response = {};

  for (var _i = 0, _Object$keys = Object.keys(state); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    response[key] = state[key];
  }

  return response;
};

var _default = simpleSelector;
exports["default"] = _default;