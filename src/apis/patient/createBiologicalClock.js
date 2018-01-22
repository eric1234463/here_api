import models from '../../../models';


export default function createBiologicalClock(req, res, next) {
    models.patientBiologicalClock
        .findOrCreate({
            where: {
                type: req.body.type,
                patientId: req.body.patientId,
                date: req.body.date
            }
        }).spread((clock, created) => {
            res.json({ status: created });
        });
}
