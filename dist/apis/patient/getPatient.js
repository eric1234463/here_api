'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPatient;

var _models = require('../../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPatient(req, res, next) {
  _models2.default.Patient.findOne({
    where: {
      id: req.params.id
    },
    order: [['createdAt', 'DESC']]
  }).then(function (obj) {
    res.json(obj);
  });
}
//# sourceMappingURL=getPatient.js.map