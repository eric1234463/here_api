import models from "../../../models";

export default function searchDoctor(req, res, next) {
  models.Doctor.findAll({
    where: {
      district_id: req.body.district_id
    }
  }).then((doctor, created) => {
    res.json(doctor);
  });
}
