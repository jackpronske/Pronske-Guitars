require("dotenv").config();
const { google } = require("googleapis");

const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);

let sheetsInstance = null;

function getSheetsInstance() {
	if (sheetsInstance) return sheetsInstance;

	const auth = new google.auth.GoogleAuth({
		credentials,
		scopes: ["https://www.googleapis.com/auth/spreadsheets"],
	});

	sheetsInstance = google.sheets({ version: "v4", auth });
	return sheetsInstance;
}

module.exports = getSheetsInstance;
