const faker = require("faker");

const generateResourcesSeedData = () => {
  let dataArray = [];

  for (let i = 0; i <= 20; i++) {
    const resource = {
      id: i,
      title: faker.fake("{{lorem.word}}"),
      description: faker.fake("{{lorem.sentence}}"),
      url: faker.fake("{{image.imageUrl}}"),
      votes_count: faker.fake("{{random.number}}"),
      resource_type: i % 2 === 0 ? "Article" : "Video",
    };
    dataArray.push(resource);
  }

  return dataArray;
};

exports.seed = function (knex) {
  return knex("resources")
    .del()
    .then(function () {
      return knex("resources").insert(generateResourcesSeedData());
    });
};
