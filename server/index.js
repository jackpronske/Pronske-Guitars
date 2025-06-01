const express = require("express");
const path = require("path");
const app = express();
const port = 3030;

app.use(express.static(path.join(__dirname, "../client/public")));

app.use((req, res, next) => {
  if (!req.originalUrl.startsWith("/.well-known")) {
    console.log(
      `[API] ${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`,
    );
  }
  next();
});

app.get("/name", (req, res) => {
  res.status(200).send({ name: "jack" });
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
