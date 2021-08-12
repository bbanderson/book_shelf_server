const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("hello"));
app.post("/v1/user", (req, res) =>
  res.json({
    token: "123",
  })
);

const PORT = 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
