'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = patientLogin;

var _models = require('../../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function patientLogin(req, res, next) {
    if (!!req.body.gender && !!req.body.age) {
        _models2.default.Patient.findOrCreate({
            where: {
                uid: req.body.uid,
                email: req.body.email
            },
            defaults: {
                uid: req.body.uid,
                email: req.body.email,
                displayName: req.body.displayName,
                photoURL: req.body.photoURL,
                gender: req.body.gender,
                age: req.body.age
            }
        }).spread(function (user, created) {
            res.json(user);
        });
    } else {
        _models2.default.Patient.findOrCreate({
            where: {
                uid: req.body.uid,
                email: req.body.email
            },
            defaults: {
                uid: req.body.uid,
                email: req.body.email,
                displayName: req.body.displayName,
                photoURL: req.body.photoURL
            }
        }).spread(function (user, created) {
            res.json(user);
        });
    }
}
//# sourceMappingURL=patientLogin.js.map