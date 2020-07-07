const { Resources } = require("../../models/schema");

export default async (req, res) => {
  const resources = await Resources.query();
  res.json(resources);
};
