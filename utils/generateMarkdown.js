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

// create the license section
const generateLicense = data => {
   if (data.license === "MIT") {
      return `
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
    `
   } else if (data.license === "ISC") {
      return `
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted, provided that the above
      copyright notice and this permission notice appear in all copies.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
    `
   } else if (data.license === "GNU") {
      return `
      GNU GENERAL PUBLIC LICENSE
      Version 2, June 1991

      Copyright (C) 1989, 1991 Free Software Foundation, Inc.,
      51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
      Everyone is permitted to copy and distribute verbatim copies
      of this license document, but changing it is not allowed.

      To view full text:
      [https://www.gnu.org/licenses/gpl-3.0.txt](https://www.gnu.org/licenses/gpl-3.0.txt)
    `
   } else {
      return `
      Apache License
      Version 2.0, January 2004

      To view full text:
      [https://www.apache.org/licenses/LICENSE-2.0.txt](https://www.apache.org/licenses/LICENSE-2.0.txt)
    `
   }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   return `
  # ${data.projectName}
  ![License badge](https://img.shields.io/badge/license-${data.license}-blue)


  ### Table of Contents
  - [Description](https://github.com/${data.github}/${data.repository}/tree/main/dist#description)
  - [Installation](https://github.com/${data.github}/${data.repository}/tree/main/dist#installation)
  - [Usage](https://github.com/${data.github}/${data.repository}/tree/main/dist#usage)
  - [Contributing](https://github.com/${data.github}/${data.repository}/tree/main/dist#contributing)
  - [Tests](https://github.com/${data.github}/${data.repository}/tree/main/dist#tests)
  - [Questions](https://github.com/${data.github}/${data.repository}/tree/main/dist#questions)


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

  ${generateLicense(data)}
`;
}

module.exports = generateMarkdown;






// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }