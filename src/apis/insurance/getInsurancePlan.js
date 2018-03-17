import models from "../../../models";

export default function getInsurancePlan(req, res, next) {
  models.InsurancePlan.findOne({
    where: {
      id: req.params.id
    },
    include: [
      { 
        model: models.InsurancePlanAdvantage,
        include: [models.InsuranceAdvantage]
      },
      {
        model: models.InsurancePlanDisadvantage,
        include: [models.InsuranceDisadvantage]
      }
    ]
  }).then(insurancePlans => {
    res.json(insurancePlans);
  });
}
