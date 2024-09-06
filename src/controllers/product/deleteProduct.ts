import { ObjectId } from "mongodb";

export async function deleteProductController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { _id } = req.body;

    if (!_id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const id: ObjectId = new ObjectId(_id);

    const query = { _id: id };

    const result = await db.collection("products").deleteOne(query);

    if (result.acknowledged) {
      res.status(200).json({ message: "Product deleted" });
    } else {
      throw new Error("Product not deleted");
    }
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
