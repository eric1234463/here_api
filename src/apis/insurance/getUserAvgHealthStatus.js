import models from "../../../models";

export default async function getUserAvgHealthStatus(patientId) {
  const userHealthStatus = await models.patientHealthStatus.findAll({
    where: {
      patientId: patientId
    },
    order: [["createdAt", "DESC"]]
  });

  const userTotalHealthRank = userHealthStatus.reduce((acc, element) => {
    acc += parseInt(element.dataValues.value);
    return acc;
  }, 0);

  const userAvgHealthRank = userTotalHealthRank / userHealthStatus.length;

  return userAvgHealthRank;
}
