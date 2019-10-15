'use strict';

var response = require('./res');
var connection = require('./conn');

exports.users = (req,res) => {
    connection.query('SELECT * FROM siswa', (error, rows,fields) => {
        if (error) {
            console.log(error);
        }else{
            response.ok(rows,res);
        }
    });
};

    exports.index = (req,res) =>{
        response.ok("hello from the Node JS RESTfull API Side", res);   
     };