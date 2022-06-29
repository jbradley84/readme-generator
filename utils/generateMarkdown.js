const fs = require("fs");


// create the motivation section
const generateMotivation = data => {
   if (!data.motivation) {
      return "";
   }
   return `
   #### Motivation

   ${data.motivation}
   `
}

// create the solution section
const generateSolution = data => {
   if (!data.solution) {
      return "";
   }
   return `
   #### What this project solves for:

   ${data.solution}
   `
}

// create the link section
const generateLink = data => {
   if (!data.link) {
      return "";
   }
   return `
   #### Deployed Site:

   ${data.link}
   `
}

// create the contributors section
const generateContributors = data => {
   if (!data.contributorsList) {
      return "";
   }
   return `
   #### A special thanks to the following contributor(s):

   ${data.contributorsList}
   `
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}
  ![License badge](https://img.shields.io/badge/license-${data.license}-blue)


  ### Table of Contents
  - [Description](https://github.com/${data.github}/${data.repository}/tree/develop/dist#description)
  - [Installation](https://github.com/${data.github}/${data.repository}/tree/develop/dist#installation)
  - [Usage](https://github.com/${data.github}/${data.repository}/tree/develop/dist#usage)
  - [Contributing](https://github.com/${data.github}/${data.repository}/tree/develop/dist#contributing)
  - [Tests](https://github.com/${data.github}/${data.repository}/tree/develop/dist#tests)
  - [Questions?](https://github.com/${data.github}/${data.repository}/tree/develop/dist#questions?)

  ## Description

  ${data.description}
  ${generateMotivation(data)}
  ${generateSolution(data)}
  ${generateLink(data)}

  #### Built With

  ${data.tech}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${generateContributors(data)}
  #### How you can contribute to this project:
  
  ${data.contribute}

  ## Tests

  ${data.tests}

  ## Questions?

  For questions on or support regarding ${data.projectName}, you can contact me via [GitHub](https://github.com/${data.github}) or ${data.email}.

  ### License 
  
`;
}

module.exports = generateMarkdown;


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