const express = require("express");
const router = express.Router();
const db = require("../db");


router.get("/", (req, res) => {

    db.query("SELECT * FROM categories", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});


router.post("/", async(req, res) => {
    try{
        const { name } = req.body;
        const [result] = await db.query("INSERT INTO categories (name) VALUES (?)", [name]);
        res.json({ message: "Category added", id: result.insertId });
    }
    catch(err){
        res.status(500).json(err);
    }
});

router.put("/:id", async(req, res) => {
    try{
        const { name } = req.body;
        await db.query("UPDATE categories SET name = ? WHERE id = ?", [name, req.params.id]);
        res.json({ message: "Category updated" });
    }
    catch(err){
        res.status(500).json(err);
    }
});


router.delete("/:id", async(req, res) => {
    try{
        await db.query("DELETE FROM categories WHERE id = ?", [req.params.id]);
        res.json({ message: "Category deleted" });
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;
