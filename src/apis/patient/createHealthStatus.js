import models from "../../../models";

export default function createHealthStatus(req, res, next) {
  let value = {
    patientId: req.body.patientId,
    date: req.body.date,
    value: req.body.value,
    step: req.body.step,
    distance: req.body.distance
  };
  models.patientHealthStatus
    .findOne({
      where: {
        patientId: req.body.patientId,
        date: req.body.date
      }
    })
    .then(function(obj) {
      if (obj) {
        // update
        obj.update(value);
        res.json({
          status: "update"
        });
      } else {
        // insert
        models.patientHealthStatus.create(value);
        res.json({
          status: "create"
        });
      }
    });
}
