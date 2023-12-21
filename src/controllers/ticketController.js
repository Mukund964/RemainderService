const {create} = require('../services/ticketService');

const createTicket = async (req,res)=>{
    try {
        const response = await create(req.body);
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
    createTicket
}