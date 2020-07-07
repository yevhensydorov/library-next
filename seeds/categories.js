exports.seed = function (knex) {
  return knex("categories")
    .del()
    .then(function () {
      return knex("categories").insert([
        { id: 1, category_name: "general" },
        { id: 2, category_name: "html" },
        { id: 3, category_name: "css" },
        { id: 4, category_name: "javascript" },
        { id: 5, category_name: "node.js" },
        { id: 6, category_name: "database" },
        { id: 7, category_name: "react" },
        { id: 8, category_name: "project-management" },
        { id: 9, category_name: "soft-skills" },
        { id: 10, category_name: "git" },
        { id: 11, category_name: "tool" },
      ]);
    });
};
