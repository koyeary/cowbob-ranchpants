const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail'
});
transporter.sendMail({
    from: '',
    to: 'katyeary@gmail.com',
    subject: 'Message from your portfolio contact form!',
    text: ''
}, (err, info) => {
    console.log(info.envelope);
    console.log(info.messageId);
})