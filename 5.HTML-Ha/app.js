const express = require('express');
const app = express();

const Pages = require('./router/pages');

const PORT = 5002;

app.use('/html', Pages);

app.listen(PORT, ()=>console.log(`app is runnign on port ${PORT}`));