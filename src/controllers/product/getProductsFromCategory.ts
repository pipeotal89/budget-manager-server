export async function getProductsFromCategoryController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { month, category } = req.query;

    const result = await db
      .collection("products")
      .find({ month: month, category: category })
      .toArray();

    res.status(200).json({ message: "Products retrieved", products: result });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
