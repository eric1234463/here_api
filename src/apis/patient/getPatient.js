import models from "../../../models";

export default function getPatient(req, res, next) {
  models.Patient
    .findOne({
      where: {
        id: req.params.id
      },
      order: [['createdAt', 'DESC']]
    })
    .then(function(obj) {
      res.json(obj);
    });
}
