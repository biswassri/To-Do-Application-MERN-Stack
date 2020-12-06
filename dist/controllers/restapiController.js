"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _restapiServices = _interopRequireDefault(require("./../services/restapiServices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Function for Searching Tasks
* @param {*} request 
 * @param {status, json} response 
 */
var index = function index(request, response) {
  _restapiServices["default"].search({}).then(function (taskItems) {
    response.status(200);
    response.json(taskItems);
  })["catch"](handleError(response));
};
/**
 * Function for fetching Task with ID
 * @param {json} request 
 * @param {status, json} response 
 */


var get = function get(request, response) {
  var id = request.params.id;

  _restapiServices["default"].get(id).then(function (taskItems) {
    response.status(200);
    response.json(taskItems);
  })["catch"](handleError(response));
};
/**
 * Function to Create a new Task
 * @param {json} request 
 * @param {status, json} response 
 */


var create = function create(request, response) {
  var newTaskItems = Object.assign({}, request.body);

  _restapiServices["default"].create(newTaskItems).then(function (taskItems) {
    response.status(200);
    response.json(taskItems);
  })["catch"](handleError(response));
};
/**
 * Function for Updating an existing Task
 * @param {id, json} request 
 * @param {status, json} response 
 */


var update = function update(request, response) {
  var id = request.params.id;
  var updateTask = Object.assign({}, request.body);

  _restapiServices["default"].update(id, updateTask).then(function (taskItems) {
    response.status(200);
    response.json(taskItems);
  })["catch"](handleError(response));
};
/**
 * Function for Deleting Tasks
 * @param {id} request 
 * @param {status, json} response 
 */


var remove = function remove(request, response) {
  var id = request.params.id;

  _restapiServices["default"].remove(id).then(function (taskItems) {
    response.status(200);
    response.json({
      message: "Delete Successful"
    });
  })["catch"](handleError(response));
};
/**
 * Function for error handling
 * @param {status, errorjson} response 
 */


var handleError = function handleError(response) {
  return function (error) {
    response.status(500);
    response.json({
      message: error.message
    });
  };
};

var _default = {
  index: index,
  get: get,
  create: create,
  update: update,
  remove: remove
};
exports["default"] = _default;