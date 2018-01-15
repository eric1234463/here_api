'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createRecord;

var _models = require('../../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createRecord(req, res, next) {
    _models2.default.Record.create({
        desctiption: 'Hello World',
        doctorId: 1,
        patientId: 1,
        rate: 4
    }).then(function (record) {
        res.json(record);
    });
}
//# sourceMappingURL=createRecord.js.map