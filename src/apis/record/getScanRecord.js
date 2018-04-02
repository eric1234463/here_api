import models from "../../../models";

export default function getScanRecords(req, res, next) {
  models.ScanRecord.findAll({
    where: {
      patientId: req.query.patientId
    },
    limit: 3,
    order: [["createdAt", "DESC"]],
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
