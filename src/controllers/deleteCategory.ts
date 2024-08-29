import { ObjectId } from "mongodb";

export async function deleteCategoryController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { _id } = req.body;

    if (!_id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const id: ObjectId = new ObjectId(_id);

    const query = { _id: id };

    const result = await db.collection("categories").deleteOne(query);

    if (result.acknowledged) {
      res.status(200).json({ message: "Category deleted" });
    } else {
      throw new Error("Category not deleeted");
    }
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
