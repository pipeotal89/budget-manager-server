export async function createProductController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { name, value, vendor, category, month } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    if (!value) {
      return res.status(400).json({ message: "Value is required" });
    }

    if (!vendor) {
      return res.status(400).json({ message: "Vendor is required" });
    }

    if (!category) {
      return res.status(400).json({ message: "Category is required" });
    }

    if (!month) {
      return res.status(400).json({ message: "Month is required" });
    }

    const result = await db.collection("products").insertOne({
      name: name,
      value: value,
      paid: 0,
      payment_date: "",
      vendor: vendor,
      category: category,
      month: month,
    });

    if (result.acknowledged) {
      res.status(200).json({ message: "Product created" });
    } else {
      throw new Error("Product not created");
    }
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
