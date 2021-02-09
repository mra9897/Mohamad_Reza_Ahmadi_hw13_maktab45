const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(rqe,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.listen(5002, ()=>console.log("app running on port 5002"));