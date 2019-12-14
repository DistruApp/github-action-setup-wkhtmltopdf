const core = require("@actions/core");
const { installWKHTMLTOPDF } = require("./installer");

main().catch(err => {
  core.setFailed(err.message);
});

async function main() {
  checkPlatform();

  console.log(`##[group]Installing WKHTMLTOPDF`);
  await installWKHTMLTOPDF();
  console.log(`##[endgroup]`);
}

function checkPlatform() {
  if (process.platform !== "linux")
    throw new Error(
      "@github-action-setup-wkhtmltopdf only supports Ubuntu Linux at this time"
    );
}
