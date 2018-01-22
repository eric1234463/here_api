import models from '../../../models';


export default function getBiologicalClock(req, res, next) {
    models.patientBiologicalClock
        .findAll({
            where: {
                patientId: req.query.patientId,
            },
            between: [req.query.from, req.query.to]
        }).then((dates) => {
            res.json(dates);
        });
}
