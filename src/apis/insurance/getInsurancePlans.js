import models from "../../../models";

export default function getInsurancePlans(req, res, next) {
  models.InsurancePlan.findAll().then(insurancePlans => {
    res.json(insurancePlans);
  });
}
