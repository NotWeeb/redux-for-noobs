"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var clean = function clean() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str.replace(/[^A-z0-9_\-]+/gi, ' ').trim().replace(/ +/gi, '');
};

var _default = clean;
exports["default"] = _default;