const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2Qu@5#3R$$',
    database: 'buisness_db'
});

connection.connect(function (err) {

    if (err) throw err;
});

module.exports = connection;
