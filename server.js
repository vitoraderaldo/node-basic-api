const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/nodeapi", {
   useUnifiedTopology: true,
   useNewUrlParser: true
});

requireDir("./src/models");

app.use("/api", require("./src/routes"));
app.listen(5151);
