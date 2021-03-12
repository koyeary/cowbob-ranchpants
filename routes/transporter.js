const router         = require('express').Router();
const nodemailer     = require('nodemailer');
const mailController = require('../controllers/mailController');
const config         = require('config');

router.get('/', mailController.index);

const MAIL_USER = config.get('MAIL_USER');
const MAIL_PASS = config.get('MAIL_PASS');

// POST route from contact form
router.post('/', (req, res, next) => {
   let transporter = nodemailer.createTransport({
    service: 'yahoo',
    port: 465,
    secure: true,
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASS
    } 
  }); 


  // Specify what the email will look like
  const mailOpts = {
    from: MAIL_USER, // This is ignored by Gmail
    to: 'katyeary@gmail.com',
    subject: `Message from ${req.body.name} through your portfolio`,
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  };

 // Debug / verification 
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
      console.log(error);
      console.log(`Failed contact form attempt: ${mailOpts}`);
      //router.get('/failure'); 
    }
    else {
      //res.render('contact-success') 
      console.log('Contact-form attempt successful');
      console.log(res.response);
    }
  });
});
module.exports = router;
