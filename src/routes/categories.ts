import { createCategoryController } from "../controllers/createCategory";
import { getCategoryController } from "../controllers/getCategory";
import { editCategoryController } from "../controllers/editCategory";
import { deleteCategoryController } from "../controllers/deleteCategory";

const express = require("express");

const router = express.Router();

router.post("/add", createCategoryController);
router.get("/", getCategoryController);
router.patch("/edit", editCategoryController);
router.delete("/delete", deleteCategoryController);

module.exports = router;
