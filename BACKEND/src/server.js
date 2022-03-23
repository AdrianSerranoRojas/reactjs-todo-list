const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");

const tasksRouter = require("./routes/task-routes");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());

app.use(tasksRouter);

module.exports = app;
