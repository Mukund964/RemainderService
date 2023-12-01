const {NotificationTicket} = require('../models/index');
const { Op }= require('sequelize')

class notificationRepository{
    
    async create(data){
        try {
            const ticket = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            console.log(error);
        }
    }

    async getAllMails(filter){
        try {
            const tickets = await NotificationTicket.findAll({
                where: {
                    status: filter.status,
                    notificationTime:{
                        [Op.lte] : new Date()
                    }
                }
            });
            return tickets;
        } catch (error) {
            console.log(error);
        }
    }

    async update(id,data){
        try {
            const ticket = await NotificationTicket.findByPk(id);
            ticket.status = data.status;
            ticket.save();
            return ticket;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = notificationRepository;