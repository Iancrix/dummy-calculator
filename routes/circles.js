const express = require("express");
const router = express.Router();

// Calculate Circle area and perimeter
router.post("/", async (req, res) => {
    try {
        const radio = req.body.radio;

        const perimeter = (2 * Math.PI * radio).toFixed(2);
        const area = (Math.PI * (radio ** 2)).toFixed(2)

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