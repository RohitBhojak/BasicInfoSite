const express = require("express");
const app = express();

const options = {
  root: __dirname,
};

app.get("/", (req, res) => {
  res.sendFile("./index.html", options);
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", options);
});

app.get("/contact-me", (req, res) => {
  res.sendFile("./contact-me.html", options);
});

app.use((req, res) => {
  res.status(404).sendFile("./404.html", options);
});

app.listen(8080, (err) => {
  if (err) {
    throw err;
  }
  console.log("Running on port 8080");
});
