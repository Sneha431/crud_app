const express = require("express");
const route = express.Router();
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/add_user", (req, res) => {
  res.render("add_user");
});
app.get("/update_user", (req, res) => {
  res.render("update_user");
});
