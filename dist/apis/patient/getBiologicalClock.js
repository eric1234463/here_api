'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getBiologicalClock;

var _models = require('../../../models');

var _models2 = _interopRequireDefault(_models);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBiologicalClock(req, res, next) {
    _models2.default.patientBiologicalClock.findAll({
        where: {
            patientId: req.query.patientId,
            createdAt: {
                $between: [req.query.from, req.query.to]
            }
        }
    }).then(function (dates) {
        var jsonData = _lodash2.default.map(dates, 'dataValues');
        var sleepData = _lodash2.default.map(jsonData, function (obj) {
            if (obj.type == 'SLEEP') {
                var time = (0, _moment2.default)(obj.createdAt).format('h:mm');
                return time;
            }
        });
        var wakeData = _lodash2.default.map(jsonData, function (obj) {
            if (obj.type === 'WAKE') {
                var time = (0, _moment2.default)(obj.createdAt).format('h:mm');
                return time;
            }
        });
        console.log(wakeData);
        var result = [{
            label: 'SLEEP',
            data: sleepData
        }, {
            label: 'WAKE',
            data: wakeData
        }];
        res.json(result);
    });
}
//# sourceMappingURL=getBiologicalClock.js.map