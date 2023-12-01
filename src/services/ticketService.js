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

    async getallMails(filter){
        try {
            const tickets = await this.ticketService.getAllMails(filter);
            return tickets;
        } catch (error) {
            console.log(error);
        }
    }

    async updateTicket(ticketId, data){
        try {
            const ticket = await this.ticketService.update(ticketId,data);
            return ticket; 
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = notificationService;