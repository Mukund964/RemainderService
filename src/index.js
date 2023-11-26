const express = require('express');
const bodyParser = require("body-parser");
const {PORT} = require("./config/serverConfig")
const app = express();

const {mail} = require('../src/services/mailService');

const setupAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`Listening on port ${PORT}`);
    });

    mail('support@admin.in',
        'sd88028@gmail.com',
        "Test Mail",
        "<h1>This is a test mail</h1>"
        );
}

setupAndStartServer();

