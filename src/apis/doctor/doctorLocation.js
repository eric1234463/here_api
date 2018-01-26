import models from "../../../models";

export default function doctorLocation(req, res, next) {
  models.Doctor.findAll({
    where: {
      google_lat: {
        $in: [req.query.lat, req.query.lat + 3]
      },
      google_lng: {
        $in: [req.query.lng, req.query.lng + 3]
      }
    }
  }).then((doctor, created) => {
    res.json(doctor);
  });
}
