import { ObjectId } from "mongodb";

export async function editCategoriesMonthController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { month, new_month } = req.body;

    const query = { month: month };

    const result = await db.collection("categories").updateMany(query, {
      $set: {
        month: new_month,
      },
    });

    if (result.acknowledged) {
      res.status(200).json({ message: "Categories edited" });
    } else {
      throw new Error("Categories not edited");
    }
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
