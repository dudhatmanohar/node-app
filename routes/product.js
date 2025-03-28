const express = require("express");
const router = express.Router();
const db = require("../db");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });


router.get("/", (req, res) => {
    db.query("SELECT * FROM products", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});


router.post("/", upload.single("image"), (req, res) => {
    const { name, price, category_id } = req.body;
    const image = req.file ? req.file.filename : null;

    db.query(
        "INSERT INTO products (name, image, price, category_id) VALUES (?, ?, ?, ?)",
        [name, image, price, category_id],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Product added", id: result.insertId });
        }
    );
});

router.put("/:id", upload.single("image"), (req, res) => {
    const { name, price, category_id } = req.body;
    const image = req.file ? req.file.filename : null;

    db.query(
        "UPDATE products SET name = ?, price = ?, category_id = ?, image = ? WHERE id = ?",
        [name, price, category_id, image, req.params.id],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Product updated" });
        }
    );
});
router.delete("/:id", (req, res) => {
    db.query("DELETE FROM products WHERE id = ?", [req.params.id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Product deleted" });
    });
});

module.exports = router;
