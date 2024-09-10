export async function deleteProductsFromMonthController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { month } = req.body;

    if (!month) {
      return res.status(400).json({ message: "Month is required" });
    }

    const query = { month: month };

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
