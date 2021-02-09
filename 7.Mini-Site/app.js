const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const FOOD = require('./routing/Food');

const PORT = 5002;

app.use(express.static(path.join(__dirname,'public')));

app.use('/', (req,res,next)=>{
    res.foods = JSON.parse(fs.readFileSync(path.join(__dirname,'data','data.json'),'utf-8'));
    next();
});

app.use('/food', FOOD);

app.listen(PORT, ()=>console.log("app is running on port "+PORT));