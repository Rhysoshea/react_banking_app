const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'root',
    host: 'psql',
    port: 5432,
    database: 'bank_account'
});

module.exports = { pool };




