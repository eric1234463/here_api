import models from "../../../models";

export default function updateDoctor(req, res, next) {
  models.Doctor.update(
    {
      displayName: req.body.displayName,
      age: req.body.age,
      gender: req.body.gender,
      location: req.body.location,
      about: req.body.about,
      telphone: req.body.telphone
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(user => {
    res.json(user);
  });
}
