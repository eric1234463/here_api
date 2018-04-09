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

var _getUserAvgHealthStatus = require("./getUserAvgHealthStatus");

var _getUserAvgHealthStatus2 = _interopRequireDefault(_getUserAvgHealthStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var userAvgHealthRank, order, condition, insurancePlans, result, sortedResult;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _getUserAvgHealthStatus2.default)(req.body.patientId);

          case 2:
            userAvgHealthRank = _context.sent;
            order = [["id", "ASC"]];
            condition = {
              order: order,
              where: {}
            };


            if (!!req.body.sort) {
              condition.order.push(req.body.sort);
            };

            if (!!req.body.search.provider) {
              condition["where"]["provider"] = {
                $eq: req.body.search.provider
              };
            }

            if (!!req.body.search.surgery_cover) {
              condition["where"]["surgery_cover"] = {
                $gte: req.body.search.surgery_cover
              };
            }

            if (!!req.body.search.daliy_cover) {
              condition["where"]["daliy_cover"] = {
                $gte: req.body.search.daliy_cover
              };
            }

            _context.next = 12;
            return _models2.default.InsurancePlan.findAll(condition);

          case 12:
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

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function searchInsurancePlans(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  }

  return searchInsurancePlans;
}();
//# sourceMappingURL=searchInsurancePlans.js.map