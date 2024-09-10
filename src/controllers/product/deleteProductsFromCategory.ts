import { ObjectId } from "mongodb";

export async function deleteProductsFromCategoryController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { category, month } = req.body;

    if (!category) {
      return res.status(400).json({ message: "Category is required" });
    }

    if (!month) {
      return res.status(400).json({ message: "Month is required" });
    }

    const query = { month: month, category: category };

    const result = await db.collection("products").deleteMany(query);

    if (result.acknowledged) {
      res.status(200).json({ message: "Products deleted" });
    } else {
      throw new Error("Products not deleted");
    }
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
