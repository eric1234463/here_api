'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getBiologicalClock;

var _models = require('../../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBiologicalClock(req, res, next) {
    _models2.default.patientBiologicalClock.findAll({
        where: {
            patientId: req.body.patientId
        },
        between: [req.body.from, req.body.to]
    }).then(function (dates) {
        res.json(dates);
    });
}
//# sourceMappingURL=getBiologicalClock.js.map