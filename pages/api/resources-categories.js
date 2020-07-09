const { ResourcesCategories } = require("../../models/schema");

export default async (req, res) => {
  const resourcesCategories = await ResourcesCategories.query();
  res.json(resourcesCategories);
};
