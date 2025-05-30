require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});

client.connect(()=>{console.log('connected to postgres database')});

const getAll = (cb) => {
    client.query('SELECT NOW()', (err, res) => {
        if (err) {
            cb(err);
        } else {
            cb(null, res.rows);
        }
      });
};

const postOne = (data, cb) => {
    client.query('SELECT NOW()', (err, res) => {
        if (err) {
            cb(err);
        } else {
            cb(null, res.rows);
        }
      });
};

module.exports = {
    getAll,
    postOne
};