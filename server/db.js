const Pool = require("pg").Pool;

const pool = new Pool({
    user:'postgres',
    password:'Debasish@168',
    host:'localhost',
    port:5432,
    database:'dailytasks'
});

module.exports = pool;