const { Categories } = require("../../models/schema");

export default async (req, res) => {
  const categories = await Categories.query();
  res.json(categories);
};
