var express = require('express');
const { db } = require('./admin');
const bcrypt = require('bcrypt')
const bp = require("body-parser")
var app = express();
const PORT = 8080

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('This is my demo project')
})


app.listen(PORT, function () {
    console.log(`Demo project at: ${PORT}!`);
});