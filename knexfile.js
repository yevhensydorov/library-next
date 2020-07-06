require("dotenv").config();

const pg = require("pg");
pg.defaults.ssl = false;

module.exports = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_URL,
  },
};
