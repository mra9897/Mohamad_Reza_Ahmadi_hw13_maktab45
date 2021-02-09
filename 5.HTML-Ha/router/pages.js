const express =require('express');
const router = express.Router();
const path =require('path');
const files = path.join(__dirname,'..','public');

router.get('/index1', (req,res)=>{
    res.sendFile(path.join(files, "index1.html"));
});
router.get('/index2', (req,res)=>{
    res.sendFile(path.join(files, "index2.html"));
});
router.get('/index3', (req,res)=>{
    res.sendFile(path.join(files, "index3.html"));
});
router.get('/index4', (req,res)=>{
    res.sendFile(path.join(files, "index4.html"));
});
router.get('/index5', (req,res)=>{
    res.sendFile(path.join(files, "index5.html"));
});

module.exports = router;