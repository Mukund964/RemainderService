
const notificationRepository = require('../repository/notificationRepo');

const ticketService = new notificationRepository();

const create = async (data) =>{
    try {
        console.log(data);
        const ticket = await ticketService.create(data);
        return ticket;
    } catch (error) {
        console.log(error);
    }
}
const updateTicket = async(ticketId, data) =>{
    try {
        const ticket = await ticketService.update(ticketId,data);
        return ticket; 
    } catch (error) {
        console.log(error);
    }
}
const getAllMails = async (filter) =>{
    try {
        const tickets = await ticketService.getAllMails(filter);
        return tickets;
    } catch (error) {
        console.log(error);
    }
}

const subscribeEvent = async(payload)=>{
    await create(payload);
}


module.exports = {
    create,
    getAllMails,
    updateTicket,
    subscribeEvent
};