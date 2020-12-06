"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _restapiController = _interopRequireDefault(require("./../controllers/restapiController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/**
 * Search - GET Task Items
 * Create - POST Task Items
 */


router.route('/toDoList').get(_restapiController["default"].index).post(_restapiController["default"].create);
/**
 * Retrive - GET 
 * Update - PUT
 * Delete - DELETE
 * 
 */

router.route('/toDoList/:id').get(_restapiController["default"].get).put(_restapiController["default"].update)["delete"](_restapiController["default"].remove);
var _default = router;
exports["default"] = _default;