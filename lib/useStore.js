"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _default = function _default() {
  return (0, _reactRedux.useSelector)(function (state) {
    var response = {};

    for (var _i = 0, _Object$keys = Object.keys(state); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      response[key] = state[key];
    }

    return response;
  });
};

exports["default"] = _default;