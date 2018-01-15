'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getFeed;

var _models = require('../../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFeed(req, res, next) {
    _models2.default.Feed.findOne({
        where: {
            id: req.params.id
        },
        include: [{ model: _models2.default.Doctor }]
    }).then(function (feed) {
        res.json(feed);
    });
}
//# sourceMappingURL=getFeed.js.map