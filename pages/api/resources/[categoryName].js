const { CategoriesWithResourcesList } = require("../../../models/schema");

export default async (req, res) => {
  const {
    query: { categoryName },
  } = req;

  const categories = await CategoriesWithResourcesList.query()
    .withGraphFetched("resources")
    .modifyGraph("resources", (builder) => {
      builder.orderBy("votes_count", "desc");
    });

  if (categoryName === "feautured-resources") {
    categories.forEach((cat) => {
      const filteredCat = cat.resources.filter((cat, index) => {
        return index < 3;
      });
      cat.resources = filteredCat;
    });
    res.json(categories);
  } else {
    const filteredCategories = categories.filter(
      (category) => category.category_name === categoryName
    );
    res.json(filteredCategories);
  }
};
