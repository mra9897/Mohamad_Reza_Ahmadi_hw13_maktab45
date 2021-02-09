const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("<h1>User Index</h1>");
});

router.get('/create', (req,res)=>{
    res.send("<h1>Create new user</h1>");
});
router.get('/read', (req,res)=>{
    res.send("<h1>Read a user</h1>");
});
router.get('/update', (req,res)=>{
    res.send("<h1>Update a user</h1>");
});
router.get('/delete', (req,res)=>{
    res.send("<h1>Delete a user</h1>");
});

module.exports = router;