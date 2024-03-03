const routes = require("./routes/index");
const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());




app.use("", routes);

module.exports = app;
