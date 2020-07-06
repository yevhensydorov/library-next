exports.up = function (knex) {
  return knex.schema.createTable("categories", function (table) {
    table.integer("id").primary();
    table.string("category_name");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("categories");
};
