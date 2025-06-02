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

app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"), (err) => {
    if (err) {
      next(err);
    }
  });
});

app.use((err, req, res) => {
  console.error("Global Error:", err.stack);
  res.status(err.status || 500).json({
    error: { message: err.message || "Internal Server Error" },
  });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
