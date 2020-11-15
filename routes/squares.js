const express = require("express");
const router = express.Router();

// Calculate Square area and perimeter
router.post("/", async (req, res) => {
    try {
        const a = req.body.a;
        const b = req.body.b;

        const perimeter = ((a * 2) + (b * 2)).toFixed(2);
        const area = (a * b).toFixed(2)

        const response = {
            perimeter: perimeter,
            area: area
        }

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});

module.exports = router;