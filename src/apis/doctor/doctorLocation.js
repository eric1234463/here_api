import models from "../../../models";

export default function doctorLocation(req, res, next) {
  models.Doctor.findAll({
    where: {
      google_lat: {
        $in: [parseFloat(req.query.lat), parseFloat(req.query.lat) + 3]
      },
      google_lng: {
        $in: [parseFloat(req.query.lng), parseFloat(req.query.lng) + 3]
      }
    }
  }).then((doctor, created) => {
    res.json(doctor);
  });
}
