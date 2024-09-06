export async function createStatusValueController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { month, budget, current } = req.body;

    if (!month) {
      return res.status(400).json({ message: "Month is required" });
    }

    if (!budget) {
      return res.status(400).json({ message: "Budget is required" });
    }

    if (!current) {
      return res.status(400).json({ message: "Current balance is required" });
    }

    const result = await db.collection("balance").insertOne({
      month: month,
      budget: budget,
      current: current,
    });

    if (result.acknowledged) {
      res.status(200).json({ message: "Status values created" });
    } else {
      throw new Error("Status values not created");
    }
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
