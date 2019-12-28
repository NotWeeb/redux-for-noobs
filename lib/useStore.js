"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _connect = _interopRequireDefault(require("./utils/connect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStore = function useStore() {
  var connector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _connect["default"];
  return (0, _reactRedux.useSelector)(connector);
};

var _default = useStore;
exports["default"] = _default;