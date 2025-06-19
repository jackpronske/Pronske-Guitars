const express = require('express');
const router = express.Router();

const sgMail = require('../utilities/sendgrid');

router.get('/', (req, res) => {
  console.log('form get hit');
  const msg = {
    to: 'jackpronske@yahoo.com',
    from: 'newsletter@pronskeguitars.com',
    subject: 'Pronske Guitars Newest Newsletter',
    text: 'We have a great newsletter for you today! Thank you so much for being a part of our company, we love you! -Jack',
    html: '<strong>We have a great newsletter for you today! Thank you so much for being a part of our company, we love you! -Jack</strong>',
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
});

module.exports = router;