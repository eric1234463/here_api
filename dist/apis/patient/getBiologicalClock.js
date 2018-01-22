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
        var sleepData = jsonData.reduce(function (arr, collectionElement) {
            if (collectionElement.type == 'SLEEP') {
                var time = (0, _moment2.default)(collectionElement.createdAt);
                var remainder = 30 - time.minute() % 30;
                var roundUpTime = (0, _moment2.default)(time).add("minutes", remainder).format("h:mm");
                arr.push(roundUpTime);
            }
            return arr;
        }, []);
        var wakeData = jsonData.reduce(function (arr, collectionElement) {
            if (collectionElement.type == 'WAKE') {
                var time = (0, _moment2.default)(collectionElement.createdAt);
                var remainder = 30 - time.minute() % 30;
                var roundUpTime = (0, _moment2.default)(time).add("minutes", remainder).format("h:mm");
                arr.push(roundUpTime);
            }
            return arr;
        }, []);

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