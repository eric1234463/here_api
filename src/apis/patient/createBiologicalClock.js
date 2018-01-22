import models from '../../../models';


export default function createBiologicalClock(req, res, next) {
    models.patientBiologicalClock
        .create({
            type: req.body.type,
            patientId: req.body.patientId,
        }).spread((date, created) => {
            res.json(date);
        });
}
