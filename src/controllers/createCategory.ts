export async function createCategoryController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { name, month } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    if (!month) {
      return res.status(400).json({ message: "Month is required" });
    }

    const result = await db.collection("categories").insertOne({
      name: name,
      month: month,
    });

    if (result.acknowledged) {
      res.status(200).json({ message: "Category created" });
    } else {
      throw new Error("Category not created");
    }
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
