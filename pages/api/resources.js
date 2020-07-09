const { Resources } = require("../../models/schema");

export default async (req, res) => {
  const resources = await Resources.query().withGraphFetched("categories");
  res.json(resources);
};
