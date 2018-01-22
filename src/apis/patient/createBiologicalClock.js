import models from '../../../models';


export default function createBiologicalClock(req, res, next) {
    models.patientBiologicalClock
        .findOrCreate({
            where: {
                type: req.body.type,
                patientId: req.body.patientId,
                createAt: req.body.date,
            },
            defaults: {
                patientId: req.body.patientId,
                type: req.body.type,
                createAt: req.body.date,
            }
        }).spread((date, created) => {
            res.json(date);
        });
}
