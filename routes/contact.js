const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/", (req, res) => {
    const { name, email, message } = req.body;

    console.log("Incoming Data:", name, email, message);

    const sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";

    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.error("DB ERROR:", err);
            return res.status(500).send(err.message); // 👈 IMPORTANT
        }

        res.send("Message saved successfully ✅");
    });
});

module.exports = router;