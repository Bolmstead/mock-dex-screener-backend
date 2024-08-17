"use strict";

/** Express app for jobly. */

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { NotFoundError } = require("./expressError");
const dexRoutes = require("./routes/dexRoutes");

const morgan = require("morgan");
const app = express();

// app.use(cors({ origin: "" }));
app.use(express.json());
app.use(morgan("tiny"));

app.use("/dex", dexRoutes);


/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
