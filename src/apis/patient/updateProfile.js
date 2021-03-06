import models from '../../../models';

export default function updateProfile(req, res, next) {
    models.Patient.update(
        {
            hkid: req.body.hkid,
            weight: req.body.weight,
            height: req.body.height,
        }, {
            where: {
                id: req.body.patientId
            },
            plain: true,
            returning: true
        }).then(model => {
            res.json(model[1]);
        })
}
