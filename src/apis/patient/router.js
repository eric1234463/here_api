import express from "express";
import patientLogin from "./patientLogin";
import createBiologicalClock from "./createBiologicalClock";
import getBiologicalClock from "./getBiologicalClock";
import updateProfile from "./updateProfile";
import createWalkingStep from "./createWalkingStep";

const patientRouter = express.Router();

patientRouter.put("/", updateProfile);
patientRouter.post("/login", patientLogin);
patientRouter.post("/biologicalClock", createBiologicalClock);
patientRouter.post("/WalkingStep", createWalkingStep);
patientRouter.get("/biologicalClock", getBiologicalClock);

module.exports = patientRouter;
