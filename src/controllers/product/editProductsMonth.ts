import { ObjectId } from "mongodb";

export async function editProductsMonthController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { month, new_month } = req.body;

    if (!month) {
      return res.status(400).json({ message: "Month is required" });
    }

    if (!new_month) {
      return res.status(400).json({ message: "New month is required" });
    }

    const query = { month: month };

    const result = await db.collection("products").updateMany(query, {
      $set: {
        month: new_month,
      },
    });

    if (result.acknowledged) {
      res.status(200).json({ message: "Products edited" });
    } else {
      throw new Error("Products not edited");
    }
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
