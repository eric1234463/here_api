"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var userHealthStatus, userTotalHealthRank, userAvgHealthRank, insurancePlans, result, sortedResult;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _models2.default.patientHealthStatus.findAll({
              where: {
                patientId: req.query.patientId
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
            _context.next = 7;
            return _models2.default.InsurancePlan.findAll({
              order: [["rank", "DESC"], ["id", "ASC"]]
            });

          case 7:
            insurancePlans = _context.sent;
            result = insurancePlans.map(function (insurancePlan) {
              var insuranceUserPlan = (0, _extends3.default)({}, insurancePlan.dataValues, {
                similarity: Math.ceil(userAvgHealthRank / insurancePlan.dataValues.rank * 100)
              });
              return insuranceUserPlan;
            });
            sortedResult = result.sort(function (a, b) {
              return b.similarity - a.similarity;
            });


            res.json(sortedResult);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function getInsurancePlans(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  }

  return getInsurancePlans;
}();
//# sourceMappingURL=getInsurancePlans.js.map