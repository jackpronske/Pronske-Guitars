const express = require("express");
const path = require("path");

const app = express();
const port = 3030;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/public")));

app.get("/name", (req, res) => {
  res.status(200).send({ name: "jack" });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(201).send(res.body);
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
