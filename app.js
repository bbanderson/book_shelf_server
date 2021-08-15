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

// const users = [{id: crypto.createHash("sha512").update('aa').digest("hex")}]
app.post("/v1/user", (req, res) => {
  const token = crypto.createHash("sha512").update('aa').digest("hex")
  res.status(200).json({ token });
});
app.delete("/v1/user", (req, res) => res.status(200).send("ok"));

const mockData = [{ bookId: 1, ownerId: 'f6c5600ed1dbdcfdf829081f5417dccbbd2b9288e0b427e65c8cf67e274b69009cd142475e15304f599f429f260a661b5df4de26746459a3cef7f32006e5d1c1', title: 'Book Title', message: 'Your Opinion', author: 'john', created: Date(), url: 'example.com'}];
app.get("/v1/book", (req, res) => {
  res.status(200).json(mockData);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
