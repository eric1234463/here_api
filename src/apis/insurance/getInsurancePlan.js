import models from "../../../models";
import getUserAvgHealthStatus from './getUserAvgHealthStatus';

export default async function getInsurancePlan(req, res, next) {

  const userAvgHealthRank = await getUserAvgHealthStatus(req.query.patientId);

  const insurancePlan = await models.InsurancePlan.findOne({
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
  });

  res.json({
    ...insurancePlan.dataValues,
    similarity: Math.ceil(
      userAvgHealthRank /
        insurancePlan.dataValues.rank *
        100
    )
  })
}
