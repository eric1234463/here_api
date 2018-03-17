import express from "express";
import getInsurancePlans from "./getInsurancePlans";
import getInsurancePlan from "./getInsurancePlan";
import searchInsurancePlans from "./searchInsurancePlans";

const insuranceRouter = express.Router();
insuranceRouter.get("/", getInsurancePlans);
insuranceRouter.get("/:id", getInsurancePlan);
insuranceRouter.post("/search", searchInsurancePlans);

export default insuranceRouter;
