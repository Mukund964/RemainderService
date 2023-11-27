const express = require('express');
const router = express.Router();

const ticketController = require('../../controllers/ticketController');
router.post('/ticket',ticketController.create);

module.exports = router;