require('dotenv').config();
const {
    S3_BUCKET,
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    SERVER_PORT,
    //MONGO_CONNECTION_STRING
} = process.env;

const express = require('express'),
    app = express(),
    aws = require('aws-sdk'),
    mongoose = require("mongoose")
    port = 3500 || SERVER_PORT

// mongoose.connect(MONGO_CONNECTION_STRING,{
//     useNewUrlParser:true
// });

app.use(express.json());


const aws = require('aws-sdk');


app.listen( port, () => (
    console.log(`Server is a listenin' on port: ${port}`)
))
