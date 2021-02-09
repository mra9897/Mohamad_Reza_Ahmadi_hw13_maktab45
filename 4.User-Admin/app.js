const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const User = require('./router/user');
const admin = require('./router/admin');

const PORT = 5002;

app.use(bodyParser.json());

app.use('/', (req, res, next) => {
    res.allUsers = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'users.json'), "utf-8"));
    next();
});

app.use('/user', User);
app.use('/admin', admin);

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));