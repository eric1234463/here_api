import models from "../../../models";
import getUserAvgHealthStatus from './getUserAvgHealthStatus';

export default async function searchInsurancePlans(req, res, next) {
  const userAvgHealthRank = await getUserAvgHealthStatus(req.body.patientId);
  let order = [["id", "ASC"]];
  let condition = {
    order: order,
    where: {}
  };
  
  if (!!req.body.sort) {
    condition.order.push(req.body.sort);
  };

  if (!!req.body.search.provider) {
    condition["where"]["provider"] = {
      $eq: req.body.search.provider
    };
  }

  if (!!req.body.search.surgery_cover) {
    condition["where"]["surgery_cover"] = {
      $gte: req.body.search.surgery_cover
    };
  }

  if (!!req.body.search.daliy_cover) {
    condition["where"]["daliy_cover"] = {
      $gte: req.body.search.daliy_cover
    };
  }

  const insurancePlans = await models.InsurancePlan.findAll(condition);

  const result = insurancePlans.map(insurancePlan => {
    const insuranceUserPlan = {
      ...insurancePlan.dataValues,
      similarity: Math.ceil(
        userAvgHealthRank /
          insurancePlan.dataValues.rank *
          100
      )
    };
    return insuranceUserPlan;
  });

  const sortedResult = result.sort((a, b) => {
    return b.similarity - a.similarity;
  });

  res.json(sortedResult);
}
