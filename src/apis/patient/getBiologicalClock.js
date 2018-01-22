import models from '../../../models';


export default function getBiologicalClock(req, res, next) {
    models.patientBiologicalClock
        .findAll({
            where: {
                patientId: req.body.patientId,
            },
            between: [req.body.from, req.body.to]
        }).then((dates) => {
            res.json(dates);
        });
}
