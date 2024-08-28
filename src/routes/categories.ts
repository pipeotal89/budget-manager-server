import { createCategoryController } from "../controllers/createCategory";

const express = require("express");

const router = express.Router();

router.post("/add", createCategoryController);

module.exports = router;
