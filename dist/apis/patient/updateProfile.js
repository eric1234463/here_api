'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = updateProfile;

var _models = require('../../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updateProfile(req, res, next) {
    _models2.default.Patient.update({
        hkid: req.body.hkid,
        weight: req.body.weight,
        height: req.body.height
    }, {
        where: {
            id: req.body.patientId
        },
        plain: true,
        returning: true
    }).then(function (model) {
        res.json(model[1]);
    });
}
//# sourceMappingURL=updateProfile.js.map