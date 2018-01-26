import models from "../../../models";

export default function doctorLocation(req, res, next) {
  models.Doctor.findAll({
    where: {
      google_lat: {
        $in: [req.body.lat, req.body.lat + 3]
      },
      google_lng: {
        $in: [req.body.lng, req.body.lng + 3]
      }
    }
  }).then((doctor, created) => {
    res.json(doctor);
  });
}
