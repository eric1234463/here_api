'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _models = require('../../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
        var colorClass, recordPayload, record, index, randomClass, _index, _randomClass;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        colorClass = ['mat-orange-500-bg', 'mat-cyan-500-bg', 'mat-red-500-bg', 'mat-pink-500-bg', 'mat-purple-500-bg', 'mat-deep-purple-500-bg', 'mat-indigo-500-bg'];
                        recordPayload = {
                            title: req.body.record.title,
                            description: req.body.record.description,
                            doctorId: req.body.record.doctorId,
                            patientId: req.body.record.patientId
                        };
                        _context.next = 4;
                        return _models2.default.Record.create(recordPayload);

                    case 4:
                        record = _context.sent;

                        if (!req.body.medicines) {
                            _context.next = 15;
                            break;
                        }

                        _context.t0 = _regenerator2.default.keys(req.body.medicines);

                    case 7:
                        if ((_context.t1 = _context.t0()).done) {
                            _context.next = 14;
                            break;
                        }

                        index = _context.t1.value;
                        randomClass = colorClass[Math.round(Math.random() * 6)];
                        _context.next = 12;
                        return _models2.default.RecordMedicine.create({
                            medicineId: req.body.medicines[index],
                            recordId: record.dataValues.id,
                            class: randomClass
                        });

                    case 12:
                        _context.next = 7;
                        break;

                    case 14:
                        ;

                    case 15:
                        ;

                        if (!req.body.factors) {
                            _context.next = 26;
                            break;
                        }

                        _context.t2 = _regenerator2.default.keys(req.body.factors);

                    case 18:
                        if ((_context.t3 = _context.t2()).done) {
                            _context.next = 25;
                            break;
                        }

                        _index = _context.t3.value;
                        _randomClass = colorClass[Math.round(Math.random() * 6)];
                        _context.next = 23;
                        return _models2.default.RecordFactor.create({
                            factorId: req.body.factors[_index],
                            recordId: record.dataValues.id,
                            class: _randomClass
                        });

                    case 23:
                        _context.next = 18;
                        break;

                    case 25:
                        ;

                    case 26:
                        ;

                        res.json({
                            created: true
                        });

                    case 28:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    function createRecord(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    }

    return createRecord;
}();
//# sourceMappingURL=createRecord.js.map