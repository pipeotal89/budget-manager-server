import { createCategoryController } from "../controllers/category/createCategory";
import { getCategoryController } from "../controllers/category/getCategory";
import { editCategoryController } from "../controllers/category/editCategory";
import { deleteCategoryController } from "../controllers/category/deleteCategory";
import { getCategoriesTotalsController } from "../controllers/category/getCategoriesTotals";

const express = require("express");

const router = express.Router();

router.post("/add", createCategoryController);
router.get("/", getCategoryController);
router.get("/total", getCategoriesTotalsController);
router.patch("/edit", editCategoryController);
router.delete("/delete", deleteCategoryController);

module.exports = router;
