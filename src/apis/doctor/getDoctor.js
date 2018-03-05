import models from "../../../models";

export default function getDoctor(req, res, next) {
  models.Doctor.find({
    where: {
      id: req.params.id
    },
    include: [{ model: models.District }, { model: models.Specialty }]
  }).then(user => {
    res.json(user);
  });
}
