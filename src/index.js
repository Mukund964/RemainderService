const express = require('express');
const bodyParser = require("body-parser");
const apiRoutes = require('./routers/index');
const {PORT,REMAINDER_BINDING_KEY} = require("./config/serverConfig")
const setupJobs = require('./utils/sendMailCron');
const {createChannel,subscribeMessage} = require('./utils/MessageQueues')
const {subscribeEvent}= require('./services/ticketService');

const app = express();



const setupAndStartServer = async ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    const channel = await createChannel();
    subscribeMessage(channel, subscribeEvent,REMAINDER_BINDING_KEY);
    setupJobs();
    app.listen(PORT,()=>{
        console.log(`Listening on port ${PORT}`);
    });

    
}

setupAndStartServer();

