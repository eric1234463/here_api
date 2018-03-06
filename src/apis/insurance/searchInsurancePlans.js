import models from "../../../models";

export default function searchInsurancePlans(req, res, next) {
  console.log(req.body);
  let condtion = {
    order: [["id", "ASC"]],
    where:{}
  };

  if (!req.body.search.provider) {
    condtion['where']['provider'] = {
      $eq: req.body.search.provider
    };
  }

  if (!req.body.search.surgery_cover) {
    condtion['where']['surgery_cover'] = {
      $gte: req.body.surgery_cover
    };
  }

  if (!req.body.search.daliy_cover) {
    condtion['where']['daliy_cover'] = {
      $gte: req.body.search.daliy_cover
    };
  }
  console.log(condtion);
  models.InsurancePlan.findAll(condtion).then(insurancePlans => {
    res.json(insurancePlans);
  });
}
