"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNotifications;

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNotifications(req, res, next) {
  _models2.default.Notification.findAll().then(function (notifications) {
    res.json(notifications);
  });
}
//# sourceMappingURL=getNotifications.js.map