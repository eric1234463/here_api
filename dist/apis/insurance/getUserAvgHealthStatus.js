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
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(patientId) {
    var userHealthStatus, userTotalHealthRank, userAvgHealthRank;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _models2.default.patientHealthStatus.findAll({
              where: {
                patientId: patientId
              },
              order: [["createdAt", "DESC"]]
            });

          case 2:
            userHealthStatus = _context.sent;
            userTotalHealthRank = userHealthStatus.reduce(function (acc, element) {
              acc += parseInt(element.dataValues.value);
              return acc;
            }, 0);
            userAvgHealthRank = userTotalHealthRank / userHealthStatus.length;
            return _context.abrupt("return", userAvgHealthRank);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function getUserAvgHealthStatus(_x) {
    return _ref.apply(this, arguments);
  }

  return getUserAvgHealthStatus;
}();
//# sourceMappingURL=getUserAvgHealthStatus.js.map