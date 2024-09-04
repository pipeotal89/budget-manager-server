import { getProductsFromCategoryController } from "../controllers/product/getProductsFromCategory";
import { createProductController } from "../controllers/product/createProduct";

const express = require("express");

const router = express.Router();

router.get("/", getProductsFromCategoryController);
router.post("/add", createProductController);

module.exports = router;
