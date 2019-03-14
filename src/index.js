const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var app_port  =process.env.APP_PORT;


const app = express();


//MIDDLEWARES
app.use(cors());

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


//DB

var db = require('../config/db');
var db_info = {
    db_port: process.env.DB_PORT,
    db_server: process.env.DB_SERVER,
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_pwd: process.env.DB_PWD,
    db_auth:process.env.DB_AUTH
}

db.connect(db_info);


// SERVER

app.listen( app_port,  ()=>{
    console.log(`Server on port ${app_port}`);
});