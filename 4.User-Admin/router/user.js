const express = require('express');
const router = express.Router();

router.post('/getUser', (req, res) => {
    res.json(res.allUsers.find(v=>v.id === req.body.id));
});

module.exports = router;