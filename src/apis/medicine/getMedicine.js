import models from "../../../models";

export default async function getMedicine(req, res, next) {
  const medicine = await models.Medicine.findOne({
    where: {
      id: req.params.id
    }
  });
  let hasBan = false;
  if (req.query.patientId) {
    const patientMedicine = await models.PatientMedicine.findOne({
      where: {
        medicine_id: req.params.id,
        patient_id: req.query.patientId
      }
    });

    if (patientMedicine) {
      hasBan = true;
    }
  }

  const result = {
    medicine,
    hasBan
  }
  res.json(result);
}
