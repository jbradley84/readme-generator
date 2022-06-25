// TODO: Include packages needed for this application
const inquirer = require("inquirer");
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
      }
   ])
   //.then(console.log(promptReadme));
};




// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }




promptReadme()
   .then(readmeData => {
      console.log(readmeData);
   });
