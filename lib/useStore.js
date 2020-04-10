"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var stateHandler = function stateHandler() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var response = {};

  for (var _i = 0, _Object$keys = Object.keys(state); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    response[key] = state[key];
  }

  return response;
};

var _default = function _default() {
  return (0, _reactRedux.useSelector)(stateHandler);
};

exports["default"] = _default;