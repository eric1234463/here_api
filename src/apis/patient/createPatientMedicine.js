import models from "../../../models";

export default async function createPatientMedicine(req, res, next) {
  const patientMedicine = await models.PatientMedicine.create({
    patient_id: req.body.patientId,
    medicine_id: req.body.medicineId
  });

  res.json(patientMedicine);
}
