"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getScanRecords;

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getScanRecords(req, res, next) {
  _models2.default.ScanRecord.findAll({
    where: {
      patientId: req.query.patientId
    },
    include: [{
      model: _models2.default.Doctor
    }, {
      model: _models2.default.Patient
    }]
  }).then(function (records) {
    res.json(records);
  });
}
//# sourceMappingURL=getScanRecord.js.map