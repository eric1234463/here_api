import models from "../../../models";

export default function getWalkingStep(req, res, next) {
  models.patientHealthStatus
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
