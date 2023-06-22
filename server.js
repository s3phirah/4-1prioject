"use strict";

const express = require('express');
const app = express();

const home = require("./routes/home");
app.use("/", home);

app.set("views","./views");
app.set("view engine", "ejs");
app.use(express.static('views'));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
  });

module.exports = app;
