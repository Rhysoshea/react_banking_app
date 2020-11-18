const { Pool } = require('pg');
// const fs = require('fs');

// const {
//     MYSQL_HOST: HOST,
//     MYSQL_HOST_FILE: HOST_FILE,
//     MYSQL_USER: USER,
//     MYSQL_USER_FILE: USER_FILE,
//     MYSQL_PASSWORD: PASSWORD,
//     MYSQL_PASSWORD_FILE: PASSWORD_FILE,
//     MYSQL_DB: DB,
//     MYSQL_DB_FILE: DB_FILE,
// } = process.env;

// const host = HOST_FILE ? fs.readFileSync(HOST_FILE) : HOST;
// const user = USER_FILE ? fs.readFileSync(USER_FILE) : USER;
// const password = PASSWORD_FILE ? fs.readFileSync(PASSWORD_FILE) : PASSWORD;
// const database = DB_FILE ? fs.readFileSync(DB_FILE) : DB;


// const pool = new Pool({
//     host,
//     user,
//     password,
//     database,
//     port:5432
// });

const pool = new Pool({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    port: 5432,
    database: 'bank_account'
});
console.log(pool);

module.exports = { pool };

/////////////////////



