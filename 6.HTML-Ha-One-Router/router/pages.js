const express =require('express');
const router = express.Router();
const path =require('path');
const files = path.join(__dirname,'..','public');

router.get('/:id', (req,res)=>{
    res.sendFile(path.join(files, `index${req.params.id}.html`));
});

module.exports = router;