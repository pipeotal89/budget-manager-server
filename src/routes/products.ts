import { getProductsFromCategoryController } from "../controllers/product/getProductsFromCategory";
import { createProductController } from "../controllers/product/createProduct";
import { deleteProductController } from "../controllers/product/deleteProduct";
import { payProductController } from "../controllers/product/payProduct";

const express = require("express");

const router = express.Router();

router.get("/", getProductsFromCategoryController);
router.post("/add", createProductController);
router.delete("/delete", deleteProductController);
router.patch("/pay", payProductController);

module.exports = router;
