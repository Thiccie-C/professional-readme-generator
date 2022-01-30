const inquirer = require("inquirer");
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    // Title of the Project
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your Project? (Required)',
    validate: tInput => {
        if(tInput) {
            return true;
        } else {
            console.log("Please provide a title for your project!")
            return false;
        }
    }
    },
    // Brief Description of project
    {
        type: 'input',
        name: 'description',
        message: 'Give a breif description of your Project (Required)',
        validate: dInput => {
            if(dInput){
                return true;
            } else {
                console.log('Please provide a brief description of your Project!')
                return false;
            }
        }
    },
    // How to install your Project
    {
        type: 'input',
        name: 'installation',
        message: 'How will users install your Project? (Required)',
        validate: iInput => {
            if(iInput) {
                return true;
            } else {
                console.log("Please provide instructions on how to install your project")
                return false;
            }
        }
    },
    // Usage of the project
    {
        type: 'input',
        name: 'usage',
        message: 'How will users use your Project? (Required)',
        validate: uInput => {
            if(uInput) {
                return true;
            } else {
                console.log("Please enter how to use your Project!")
            }
        }
    },
    // Contributions
    {
        type: 'input',
        name: 'contributions',
        message: 'How can people help contribute to this project (Required)',
        validate: cInput => {
            if(cInput) {
                return true;
            } else{
                console.log("Please provide how people can help contribute to this Project!");
                return false;
            }
        }
    },
    //Testing
    {
        type: 'input',
        name: 'test',
        message: 'How does a fellow developer go about testing your Project?(Required)',
        validate: tInput => {
            if(tInput) {
                return true;
            } else {
                console.log("Please provide testing instructions for your Project!")
            }
        }
    },
    // Licenses
    {
        type: 'checkbox',
        name: 'Licenses',
        choices: ['MIT', 'GPLv3', 'Apache', 'Eclipse', 'Mozilla', 'None']
    },
    // GitHub Username
    {
        type: 'input',
        name: 'gitHub',
        message: 'Please enter your GitHub Username! (Required)',
        validate: ghuInput => {
            if(ghuInput) {
                return true;
            } else {
                console.log("Please enter your GitHub Username!")
                return false;
            }
        }
    },
    // Email
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your Email address so users can contact you! (Required)',
        validate: eInput => {
            if(eInput) {
                return true;
            } else {
                console.log('Please enter your Email address')
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
// }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
generateMarkdown()