const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("ユーザーやで");
});

router.get("/setting", (req, res) => {
    res.send("settingyade");
});

module.exports = router;