"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _restapiRoutes = _interopRequireDefault(require("./restapiRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(app) {
  app.use('/', _restapiRoutes["default"]);
};

exports["default"] = _default;