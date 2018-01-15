'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createFeed;

var _models = require('../../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createFeed(req, res, next) {
    _models2.default.Feed.create({
        content: req.body.content,
        title: req.body.title,
        photoURL: req.body.photoURL,
        doctorId: req.body.doctorId
    }).then(function (feed) {
        res.json(feed);
    });
}
//# sourceMappingURL=createFeed.js.map