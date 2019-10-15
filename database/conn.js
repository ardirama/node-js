var mysql = require('mysql');

var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'qupas'
});

con.connect((err) => {
    if (err) throw err;
});

module.exports = con;