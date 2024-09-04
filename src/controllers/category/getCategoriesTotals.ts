export async function getCategoriesTotalsController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { month } = req.query;

    const response = db.collection("categories").aggregate([
      { $match: { month: month } },
      {
        $lookup: {
          from: "products",
          localField: "name",
          foreignField: "category",
          as: "products",
          pipeline: [
            {
              $group: {
                _id: "$category",
                total: { $sum: "$value" },
                paid: { $sum: "$paid" },
                count: { $count: {} },
              },
            },
          ],
        },
      },
    ]);

    const result = await response.toArray();

    res
      .status(200)
      .json({ message: "Products totals retrieved", categories: result });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
