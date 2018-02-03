import models from "../../../models";

export default function createWalkingStep(req, res, next) {
  models.patientWalkingStep
    .findOrCreate({
      defaults: {
        value: req.body.step
      },
      where: {
        patientId: req.body.patientId,
        date: req.body.date
      }
    })
    .spread((clock, created) => {
      res.json({ status: created });
    });
}
