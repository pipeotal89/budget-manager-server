import { ObjectId } from "mongodb";

export async function editCategoryController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { name, _id } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    if (!_id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const id: ObjectId = new ObjectId(_id);

    const query = { _id: id };

    const result = await db.collection("categories").updateOne(query, {
      $set: {
        name: name,
      },
    });

    if (result.acknowledged) {
      res.status(200).json({ message: "Category edited" });
    } else {
      throw new Error("Category not edited");
    }
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
