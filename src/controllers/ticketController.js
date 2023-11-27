const notificationService = require('../services/ticketService');

const ticketController = new notificationService();

const create = async (req,res)=>{
    try {
        const response = await ticketController.create(req.body);
        res.status(500).json({
            data:response,
            err: {},
            message: "Ticket Registered Succesfully",
            success:true
        })
    } catch (error) {
        res.status(400).json({
            data:{},
            err: {error},
            message: "Ticket Registered unsuccesfull",
            success:false
        })
    }
}

module.exports = {
    create
}