var express = require("express");
var app = express();
var logger = require("./lib/log/logger.js").console;

app.set("view engine", "ejs");
app.disable("x-powered-by");

app.use("/public", express.static(__dirname + "/public" + (process.env.NODE_ENV === "development" ? "development" : "production")));

app.use("/", require("./routes/index.js"));

app.listen(3000);
logger.info("start.");
