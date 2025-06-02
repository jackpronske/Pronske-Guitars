const express = require("express");
const path = require("path");
const app = express();
const port = 3030;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/public")));

app.post("/api/log-route", (req, res) => {
  console.log(`[API] ${req.body.path} - ${new Date().toLocaleString()}`);
  res.sendStatus(200);
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"), (err) => {
    if (err) {
      console.error("Error sending index.html:", err);
      res.status(500).send("Server error");
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
