const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.status(200).json({ message: "hello" });
});
app.get("/hello", (req, res) => {
  res.status(200).json({ message: "hello user" });
});

app.listen(3000, () => {
  console.log("server now is running on port 3000");
});
