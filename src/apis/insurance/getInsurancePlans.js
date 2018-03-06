import models from "../../../models";

export default function getInsurancePlans(req, res, next) {
  models.InsurancePlan.findAll({
    order: 'id ASC'
  }).then(insurancePlans => {
    res.json(insurancePlans);
  });
}
