import express from "express";
import countryRoutes from "./country.js";

const router = express.Router();

// API version 1
router.use("/v1/country", countryRoutes);

// API version 2
// router.use("/v2/users", userRoutesV2);

export default router;