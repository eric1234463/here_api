import models from "../../../models";

export default async function getInsurancePlans(req, res, next) {
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


  const insurancePlans = await models.InsurancePlan.findAll({
    order: [["rank", "DESC"], ["id", "ASC"]]
  });

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
