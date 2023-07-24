const mysql = require("mysql2");

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "9518",
    database : "ecommerce"

})
connection.connect();



