import models from "../../../models";

export default function getScanRecords(req, res, next) {
  models.ScanRecord.findAll({
    where: {
      patientId: req.query.patientId
    },
    include: [
      {
        model: models.Doctor
      },
      {
        model: models.Patient
      }
    ]
  }).then(records => {
    res.json(records);
  });
}
