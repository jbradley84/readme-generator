// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
//const fs = require("fs");

const promptReadme = () => {

   return inquirer.prompt([
      {
         type: "input",
         name: "projectName",
         message: "What is the name or title of your project? (Required)",
         validate: projectNameInput => {
            if (projectNameInput) {
               return true;
            } else {
               console.log("Please enter the name or title of your project!");
            }
         }
      },
      {
         type: "input",
         name: "projectDescription",
         message: "Provide a short description of your project. (Required)",
         validate: projectDescriptionInput => {
            if (projectDescriptionInput) {
               return true;
            } else {
               console.log("Please provide a short description of your project!");
            }
         }
      },
      {
         type: "input",
         name: "projectWhy",
         message: "What motivated you to work on this project? (Required)",
         validate: projectWhyInput => {
            if (projectWhyInput) {
               return true;
            } else {
               console.log("Please provide a brief explanation of what motivated you to work on this project!");
            }
         }
      },
      {
         type: "confirm",
         name: "confirmProblem",
         message: "Does this project solve a specific problem?",
         default: true
      },
      {
         type: "input",
         name: "problemSolution",
         message: "What solution does your project offer to the problem?",
         when: ({ confirmProblem }) => confirmProblem
      },
      {
         type: "confirm",
         name: "projectSite",
         message: "Has your project been deployed?",
         default: true
      },
      {
         type: "input",
         name: "deployedSite",
         message: "Provide a link to your deployed project site.",
         when: ({ projectSite }) => projectSite
      },
      {
         type: "input",
         name: "projectSnip",
         message: "Provide a link to a screenshot of your project."
      },
      {
         type: "input",
         name: "installation",
         message: "How can users install your application?"
      },
      {
         type: "list",
         name: "license",
         message: "Choose a licesne to add to your project.",
         choices: ["1", "2", "3", "4"]
      },
      {
         type: "confirm",
         name: "contributors",
         message: "Did other developers contribute to your project?",
         default: false
      },
      {
         type: "input",
         name: "contributorsList",
         message: "Provide a link to the GitHub page of the contributing developer.",
         when: ({ contributors }) => contributors
      },
      {
         type: "input",
         name: "contribute",
         message: "Let users know how they can contribute to your project."
      },
      {
         type: "confirm",
         name: "projectTests",
         message: "Have you created application tests for users to run?",
         default: false
      },
      {
         type: "input",
         name: "tests",
         message: "Provide a link to the test."
      },
      {
         type: "input",
         name: "github",
         message: "Provide a link to your GitHub profile."
      },
      {
         type: "input",
         name: "email",
         message: "Provide an email address where users can contact you with questions."
      }
   ])
};






// TODO: Create a function to write README file
function writeToFile(fileContent) { 
   return new Promise((resolve, reject) => {
      fs.writeFile("./dist/README.md", generateMarkdown(fileContent), err => {
         if (err) {
            reject(err);
            return;
         }
         resolve({
            ok: true,
            message: "File created!"
         });
      });
   });
}




promptReadme()
   .then(readmeData => {
      console.log(readmeData);
      writeToFile(readmeData);
      //return generateMarkdown(readmeData);
   });
