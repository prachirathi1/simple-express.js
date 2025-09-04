const express = require("express");
const app = express();
const PORT = 5001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Express is working");
});

app.get("/about", (req, res) => {
  res.json({ message: "this is express.js backend" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
