'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getBiologicalClock;

var _models = require('../../../models');

var _models2 = _interopRequireDefault(_models);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBiologicalClock(req, res, next) {
    if (req.query.type != undefined) {
        var status = false;
        _models2.default.patientBiologicalClock.count({
            where: {
                type: req.query.type,
                patientId: req.query.patientId,
                date: req.query.date
            }
        }).then(function (clock) {
            if (clock != 0) {
                status = true;
            }
            res.json({ status: status });
        });
    } else {
        var dateArray = [];
        var sleepArray = [];
        var wakeArray = [];
        var start = new Date(req.query.from);
        var end = new Date(req.query.to);

        while (start <= end) {
            dateArray.push(start.getTime());
            sleepArray.push(0);
            wakeArray.push(0);
            var newDate = start.setDate(start.getDate() + 1);
            start = new Date(newDate);
        }

        _models2.default.patientBiologicalClock.findAll({
            where: {
                patientId: req.query.patientId,
                date: {
                    $between: [req.query.from, req.query.to]
                }
            }
        }).then(function (dates) {
            var jsonData = _lodash2.default.map(dates, 'dataValues');
            var dataArr = jsonData.forEach(function (collectionElement) {
                var date = new Date(collectionElement.date).getTime();
                var index = dateArray.findIndex(function (x) {
                    return x == date;
                });
                var time = (0, _momentTimezone2.default)(collectionElement.dateTime).tz("Asia/Hong_Kong");
                var remainder = 30 - time.minute() % 30;
                var roundUpTime = (0, _momentTimezone2.default)(time).add(remainder, "minutes").hours();
                if (collectionElement.type == 'SLEEP') {
                    sleepArray[index] = roundUpTime;
                } else {
                    wakeArray[index] = roundUpTime;
                }
            });
            var hourArray = [];
            for (var i = 0; i < sleepArray.length; i++) {
                var sleepHour = Math.abs(sleepArray[i] - wakeArray[i]);
                hourArray.push(sleepArray);
            }
            var result = [{
                label: 'SLEEP HOUR',
                data: hourArray
            }];
            res.json(result);
        });
    }
}
//# sourceMappingURL=getBiologicalClock.js.map