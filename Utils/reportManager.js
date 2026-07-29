const { execSync } = require("child_process");
const fs = require("fs");

// Create Reports folder if it doesn't exist
if (!fs.existsSync("Reports")) {
    fs.mkdirSync("Reports");
}

// Create timestamp
const timestamp = new Date()
    .toISOString()
    .replace(/[:.]/g, "-");

// Output folder
const reportFolder = `Reports/Allure-${timestamp}`;

try {

    execSync(
        `npx allure generate allure-results --clean -o "${reportFolder}"`,
        { stdio: "inherit" }
    );

    console.log(`Report generated successfully in ${reportFolder}`);

} catch (err) {

    console.error(err);

}