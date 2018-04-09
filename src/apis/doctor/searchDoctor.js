import models from "../../../models";

export default function searchDoctor(req, res, next) {
  let order = [["id", "ASC"]];
  let condition = {
    order: order,
    where: {}
  };

  if (!!req.body.search.district_id) {
    condition["where"]["district_id"] = {
      $eq: req.body.search.district_id
    };
  }

  models.Doctor.findAll(condition).then(doctor => {
    res.json(doctor);
  });
}
