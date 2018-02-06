import models from "../../../models";

export default function getWalkingStep(req, res, next) {
  models.patientWalkingStep
    .findAll({
      where: {
        patientId: req.query.patientId,
      }
    })
    .then(function(obj) {
      res.json(obj);
    });
}
