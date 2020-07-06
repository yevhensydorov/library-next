exports.up = function (knex) {
  return knex.schema.createTable("resources_categories", function (table) {
    table.integer("resource_id").references("resources.id");
    table.integer("category_id").references("categories.id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("resources_categories");
};
