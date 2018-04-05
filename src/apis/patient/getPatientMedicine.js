import models from "../../../models";

export default async function getPatientMedicine(req, res, next) {
  const patientMedicines = await models.PatientMedicine.findAll({
    where: {
      patient_id: req.params.id
    },
    include: [
      {
        model: models.Medicine
      }
    ]
  });

  res.json(patientMedicines);
}
