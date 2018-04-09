import models from "../../../models";

export default async function getDistricts(req, res, next) {
  const districts = await models.District.findAll();
  res.json(districts);
}
