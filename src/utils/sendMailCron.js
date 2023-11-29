const cron = require('node-cron');
const notificationService = require('../services/ticketService');

const ticketservice = new notificationService();
const setupJobs = () => {
    cron.schedule('*/2 * * * * *', async () => {
        console.log("running task");
      const response = await ticketservice.getallMails({status:'Pending'});
      console.log(response);
});
}

module.exports = setupJobs;

