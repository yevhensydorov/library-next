exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources_categories")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources_categories").insert([
        { resource_id: 1, category_id: 2 },
        { resource_id: 1, category_id: 1 },
        { resource_id: 1, category_id: 4 },
        { resource_id: 1, category_id: 6 },
        { resource_id: 2, category_id: 1 },
        { resource_id: 3, category_id: 5 },
        { resource_id: 3, category_id: 6 },
        { resource_id: 3, category_id: 8 },
        { resource_id: 3, category_id: 3 },
        { resource_id: 4, category_id: 4 },
        { resource_id: 5, category_id: 5 },
        { resource_id: 6, category_id: 6 },
        { resource_id: 7, category_id: 7 },
        { resource_id: 7, category_id: 2 },
        { resource_id: 7, category_id: 1 },
        { resource_id: 7, category_id: 8 },
        { resource_id: 7, category_id: 10 },
        { resource_id: 8, category_id: 8 },
        { resource_id: 9, category_id: 9 },
        { resource_id: 10, category_id: 3 },
        { resource_id: 11, category_id: 10 },
        { resource_id: 11, category_id: 3 },
        { resource_id: 11, category_id: 9 },
        { resource_id: 11, category_id: 1 },
        { resource_id: 12, category_id: 11 },
        { resource_id: 13, category_id: 2 },
        { resource_id: 14, category_id: 9 },
        { resource_id: 15, category_id: 10 },
        { resource_id: 16, category_id: 6 },
        { resource_id: 17, category_id: 5 },
        { resource_id: 17, category_id: 3 },
        { resource_id: 17, category_id: 2 },
        { resource_id: 17, category_id: 1 },
        { resource_id: 18, category_id: 4 },
        { resource_id: 18, category_id: 7 },
        { resource_id: 18, category_id: 6 },
        { resource_id: 18, category_id: 1 },
        { resource_id: 19, category_id: 7 },
        { resource_id: 20, category_id: 8 },
        { resource_id: 20, category_id: 1 },
        { resource_id: 20, category_id: 4 },
        { resource_id: 20, category_id: 7 },
        { resource_id: 20, category_id: 9 },
      ]);
    });
};
