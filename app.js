const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.listen(3000);

app.get("/", (req, res) => {
  res.render('index',{title:'Homepage'})
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });

});

app.get("/contact", (req, res) => {
  res.render("contactMe", { title: "contact" });

});

app.get("/contact-me", (req, res) => {
  res.redirect("/contact");
});

app.use((req, res) => {

  res.status(404).render("404", { title: "err" });

});
