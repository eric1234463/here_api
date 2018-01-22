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
        hkid: res.body.hkid,
        weight: res.body.weight,
        height: res.body.height,
        gender: res.body.gender
    }, {
        where: {
            id: res.body.patientId
        }
    }).then(function (model) {
        res.json(model);
    });
}
//# sourceMappingURL=updateProfile.js.map