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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var districts;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _models2.default.District.findAll();

          case 2:
            districts = _context.sent;

            res.json(districts);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function getDistricts(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  }

  return getDistricts;
}();
//# sourceMappingURL=getDistrict.js.map