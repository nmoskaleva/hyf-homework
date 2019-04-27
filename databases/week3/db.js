const mysql = require('mysql');

//creating mysql connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'HYF2018data',
    database: 'podcasts_db',
    multipleStatements: true
});

//connect database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql connected');
});

module.exports = db;