const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("Home"));


app.listen(port, () => {
    console.log("Start Server!");
})