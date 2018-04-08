'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _models = require('../../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var userHealthStatus, condtion, insurancePlans, result;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _models2.default.patientHealthStatus.findAll({
              where: {
                patientId: req.body.patientId
              },
              order: [['createdAt', 'DESC']],
              limit: 1
            });

          case 2:
            userHealthStatus = _context.sent;
            condtion = {
              order: [["id", "ASC"]],
              where: {}
            };


            if (!!req.body.search.provider) {
              condtion['where']['provider'] = {
                $eq: req.body.search.provider
              };
            }

            if (!!req.body.search.surgery_cover) {
              condtion['where']['surgery_cover'] = {
                $gte: req.body.search.surgery_cover
              };
            }

            if (!!req.body.search.daliy_cover) {
              condtion['where']['daliy_cover'] = {
                $gte: req.body.search.daliy_cover
              };
            }

            _context.next = 9;
            return _models2.default.InsurancePlan.findAll(condtion);

          case 9:
            insurancePlans = _context.sent;
            result = insurancePlans.map(function (insurancePlan) {
              var insuranceUserPlan = (0, _extends3.default)({}, insurancePlan, {
                similarity: insurancePlan.dataValues.rank / userHealthStatus[0].dataValues.value
              });
              return insuranceUserPlan;
            });


            res.json(result);

          case 12:
          case 'end':
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