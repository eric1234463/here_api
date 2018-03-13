import models from "../../../models";

export default function getDoctors(req, res, next) {
  models.Doctor.findAll({
    include: [{ model: models.District }, { model: models.Specialty }]
  }).then(doctors => {
    res.json(doctors);
  });
}
