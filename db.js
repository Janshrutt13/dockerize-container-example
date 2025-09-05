const { Pool } = require('pg');

const pool = new Pool({
    host : 'db',
    port : '5432',
    username : 'user123',
    password : '1234456',
    datbase : 'db123'
});

module.exports = pool