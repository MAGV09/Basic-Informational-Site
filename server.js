const express = require("express");
const app = express();
const path = require("node:path");

app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "views") });
});

app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: path.join(__dirname, "views") });
});

app.get("/contact", (req, res) => {
  res.sendFile("contactMe.html", { root: path.join(__dirname, "views") });
});

app.get("/contact-me", (req, res) => {
  res.redirect("/contact");
});

app.use((req, res) => {
  res.status(404).sendFile("404.html", { root: path.join(__dirname, "views") });
});
