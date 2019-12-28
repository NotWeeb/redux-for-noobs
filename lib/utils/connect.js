"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var connect = function connect(state) {
  var response = {};

  for (var _i = 0, _Object$keys = Object.keys(state); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    response[key] = state[key];
  }

  return response;
};

var _default = connect;
exports["default"] = _default;