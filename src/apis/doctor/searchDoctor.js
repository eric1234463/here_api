import models from "../../../models";

export default function searchDoctor(req, res, next) {
  let order = [["id", "ASC"]];
  let condition = {
    order: order,
    where: {},
    include: [{ model: models.District }, { model: models.Specialty }]
  };

  if (!!req.body.search.district_id) {
    condition["where"]["district_id"] = {
      $eq: req.body.search.district_id
    };
  }

  if (!!req.body.sort) {
    condition.order = [];
    condition.order.push(req.body.sort);
  }

  models.Doctor.findAll(condition).then(doctor => {
    res.json(doctor);
  });
}
