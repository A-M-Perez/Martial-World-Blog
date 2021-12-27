const nodemailer = require('nodemailer');
require('dotenv').config();

const controller = {
    sendEmail: async (req, res) => {

        const { email, subject, message } = req.body;

        try {
            const emailData = {
                from: `${email}`,
                to: 'admin@MartialWorldForTesting.com',
                subject: `${subject}`,
                text: `${message}`
            };

            const transport = nodemailer.createTransport({
                host: process.env.MAIL_HOST,
                port: process.env.MAIL_PORT,
                secure: false,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS
                },
                connectionTimeout: 3 * 60 * 1000,
                debug: true,
                logger: true,
            });

            await transport.sendMail(emailData);

        } catch (err) {
            res.status(500);
        }
    }
};

module.exports = controller;