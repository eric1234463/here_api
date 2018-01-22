'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createBiologicalClock;

var _models = require('../../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createBiologicalClock(req, res, next) {
    _models2.default.patientBiologicalClock.findOrCreate({
        type: req.body.type,
        patientId: req.body.patientId,
        date: req.body.date
    }).spread(function (clock, created) {
        res.json(created);
    });
}
//# sourceMappingURL=createBiologicalClock.js.map