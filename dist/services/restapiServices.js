"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _restapi = _interopRequireDefault(require("./../models/restapi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Function to search for an id
 * @param {id} filter 
 */
var search = function search(filter) {
  var promise = _restapi["default"].find(filter).exec();

  return promise;
};
/**
 * geting the item by the id
 * @param id 
 */


var get = function get(id) {
  var promise = _restapi["default"].findById(id).exec();

  return promise;
};
/**
 * Creating New task
 * @param {json} newTask 
 */


var create = function create(newTask) {
  var task = new _restapi["default"](newTask);
  var promise = task.save();
  return promise;
};
/**
 * Updating an Item
 * @param {*} id 
 * @param {*} updatedEntry 
 */


var update = function update(id, updatedEntry) {
  var promise = _restapi["default"].findByIdAndUpdate({
    _id: id
  }, updatedEntry, {
    "new": true
  }).exec();

  return promise;
};
/**
 * Deleteing an Item
 * @param {} id 
 */


var remove = function remove(id) {
  var promise = _restapi["default"].remove({
    _id: id
  }).exec();

  return promise;
};

var _default = {
  search: search,
  get: get,
  create: create,
  update: update,
  remove: remove
};
exports["default"] = _default;