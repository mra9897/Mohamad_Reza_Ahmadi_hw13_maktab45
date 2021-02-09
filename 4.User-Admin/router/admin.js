const express = require('express');
const router = express.Router();

router.get('/getAllUsers', (req,res)=>{
    res.json(res.allUsers);
});

module.exports = router;