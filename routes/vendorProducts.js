const express = require('express');
const router = express.Router();

router.route('/')
    .get((req,res)=>{
        res.render('vendorProducts')
    }).post((req,res)=>{

    });

module.exports = router;