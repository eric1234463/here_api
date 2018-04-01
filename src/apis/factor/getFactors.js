import models from "../../../models";

export default async function getFactors(req, res, next) {
  const factors = await models.Factor.findAll();
  res.json(factors);
}
