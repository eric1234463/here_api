"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var url, geocoding, google_lat, google_lng;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + req.body.location + "&key=AIzaSyDY9138TLI3CkoYw8Zz7YR5nOBE3qPlTtE";
            _context.next = 3;
            return _axios2.default.get(url);

          case 3:
            geocoding = _context.sent;
            google_lat = 0;
            google_lng = 0;

            if (geocoding.data.results.length > 0) {
              google_lat = geocoding.data.results[0].geometry.location.lat;
              google_lng = geocoding.data.results[0].geometry.location.lng;
            }
            _models2.default.Doctor.update({
              displayName: req.body.displayName,
              age: req.body.age,
              gender: req.body.gender,
              location: req.body.location,
              about: req.body.about,
              telphone: req.body.telphone,
              google_lat: google_lat,
              google_lng: google_lng
            }, {
              where: {
                id: req.params.id
              }
            }).then(function (user) {
              res.json(user);
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function updateDoctor(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  }

  return updateDoctor;
}();
//# sourceMappingURL=updateDoctor.js.map