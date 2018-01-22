import models from '../../../models';


export default function createBiologicalClock(req, res, next) {
    models.patientBiologicalClock
        .create({
            type: req.body.type,
            patientId: req.body.patientId,
        }).then((date) => {
            res.json(date);
        });
}
