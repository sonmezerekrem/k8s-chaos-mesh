const express = require('express');
const fs = require("fs");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const x = Math.random();
    console.log(x);
    res.send(`Hello World Backend! ${x}`);
});

app.get("/api", (req, res) => {
    const x = Math.random();
    console.log("api", x);
    res.status(200).json({
        message: `Hello World Backend Api! ${x}`
    });
});

app.get("/fileio", (req, res) => {
    const data = fs.readFileSync('/usr/src/app/fileio/sample.txt', 'utf8');
    const x = Math.random();
    console.log("fileio", data.toString(), x);
    res.status(200).json({
        message: `Hello World Backend Api with File! - ${data.toString()} - ${x}`
    });
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Example app listening at http://0.0.0.0:${port}`);
});