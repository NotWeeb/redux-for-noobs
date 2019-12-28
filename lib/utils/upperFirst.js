"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var upperFirst = function upperFirst() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

var _default = upperFirst;
exports["default"] = _default;