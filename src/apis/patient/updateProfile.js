import models from '../../../models';

export default function updateProfile(req, res, next) {
    models.Patient.update(
        {
            hkid: res.body.hkid,
            weight: res.body.weight,
            height: res.body.height,
            gender: res.body.gender,
        }, {
            where: {
                id: res.body.patientId
            }
        }).then(model => {
            res.json(model);
        })
}
