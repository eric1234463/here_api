import models from "../../../models";

export default async function getMedicine(req, res, next) {
  const medicine = await models.Medicine.findOne({
    where: {
      id: req.params.id
    }
  });
  res.json(medicine);
}
