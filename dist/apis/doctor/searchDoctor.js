"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = searchDoctor;

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function searchDoctor(req, res, next) {
  var order = [["id", "ASC"]];
  var condition = {
    order: order,
    where: {},
    include: [{ model: _models2.default.District }, { model: _models2.default.Specialty }]
  };

  if (!!req.body.search.district_id) {
    condition["where"]["district_id"] = {
      $eq: req.body.search.district_id
    };
  }

  _models2.default.Doctor.findAll(condition).then(function (doctor) {
    res.json(doctor);
  });
}
//# sourceMappingURL=searchDoctor.js.map