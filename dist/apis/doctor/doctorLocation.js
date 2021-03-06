"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = doctorLocation;

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doctorLocation(req, res, next) {
  _models2.default.Doctor.findAll({
    where: {
      google_lat: {
        $between: [parseFloat(req.query.lat), parseFloat(req.query.lat) + 3]
      },
      google_lng: {
        $between: [parseFloat(req.query.lng), parseFloat(req.query.lng) + 3]
      }
    }
  }).then(function (doctor, created) {
    res.json(doctor);
  });
}
//# sourceMappingURL=doctorLocation.js.map