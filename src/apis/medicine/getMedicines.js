import models from "../../../models";

export default async function getMedicines(req, res, next) {
  const medicines = await models.Medicine.findAll();
  res.json(medicines);
}
