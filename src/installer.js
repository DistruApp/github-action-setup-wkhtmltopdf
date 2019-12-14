const { exec } = require("@actions/exec");
const path = require("path");

module.exports = { installWKHTMLTOPDF };

/**
 * Install WKHTMLTOPDF.
 */
async function installWKHTMLTOPDF() {
  await exec(path.join(__dirname, "install-wkhtmltopdf"), []);
}
