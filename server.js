const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const multer = require("multer");
const dotenv = require("dotenv");
const db = require("./db");
const PORT = process.env.PORT || 8080;

dotenv.config();
const app = express();
app.use(bodyParser.json());






app.use("/api/categories", require("./routes/category"));
app.use("/api/products", require("./routes/product"));

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
