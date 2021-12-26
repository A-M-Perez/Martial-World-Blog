const nodemailer = require('nodemailer');
require('dotenv').config();

const controller = {
    sendEmail: async (req) => {

        const { emailFrom, emailSubject, emailBody } = req.body;
        const transport = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: true,
            authorization: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            },
            ignoreTLS: true
        });

        

        await transport.sendMail({
            from: `${emailFrom}`,
            to: 'cdasfdjk9@test.com',
            subject: `${emailSubject}`,
            html: `${emailBody}`
        })

        console.log('sent');

    }
};

module.exports = controller;