const router = require('express').Router();
const nodemailer = require('nodemailer');
const mailController = require('../controllers/mailController');

const YAHOO_USER = /* process.env.GMAIL_USER */ 'kat.yeary@yahoo.com';
const YAHOO_PASS = /* process.env.GMAIL_PASS */ 'y3@Ry19520817';

//const name = document.getElementById("name").value;
//const email = document.getElementById("email").value;
//const message = document.getElementById("message").value;


router.get('/', mailController.index);
// POST route from contact form
router.post('/', (req, res, next) => {
   let transporter = nodemailer.createTransport({
    service: 'yahoo',
    port: 465,
    secure: true,
    auth: {
      user: 'kat.yeary@yahoo.com',
      pass: 'mzmzpdixhrkgzgtw'
    } 
  }); 

  /*       let transporter = nodemailer.createTransport({
      host: 'localhost',
      port: 1025,
      auth: {
        user: 'project.1',
        pass: 'secret.1'
      }
    });
   */
  /*   let transporter = nodemailer.createTransport({
      service: 'imap.mail.yahoo.com',
      port: 993,
      secure: true
    }); */

  // Instantiate the SMTP server
/*       let transporter = nodemailer.createTransport({
      sendmail: true,
      newline: 'unix',
      path: '/usr/sbin/sendmail'
    });   */

  // Specify what the email will look like
  const mailOpts = {
    from: YAHOO_USER, // This is ignored by Gmail
    to: YAHOO_USER,
    subject: 'New message from your portfolio contact form',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  };

  /*   transporter.verify(function (error, success) {
      if (error) {
        console.log('not connecting to smtp');
      } else {
        console.log('Server ready to take messages');
        console.log(mailOpts);
      }
    }); */
  // Attempt to send the email
  transporter.sendMail(mailOpts, (error, res) => {
    if (error) {
      //res.render('contact-failure') 
      console.log(error);
      console.log('Failed contact form attempt: ')
      console.log(mailOpts);
    }
    else {
      //res.render('contact-success') 
      console.log('success');
    }
  });
});
module.exports = router;
