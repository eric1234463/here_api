'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createBiologicalClock;

var _models = require('../../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createBiologicalClock(req, res, next) {
    if (req.body.type == 'SLEEP') {
        _models2.default.patientBiologicalClock.findOrCreate({
            where: {
                type: req.body.type,
                patientId: req.body.patientId,
                date: req.body.date
            }
        }).spread(function (clock, created) {
            res.json({ status: created });
        });
    } else {
        _models2.default.patientBiologicalClock.findOrCreate({
            where: {
                type: req.body.type,
                patientId: req.body.patientId,
                date: req.body.date,
                createdAt: req.body.date
            }
        }, {
            forceTimestamps: true
        }).spread(function (clock, created) {
            res.json({ status: created });
        });
    }
}
//# sourceMappingURL=createBiologicalClock.js.map