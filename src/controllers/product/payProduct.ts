import { ObjectId } from "mongodb";

export async function payProductController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { _id, value, paid } = req.body;

    if (!_id) {
      return res.status(400).json({ message: "Id is required" });
    }

    if (!value) {
      return res.status(400).json({ message: "Value is required" });
    }

    if (!paid) {
      return res.status(400).json({ message: "Paid value is required" });
    }

    let result;

    const id: ObjectId = new ObjectId(_id);

    const query = { _id: id };

    if (paid == value) {
      result = await db.collection("products").updateOne(query, {
        $set: {
          paid: paid,
          payment_date: new Date(),
        },
      });
    } else {
      result = await db.collection("products").updateOne(query, {
        $set: {
          paid: paid,
        },
      });
    }

    if (result.acknowledged) {
      res.status(200).json({ message: "Product paid" });
    } else {
      throw new Error("Product not paid");
    }
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
