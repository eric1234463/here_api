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

var _bookingEnum = require("../../constants/bookingEnum");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var booking;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _models2.default.Booking.update({
              status: req.body.accept ? _bookingEnum.status.Active : _bookingEnum.status.Decline
            }, {
              where: {
                id: req.body.id
              }
            });

          case 2:
            booking = _context.sent;

            res.json(booking[1]);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function updateBooking(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  }

  return updateBooking;
}();
//# sourceMappingURL=updateBooking.js.map