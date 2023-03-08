const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send(app.get(express.static("../Home")));
});

module.exports = router;