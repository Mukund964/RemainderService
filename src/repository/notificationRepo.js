const {NotificationTicket} = require('../models/index');

class notificationRepository{
    
    async create(data){
        try {
            console.log(data);
            const ticket = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = notificationRepository;