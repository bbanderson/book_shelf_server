const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/", (req, res) => res.send("hello"));
app.post("/v1/user", (req, res) => {
  const token = crypto.createHash("sha512").update(Date()).digest("hex");
  res.status(200).json({ token });
});
app.delete("/v1/user", (req, res) => res.status(200).send("ok"));

const PORT = 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
