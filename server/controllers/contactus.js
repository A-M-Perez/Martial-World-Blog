const nodemailer = require('nodemailer');
require('dotenv').config();

const controller = {
    sendEmail: async (req, res) => {

        try {
            const { emailFrom, emailSubject, emailBody } = req.body;

            const emailData = {
                from: `fromtest@test.com`,
                to: 'totest@test.com',
                subject: `Hi`,
                text: `body`
            };

            const transport = nodemailer.createTransport({
                host: process.env.MAIL_HOST,
                port: process.env.MAIL_PORT,
                secure: false,
                authorization: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS
                },
                connectionTimeout: 3 * 60 * 1000,
                debug: true,
                logger: true,
                tls: {rejectUnauthorized: false}
            });

            await transport.sendMail(emailData);

        } catch (err) {
            res.status(500);
        }
    }
};

module.exports = controller;