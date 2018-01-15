'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getRecord;

var _models = require('../../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRecord(req, res, next) {
    _models2.default.Record.findOne({
        where: {
            id: req.params.id
        },
        include: [{ model: _models2.default.Doctor }, { model: _models2.default.Patient }, { model: _models2.default.RecordFactor, include: _models2.default.Factor }, { model: _models2.default.RecordMedicine, include: _models2.default.Medicine }]
    }).then(function (records) {
        res.json(records);
    });
}
//# sourceMappingURL=getRecord.js.map