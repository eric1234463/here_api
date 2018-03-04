import models from "../../../models";

export default function getDoctor(req, res, next) {
  models.Doctor.find({
    where: {
      id: req.params.id
    },
    include: [{ model: models.District }]
  }).then(user => {
    res.json(user);
  });
}
