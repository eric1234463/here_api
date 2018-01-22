import models from '../../../models';


export default function createBiologicalClock(req, res, next) {
    models.patientBiologicalClock
        .findOrCreate({
            type: req.body.type,
            patientId: req.body.patientId,
            createdAt: req.body.date,
        }).spread((clock, created) => {
            res.json(created);
        });
}
