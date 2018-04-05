import models from "../../../models";

export default async function getMedicines(req, res, next) {
  const medicine = await models.Medicine.create({
    ...req.body
  });
  res.json(medicine);
}
