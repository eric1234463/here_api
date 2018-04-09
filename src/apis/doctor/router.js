import express from "express";
import doctorLogin from "./doctorLogin";
import doctorLocation from "./doctorLocation";
import getDoctor from "./getDoctor";
import getDoctors from "./getDoctors";
import updateDoctor from "./updateDoctor";
import searchDoctor from "./searchDoctor";


const doctorRouter = express.Router();
doctorRouter.post("/login", doctorLogin);
doctorRouter.post("/search", searchDoctor);
doctorRouter.get("/location", doctorLocation);
doctorRouter.get("/", getDoctors);
doctorRouter.get("/:id", getDoctor);
doctorRouter.put("/:id", updateDoctor);

module.exports = doctorRouter;