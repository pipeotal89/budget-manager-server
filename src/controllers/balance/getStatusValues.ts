export async function getStatusValueController(req: any, res: any) {
  try {
    const { db } = req.app;

    const result = await db
      .collection("balance")
      .find({ month: req.query.month })
      .toArray();

    res
      .status(200)
      .json({ message: "Status Values retrieved", status: result });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
