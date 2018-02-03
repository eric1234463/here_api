import models from "../../../models";

export default function createWalkingStep(req, res, next) {
  let value = {
    patientId: req.body.patientId,
    date: req.body.date,
    value: req.body.step
  };
  models.patientWalkingStep
    .findOne({
      where: {
        patientId: req.body.patientId,
        date: req.body.date
      }
    })
    .then(function(obj) {
      if (obj) {
        // update
        return obj.update(values);
      } else {
        // insert
        return Model.create(values);
      }
    });
}
