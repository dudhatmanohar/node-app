const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
  connectionLimit: 5,  
  queueLimit: 0

});

db.connect(err => {
    if (err) throw err;
    console.log("Database connected...");
});


db.query("SELECT * FROM categories", (err, results) => {
    console.log(results);
     
});

db.query("select * from products", (err,results)=>{
    console.log(results);
})
module.exports = db;
