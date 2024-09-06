export async function editStatusValuesController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { month, budget, current } = req.body;

    let result;

    const query = { month: month };

    if (budget) {
      result = await db.collection("balance").updateOne(query, {
        $set: {
          budget: budget,
        },
      });
    } else {
      result = await db.collection("balance").updateOne(query, {
        $set: {
          current: current,
        },
      });
    }

    if (result.acknowledged) {
      res.status(200).json({ message: "Status values edited" });
    } else {
      throw new Error("Status values not edited");
    }
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
