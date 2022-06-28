// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
//const fs = require("fs");

const promptReadme = () => {

    return inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "What is your GitHub Username? (Required)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub Username!");
                }
            }
        },
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
            name: "repository",
            message: "What is the name of the GitHub repository where your project can be found? (Required)",
            validate: repository => {
                if (repository) {
                    return true;
                } else {
                    console.log("Please enter the name of your project's GitHub repository!");
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
            name: "projectTech",
            message: "What technologies did you use to build this project? (Required)",
            validate: projectTechInput => {
                if (projectTechInput) {
                    return true;
                } else {
                    console.log("Please input a list of the technologies you used to build the project!");
                }
            }
        },
        {
            type: "input",
            name: "projectWhy",
            message: "What motivated you to work on this project?",
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
            message: "Has your project been deployed to a live page?",
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
            message: "How can users install your application? (Required)",
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log("Please provide instructions for users to install your application!");
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "What is the intended use/functionality of your project? (Required)",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("Please let users know how your project is intended to function!");
                }
            }
        },
        {
            type: "confirm",
            name: "contributors",
            message: "Have any other developers contributed to your project?",
            default: false
        },
        {
            type: "input",
            name: "contributorsList",
            message: "Provide a link to the GitHub pages of contributing developers.",
            when: ({ contributors }) => contributors
        },
        {
            type: "input",
            name: "contribute",
            message: "How can other developers contribute to your project? (Required)",
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log("Please let users know how they can contribute to your project!");
                }
            }
        },
        {
            type: "input",
            name: "projectTests",
            message: "Please provide code examples with instruction on how to test your project. (Required)",
            validate: projectTestsInput => {
                if (projectTestsInput) {
                    return true;
                } else {
                    console.log("Please provide project test code!");
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Provide an email address where users can contact you with questions. (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please provide a preferred email address!");
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "Choose a licesne to add to your project.",
            choices: ["MIT License", "ISC License", "GNU GPLv3", "Apache License 2.0"]
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
