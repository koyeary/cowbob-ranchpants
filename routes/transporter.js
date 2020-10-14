const router = require('express').Router();
const nodemailer = require('nodemailer');
const mailController = require('../controllers/mailController');

const GMAIL_USER = /* process.env.GMAIL_USER */ 'kat.o.yeary@gmail.com';
const GMAIL_PASS = /* process.env.GMAIL_PASS */ 'y3@Ry19520817';

//const name = document.getElementById("name").value;
//const email = document.getElementById("email").value;
//const message = document.getElementById("message").value;


router.get('/', mailController.index);
// POST route from contact form
router.post('/', (req, res) => {

  // Instantiate the SMTP server
  /* const transporter = nodemailer.createTransport({     service: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    },
    debug: true 

  }); */
  console.log(req, res);

  const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 1025,
    auth: {
      user: 'project.1',
      pass: 'secret.1'
    }
  });

/*   const mailObj = {
    name: res.data.name,
    email: res.data.email,
    text: res.data.text
  } */

  // Specify what the email will look like
  const mailOpts = {
    from: `${req.body.name} &lt; ${req.body.email} &gt;`, // This is ignored by Gmail
    to: GMAIL_USER,
    subject: 'New message from your portfolio contact form',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  }

  // Attempt to send the email
  transporter.sendMail(mailOpts, (error, res) => {
    if (error) {
      //res.render('contact-failure') 
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
