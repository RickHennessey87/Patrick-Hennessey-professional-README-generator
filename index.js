// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: "Enter the title of your project:",
  },
  {
    type: 'input',
    name: 'description',
    message: "Enter a description of your project: ",
  },
  {
    type: 'input',
    name: 'installation',
    message: "Enter the installation instructions: ",
  },
  {
    type: 'input',
    name: 'usage',
    message: "Enter the usage information: ",
  },
  {
    type: 'input',
    name: 'contribution',
    message: "Enter the contribution guidelines: ",
  },
  {
    type: 'input',
    name: 'test',
    message: "Enter the test instructions: "
  },
  {
    type: 'list',
    name: 'license',
    message: "Choose the license you would like to use: ",
    choices: [
        "Apache License 2.0", "MIT License", "Boost Software License 1.0",
         "Eclipse Public License 2.0", "Mozilla Public License 2.0", "The Unlicense", "None"
    ]
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter you github URL: '
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address: '
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
    error ? console.log(error) : console.log(`${fileName} successfully created.`)
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('READMETest.md', generateMarkdown(answers));
    })
};

// Function call to initialize app
init();
