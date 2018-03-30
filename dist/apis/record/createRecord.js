'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _models = require('../../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var colorClass, recordPayload, record, index, randomClass, _index, _randomClass;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        colorClass = ['mat-orange-500-bg', 'mat-cyan-500-bg', 'mat-red-500-bg', 'mat-pink-500-bg', 'mat-purple-500-bg', 'mat-deep-purple-500-bg', 'mat-indigo-500-bg'];
                        recordPayload = {
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

                        _context.t0 = regeneratorRuntime.keys(req.body.medicines);

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

                        _context.t2 = regeneratorRuntime.keys(req.body.factors);

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