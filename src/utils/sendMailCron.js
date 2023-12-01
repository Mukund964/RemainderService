const cron = require('node-cron');
const notificationService = require('../services/ticketService');
const transporter = require('../config/mailConfig');

const ticketservice = new notificationService();
const setupJobs = () => {
    cron.schedule('*/5 * * * * *', async () => {
      const PendingTickets = await ticketservice.getallMails({status:'Pending'});
      PendingTickets.forEach((ticket) => {
          transporter.sendMail({
            from : "irctc@admin.com",
             to: ticket.recipietEmail,
             subject : ticket.subject,
             text : ticket.content
          }, async (err,data) => {
            if(!err){
                // update status 
              await ticketservice.updateTicket(ticket.id,{status : "Sent"});
            }else {
              console.log(err);
            }
          })
          
      });
});
}

module.exports = setupJobs;

