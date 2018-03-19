"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createNotification;

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createNotification(req, res, next) {
  _axios2.default.create({
    baseURL: "https://fcm.googleapis.com",
    timeout: 1000,
    headers: {
      Authorization: "key=AIzaSyAhoKi1iAoKNwwFszwXGSX3lCk3d0FAguA",
      "Content-Type": "application/json"
    }
  }).post("/fcm/send", {
    notification: {
      title: req.body.title,
      body: req.body.body,
      sound: "default",
      click_action: "FCM_PLUGIN_ACTIVITY"
    },
    to: "news"
  }).then(function (result) {
    console.log("success send");
    _models2.default.Notification.create({
      title: req.body.title,
      body: req.body.body
    }).then(function (notification) {
      res.json(notification);
    });
  }).catch(function (error) {
    console.log(error);
  });
}
//# sourceMappingURL=createNotification.js.map