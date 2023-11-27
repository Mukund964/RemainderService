const express = require('express');
const bodyParser = require("body-parser");
const apiRoutes = require('./routers/index');
const {PORT} = require("./config/serverConfig")
const app = express();


const setupAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);

    app.listen(PORT,()=>{
        console.log(`Listening on port ${PORT}`);
    });

    
}

setupAndStartServer();

