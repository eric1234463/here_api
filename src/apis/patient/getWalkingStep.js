import models from "../../../models";

export default function getWalkingStep(req, res, next) {
  models.patientWalkingStep
    .findAll({
      where: {
        patientId: req.query.patientId,
      },
      order: [['createdAt', 'DESC']]
    })
    .then(function(obj) {
      res.json(obj);
    });
}
