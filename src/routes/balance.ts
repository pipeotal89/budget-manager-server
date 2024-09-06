import { getTotalValues } from "../controllers/balance/getTotalValues";
import { getStatusValueController } from "../controllers/balance/getStatusValues";
import { createStatusValueController } from "../controllers/balance/createStatusValue";
import { editStatusValuesController } from "../controllers/balance/editStatusValues";

const express = require("express");

const router = express.Router();

router.get("/total", getTotalValues);
router.get("/status", getStatusValueController);
router.post("/status/add", createStatusValueController);
router.patch("/status/edit", editStatusValuesController);

module.exports = router;
