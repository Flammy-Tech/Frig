const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) =>{
        res.render('vendor');
    }).post(async(req,res) =>{

    }).patch(async(req,res) =>{

    }).delete(async(req,res) =>{

    });

module.exports = router;