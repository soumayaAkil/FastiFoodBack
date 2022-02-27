const mysql = require("mysql2");


    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'fastifood'
    });
    
    module.exports = pool.promise();




