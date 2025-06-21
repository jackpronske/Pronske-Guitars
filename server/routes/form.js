const express = require('express');
const router = express.Router();

const sgMail = require('../utilities/sendgrid');

router.get('/', (req, res) => {
  console.log('form get hit');
  const msg = {
    to: 'pronske@yahoo.com',
    from: 'newsletter@pronskeguitars.com',
    subject: 'Pronske Guitars Newsletter - June Edition',
    text: 'We have a great newsletter for you today! Thank you so much for being a part of our company, we love you! -Jack',
    html: '<strong>This is a newsletter sent from our new domain! We can customize and stylize this whole email if we want. Right now I am just warming up the domain for us. Thanks for being a part of the test!</strong>',
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