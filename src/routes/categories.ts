import { createCategoryController } from "../controllers/category/createCategory";
import { getCategoryController } from "../controllers/category/getCategory";
import { editCategoryController } from "../controllers/category/editCategory";
import { deleteCategoryController } from "../controllers/category/deleteCategory";
import { getCategoriesTotalsController } from "../controllers/category/getCategoriesTotals";
import { deleteCategoriesFromMonthController } from "../controllers/category/deleteCategoriesFromMonth";
import { editCategoriesMonthController } from "../controllers/category/editCategoriesFromMonth";

const express = require("express");

const router = express.Router();

router.post("/add", createCategoryController);
router.get("/", getCategoryController);
router.get("/total", getCategoriesTotalsController);
router.patch("/edit", editCategoryController);
router.patch("/change_month", editCategoriesMonthController);
router.delete("/delete", deleteCategoryController);
router.delete("/clear_month", deleteCategoriesFromMonthController);

module.exports = router;
