"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createScanRecord;

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createScanRecord(req, res, next) {
  _models2.default.ScanRecord.create({
    doctorId: req.body.doctorId,
    patientId: req.body.patientId
  }).then(function (record) {
    res.json(record);
  });
}
//# sourceMappingURL=createScanRecord.js.map