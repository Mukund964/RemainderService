const nodemailer = require('nodemailer');
const {EMAIL_ID,EMAIL_PASS} =require('./serverConfig');

const transport = nodemailer.createTransport({
    service : 'Gmail',
    auth : {
        user : EMAIL_ID,
        pass : EMAIL_PASS 
    }
});

module.exports = transport;