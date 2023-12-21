const express = require('express');
const router = express.Router();

const ticketController = require('../../controllers/ticketController');
router.post('/ticket',ticketController.createTicket);

module.exports = router;