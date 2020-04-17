"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useStore", {
  enumerable: true,
  get: function get() {
    return _useStore["default"];
  }
});
Object.defineProperty(exports, "simpleStore", {
  enumerable: true,
  get: function get() {
    return _simpleStore["default"];
  }
});
Object.defineProperty(exports, "OPTIONS", {
  enumerable: true,
  get: function get() {
    return _OPTIONS["default"];
  }
});
Object.defineProperty(exports, "applyMiddleware", {
  enumerable: true,
  get: function get() {
    return _redux.applyMiddleware;
  }
});
Object.defineProperty(exports, "Provider", {
  enumerable: true,
  get: function get() {
    return _reactRedux.Provider;
  }
});

var _useStore = _interopRequireDefault(require("./useStore"));

var _simpleStore = _interopRequireDefault(require("./simpleStore"));

var _OPTIONS = _interopRequireDefault(require("./utils/OPTIONS"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }