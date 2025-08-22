import express from "express";
import countryControlller from "../controllers/country.js";

const router = express.Router();

router.get("/", countryControlller.getAllCountry);

export default router;