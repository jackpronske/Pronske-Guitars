const express = require('express');
const router = express.Router();

const sgMail = require('../utilities/sendgrid');

router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  const msg = {
    to: email,
    from: 'warmup@pronskeguitars.com',
    templateId: 'd-0e127157b60c46788f01d487abcd1f9b',
    dynamicTemplateData: {
      name,
      message
    }
  };

  sgMail
    .send(msg)
    .then((response) => {
      if (response[0].statusCode <= 300) {
        res.status(202).send({
          "message": "Your request has been accepted and will be processed shortly."
        })
      }
    })
    .catch((error) => {
      console.error(error)
      res.status(400).send({
        "error": "There was an error sending your request"
      })
    })
});

module.exports = router;