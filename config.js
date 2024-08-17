"use strict";

/** Shared config for application; can be required many places. */

require("dotenv").config();
require("colors");

const SECRET_KEY = "secret-key333";

const PORT = process.env.PORT || 3001;


console.log("freebay Config:".green);
console.log("SECRET_KEY:".yellow, SECRET_KEY);
console.log("PORT:".yellow, PORT.toString());
console.log("Database:".yellow, process.env.HEROKU_DATABASE_URL);
console.log("---");

module.exports = {
  SECRET_KEY,
  PORT,
};
