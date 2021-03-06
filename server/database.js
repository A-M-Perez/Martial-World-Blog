require('dotenv').config();
const mysql = require('mysql2');
const util = require('util');

const db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE
});

db.query = util.promisify(db.query);

module.exports = db;