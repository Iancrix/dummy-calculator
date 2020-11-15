const express = require("express");
const router = express.Router();

// Calculate Triangle area and perimeter

router.post("/", async (req, res) => {
    try {
        const a = req.body.a;
        const b = req.body.b;
        const c = req.body.c;

        const s = (a + b + c) / 2;
        const area = Math.sqrt((s * (s - a) * (s - b) * (s - c))).toFixed(2);

        const perimeter = (a + b + c).toFixed(2);

        const response = {
            perimeter: perimeter,
            area: !isNaN(area) ? area : (0).toFixed(2)
        }

        res.status(200).json(response);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});

module.exports = router;