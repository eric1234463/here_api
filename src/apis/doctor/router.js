import express from "express";
import doctorLogin from "./doctorLogin";
import doctorLocation from "./doctorLocation";
import getDoctor from "./getDoctor";
import updateDoctor from "./updateDoctor";

const doctorRouter = express.Router();
doctorRouter.post("/login", doctorLogin);
doctorRouter.get("/location", doctorLocation);
doctorRouter.get("/:id", getDoctor);
doctorRouter.put("/:id", updateDoctor);

module.exports = doctorRouter;
