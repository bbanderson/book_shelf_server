const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("hello"));

const PORT = 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
