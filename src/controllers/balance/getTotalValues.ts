export async function getTotalValues(req: any, res: any) {
  try {
    const { db } = req.app;

    const { month } = req.query;

    const response = db.collection("products").aggregate([
      { $match: { month: month } },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$value" },
          paid: { $sum: "$paid" },
        },
      },
    ]);

    const result = await response.toArray();

    res
      .status(200)
      .json({ message: "Total values retrieved", balance: result });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
