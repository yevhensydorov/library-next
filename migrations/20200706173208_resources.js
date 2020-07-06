exports.up = function (knex) {
  return knex.schema.createTable("resources", function (table) {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.string("url").notNullable();
    table.integer("votes_count").defaultTo(0);
    table.string("resource_type").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("resources");
};
