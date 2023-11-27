const notificationRepository = require('../repository/notificationRepo');

class notificationService{
    constructor(){
        this.ticketService = new notificationRepository();
    }

    async create(data){
        try {
            const ticket = await this.ticketService.create(data);
            return ticket;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = notificationService;