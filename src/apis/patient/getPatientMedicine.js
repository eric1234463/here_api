import models from "../../../models";

export default async function getPatientMedicine(req, res, next) {
  const patientMedicines = await models.PatientMedicine.findAll({
    patient_id: req.params.id,
  });
  
  res.json(patientMedicines);
}
