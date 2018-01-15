'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getFeeds;

var _models = require('../../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFeeds(req, res, next) {
    _models2.default.Feed.findAll({
        include: [{ model: _models2.default.Doctor }]
    }).then(function (feeds) {
        res.json(feeds);
    });
}
//# sourceMappingURL=getFeeds.js.map