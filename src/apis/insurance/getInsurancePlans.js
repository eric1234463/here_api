import models from "../../../models";

export default async function getInsurancePlans(req, res, next) {
  const userHealthStatus = await models.patientHealthStatus.findAll({
    where: {
      patientId: req.query.patientId,
    },
    order: [ [ 'createdAt', 'DESC' ]],
    limit: 1,
  });
  
  const insurancePlans = await models.InsurancePlan.findAll({
    order: [["rank", "DESC"],["id","ASC"]]
  });
  
  const result = insurancePlans.map(insurancePlan => {
    const insuranceUserPlan = {
      ...insurancePlan,
      similarity: insurancePlan.dataValues.rank / userHealthStatus[0].dataValues.value
    }
    return insuranceUserPlan;
  });

  res.json(result);
}
