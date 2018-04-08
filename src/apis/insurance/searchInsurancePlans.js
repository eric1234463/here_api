import models from "../../../models";

export default async function searchInsurancePlans(req, res, next) {
  const userHealthStatus = await models.patientHealthStatus.findAll({
    where: {
      patientId: req.query.patientId
    },
    order: [["createdAt", "DESC"]]
  });

  const userTotalHealthRank = userHealthStatus.reduce((acc, element) => {
    acc += parseInt(element.dataValues.value);
    return acc;
  }, 0);
  
  const userAvgHealthRank = userTotalHealthRank / userHealthStatus.length;

  let condition = {
    order: [["id", "ASC"]],
    where: {}
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
