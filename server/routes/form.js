const express = require('express');
const router = express.Router();

const sgMail = require('../utilities/sendgrid');

router.get('/', (req, res) => {
  console.log('form get hit');
  const msg = {
    to: 'jackpronske@yahoo.com', // Change to your recipient
    from: 'test@pronskeguitars.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode)
      console.log(response[0].headers)
    })
    .catch((error) => {
      console.error(error)
    })

  // res.status(200).send({ message: 'List of users' });
});

module.exports = router;