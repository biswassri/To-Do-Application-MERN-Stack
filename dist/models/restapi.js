"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Api Schema for the Task Items
 */
var apiSchema = new _mongoose["default"].Schema({
  title: {
    type: String,
    required: "Title is a required property."
  },
  description: {
    type: String
  },
  status: {
    type: String,
    "default": "Pending"
  },
  due_date: {
    type: String,
    required: "Date is required"
  },
  due_time: {
    type: String,
    required: "Time is required"
  },
  createdDate: {
    type: Date,
    "default": Date.now
  },
  lastModifiedDate: {
    type: Date,
    "default": Date.now
  }
}, {
  versionKey: false
});
apiSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
apiSchema.set('toJSON', {
  virtuals: true
});

var model = _mongoose["default"].model('api', apiSchema);

var _default = model;
exports["default"] = _default;