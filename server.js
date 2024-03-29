const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 5001;
app.use(morgan("tiny"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
//app.set("views", path.resolve(__dirname, "views/ejs"));
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/", require("./server/routes/router"));
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/add_user", (req, res) => {
  res.render("add_user");
});
app.get("/update_user", (req, res) => {
  res.render("update_user");
});
app.listen(PORT, () => {
  console.log(`Server running at port '${PORT}'`);
});
