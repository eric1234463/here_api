import models from "../../../models";

export default async function searchInsurancePlans(req, res, next) {
  const userHealthStatus = await models.patientHealthStatus.findAll({
    where: {
      patientId: req.body.patientId
    },
    order: [["createdAt", "DESC"]],
    limit: 1
  });

  let condtion = {
    order: [["id", "ASC"]],
    where: {}
  };

  if (!!req.body.search.provider) {
    condtion["where"]["provider"] = {
      $eq: req.body.search.provider
    };
  }

  if (!!req.body.search.surgery_cover) {
    condtion["where"]["surgery_cover"] = {
      $gte: req.body.search.surgery_cover
    };
  }

  if (!!req.body.search.daliy_cover) {
    condtion["where"]["daliy_cover"] = {
      $gte: req.body.search.daliy_cover
    };
  }

  const insurancePlans = await models.InsurancePlan.findAll(condtion);

  const result = insurancePlans.map(insurancePlan => {
    const insuranceUserPlan = {
      ...insurancePlan.dataValues,
      similarity: Math.ceil(
        userHealthStatus[0].dataValues.value /
          insurancePlan.dataValues.rank *
          100
      )
    };
    return insuranceUserPlan;
  });

  res.json(result);
}
