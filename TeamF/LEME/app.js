const express = require("express");
const app = express();
// const signupRouter = require("./routes/signup");
// const homeRouter = require("./routes/home");
const pg = require("pg");
const path = require("path");
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("Home"));

// app.use("/signup", signupRouter)
// app.use("/", homeRouter)

app.listen(port, () => {
    console.log("Start Server!");
})

// import { express } from "express";
// const app = express();
// const port = 3000;

// app.use(express.static("Home"));


// app.listen(port, () => {
//     console.log("Start Server!");
// })