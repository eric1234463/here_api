import models from "../../../models";
import getUserAvgHealthStatus from './getUserAvgHealthStatus';

export default async function getInsurancePlans(req, res, next) {
  
  const userAvgHealthRank = await getUserAvgHealthStatus(req.query.patientId);
  
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
