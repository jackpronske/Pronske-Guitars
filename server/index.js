const express = require('express')
const path = require('path');

const db = require('../database');

const app = express()
const port = 3030;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/docs', (req, res) => {
  db.getAll((err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.post('/docs', (req, res) => {
  console.log(req.body);
  db.postOne(req.body, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
});