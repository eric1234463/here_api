import express from "express";
import getInsurancePlans from "./getInsurancePlans";
import searchInsurancePlans from "./searchInsurancePlans";

const insuranceRouter = express.Router();
insuranceRouter.get("/", getInsurancePlans);
insuranceRouter.post("/search", searchInsurancePlans);

export default insuranceRouter;
