const transporter = require('../config/mailConfig');

const mail = (from,to,subject,text)=>{
     const response =transporter.sendMail({
        from : from,
        to: to,
        subject: subject,
        text : text
     });
}

module.exports = {
    mail
}