const fs = require("fs");


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = () => {
  if (data.license === "MIT License") {
    licenseLink = "a";
  } else if (data.license === "ISC License") {
    licenseLink = "b";
  } else if (data.license === "GNU") {
    licenseLink = "c";
  } else {
    licenseLink = "d";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}
  [![License badge](https://img.shields.io/badge/license-${data.license}-blue)]


  ### Table of Contents
  - [Description](https://github.com/${data.github}/${data.repository}#description)
  - [Installation](https://github.com/${data.github}/${data.repository}#installation)
  - [Usage](https://github.com/${data.github}/${data.repository}#usage)
  - [Contributing](https://github.com/${data.github}/${data.repository}#contributing)
  - [Tests](https://github.com/${data.github}/${data.repository}#tests)
  - [Questions?](https://github.com/${data.github}/${data.repository}#questions?)

  ## Description

  ${data.projectDescription}

  ### Built With

  ${data.projectTech}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribute}

  ## Tests

  ${data.projectTests}

  ## Questions?

  For questions on or support regarding ${data.projectName}, you can contact me via [GitHub]() or ${data.email}.

  ### License 
  
`;
}

module.exports = generateMarkdown;
