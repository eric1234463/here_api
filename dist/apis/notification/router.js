"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _getNotifications = require("./getNotifications");

var _getNotifications2 = _interopRequireDefault(_getNotifications);

var _createNotification = require("./createNotification");

var _createNotification2 = _interopRequireDefault(_createNotification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notificationRouter = _express2.default.Router();
notificationRouter.get("/", _getNotifications2.default);
notificationRouter.post("/", _createNotification2.default);
exports.default = notificationRouter;
//# sourceMappingURL=router.js.map