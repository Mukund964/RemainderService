const {NotificationTicket} = require('../models/index');

class notificationRepository{
    
    async create(data){
        try {
            const ticket = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            console.log(error);
        }
    }

    async getAllMails(status){
        try {
            const tickets = await NotificationTicket.findAll({
                where: {
                    status: status,
                }
            });
            return tickets;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = notificationRepository;