import { getProductsFromCategoryController } from "../controllers/product/getProductsFromCategory";
import { createProductController } from "../controllers/product/createProduct";
import { deleteProductController } from "../controllers/product/deleteProduct";
import { payProductController } from "../controllers/product/payProduct";
import { deleteProductsFromCategoryController } from "../controllers/product/deleteProductsFromCategory";
import { deleteProductsFromMonthController } from "../controllers/product/deleteProductsFromMonth";
import { editProductsMonthController } from "../controllers/product/editProductsMonth";

const express = require("express");

const router = express.Router();

router.get("/", getProductsFromCategoryController);
router.post("/add", createProductController);
router.delete("/delete", deleteProductController);
router.delete("/clear_category", deleteProductsFromCategoryController);
router.delete("/clear_month", deleteProductsFromMonthController);
router.patch("/pay", payProductController);
router.patch("/change_month", editProductsMonthController);

module.exports = router;
