import models from "../../../models";

export default async function getInsurancePlans(req, res, next) {
  const userHealthStatus = await models.patientHealthStatus.findAll({
    where: {
      patientId: req.query.patientId
    },
    order: [["createdAt", "DESC"]],
    limit: 1
  });

  const insurancePlans = await models.InsurancePlan.findAll({
    order: [["rank", "DESC"], ["id", "ASC"]]
  });

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
