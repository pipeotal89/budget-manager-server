import { getTotalValues } from "../controllers/balance/getTotalValues";

const express = require("express");

const router = express.Router();

router.get("/total", getTotalValues);

module.exports = router;
