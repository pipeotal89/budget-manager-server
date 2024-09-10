import { ObjectId } from "mongodb";

export async function deleteCategoriesFromMonthController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { month } = req.body;

    if (!month) {
      return res.status(400).json({ message: "Month is required" });
    }

    const query = { month: month };

    const result = await db.collection("categories").deleteMany(query);

    if (result.acknowledged) {
      res.status(200).json({ message: "Categories deleted" });
    } else {
      throw new Error("Categories not deleted");
    }
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
