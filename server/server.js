const aws = require('aws-sdk');
require('dotenv').config();
const {
    S3_BUCKET,
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    SERVER_PORT
} = process.env;

const express = require('express'),
    app = express(),
    port = 3500 || SERVER_PORT

app.use(express.json());

const aws = require('aws-sdk');


app.listen( port, () => (
    console.log(`Any port in a storm, like port ${port}`)
))
