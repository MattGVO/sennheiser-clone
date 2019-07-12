const express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),

router.get("/", (req,res) =>{
    console.log("gettin' /api/products")
    res.sendStatus(200)
})
