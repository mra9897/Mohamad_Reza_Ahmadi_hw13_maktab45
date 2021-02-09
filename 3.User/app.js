const express = require('express');
const app = express();
const User = require('./router/user');

const PORT = 5002;

app.get('/', (req, res) => {
    res.send("<h1>We have a CRUD route on User</h1>");
});

app.use("/user", User);

app.listen(PORT, () => console.log("app is running on port " + PORT));