const express = require('express');
const axios = require('axios').default;
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    const x = Math.random();
    console.log(x);
    res.send(`Hello World Frontend! ${x}`);
});

app.get("/api", async (req, res) => {
    await axios({
        method: 'get',
        url: `http://${process.env.BACKEND}:3000/api`
    })
        .then((result) => {
            if (result.status === 200) {
                console.log(result.data);
                res.send(result.data);
            }
        })
        .catch((error) => {
            console.log(error.message);
            res.status(500).json({
                message: "Error",
                error: error.message
            });
        });
});

app.get("/fileio", async (req, res) => {
    await axios({
        method: 'get',
        url: `http://${process.env.BACKEND}:3000/fileio`
    })
        .then((result) => {
            if (result.status === 200) {
                console.log(result.data);
                res.send(result.data);
            }
        })
        .catch((error) => {
            console.log(error.message);
            res.status(500).json({
                message: "Error",
                error: error.message
            });
        });
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Example app listening at http://0.0.0.0:${port}`);
});