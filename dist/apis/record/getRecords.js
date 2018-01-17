'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getRecords;

var _models = require('../../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRecords(req, res, next) {
    _models2.default.Record.findAll({
        where: {
            patientId: req.query.userId
        },
        include: [{ model: _models2.default.Doctor }, { model: _models2.default.Patient }, { model: _models2.default.RecordFactor, include: _models2.default.Factor }, { model: _models2.default.RecordMedicine, include: _models2.default.Medicine }]
    }).then(function (records) {
        res.json(records);
    });
}
//# sourceMappingURL=getRecords.js.map