import models from "../../../models";

export default function createScanRecord(req, res, next) {
  models.ScanRecord.create({
    doctorId: req.body.doctorId,
    patientId: req.body.patientId
  }).then(record => {
    res.json(record);
  });
}
