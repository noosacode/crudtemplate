router.get("/test", async (req, res) => {
  try {
    const docs = await Items.find({});
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
