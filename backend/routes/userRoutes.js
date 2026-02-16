const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/login", async (req, res) => {
    try {
        const { name, phone } = req.body;

        let user = await User.findOne({ phone });

        if (!user) {
            user = new User({ name, phone });
            await user.save();
        }

        res.json(user);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
