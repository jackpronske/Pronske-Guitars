const express = require('express')
const path = require('path');

const app = express()
const port = 3030;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/', (req, res) => {
  if (err) {
    res.status(400).send(err);
  } else {
    res.status(200).send({});
  }
});

app.post('/', (req, res) => {
  console.log(req.body);
  if (err) {
    res.status(400).send(err);
  } else {
    res.status(201).send(res.body);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
});