import models from "../../../models";

export default async function removePatientMedicine(req, res, next) {
  const patientMedicines = await models.PatientMedicine.destroy({
    where: {
      id: req.params.id
    }
  });

  res.json(patientMedicines);
}
