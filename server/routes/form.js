require("dotenv").config();
const express = require('express');
const svgCaptcha = require("svg-captcha");

const getSheetsInstance = require('../utilities/google');

const router = express.Router();

router.get("/captcha", (req, res) => {
  const captcha = svgCaptcha.create({
    noise: 3,
    color: true,
    background: "#f9f9f9"
  });

  req.session.captcha = captcha.text;
  res.type("svg");
  res.send(captcha.data);
});

router.post('/submit', async (req, res) => {

  const { captcha } = req.body;

  if (!captcha || captcha !== req.session.captcha) {
    return res.status(400).json({ "error": "invalid captcha" });
  }

  req.session.captcha = null;

  try {
    const spreadsheetId = process.env.SPREADSHEET_ID;
    const { name, email, message, checkbox } = req.body;
    const sheets = getSheetsInstance();

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A1",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[name, email, message, checkbox ? 'yes' : '']],
      },
    });

    res.status(202).send({
      "message": "Your request has been accepted and will be processed shortly."
    })

  }
  catch (err) {
    console.error(err)
    res.status(400).send({
      "error": "There was an error sending your request"
    })
  }

});

module.exports = router;