import models from '../../../models';


export default function createBiologicalClock(req, res, next) {
    models.patientBiologicalClock
        .create({
            where: {
                type: req.body.type,
                patientId: req.body.patientId,
            },
            defaults: {
                patientId: req.body.patientId,
                type: req.body.type,
            }
        }).spread((date, created) => {
            res.json(date);
        });
}
