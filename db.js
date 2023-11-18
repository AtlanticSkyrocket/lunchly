/** Database for lunchly */

const { Client } = require("pg");

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = `postgresql://${DB_USER}:${DB_PASS}@localhost:5432/lunchly_test`;
} else {
  DB_URI = `postgresql://${DB_USER}:${DB_PASS}@localhost:5432/lunchly`;
}

let db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;
