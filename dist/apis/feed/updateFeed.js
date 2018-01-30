"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateFeed;

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

var _app = require("../../app");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updateFeed(req, res, next) {
  _models2.default.Feed.update({
    title: req.body.title,
    content: req.body.content,
    photoURL: req.body.photoURL
  }, {
    where: {
      id: req.params.id
    }
  }).then(function (feed) {
    res.json(feed);
  });
}
//# sourceMappingURL=updateFeed.js.map