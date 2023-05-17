const generateMarkdown= require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'Please enter the title of your project?',
    },
    {
    type: 'input',
    name: 'description',
    message: 'Provide a description:',
    },
    {
    type: 'list',
    name: 'license',
        message: 'Which license do you want to use for your project?',
    choices: ['MIT', 'Apache 2.0', 'GNU GPL v3'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Kindly provide instructions for installation:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide a statement for Usage:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please list the contributors for this project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide instructions for running tests:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github user name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
];


function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
    console.error(err);
      return;
    }
    console.log('README file created successfully!');
  });
}

function init() {
  inquirer.prompt(questions).then(answers => {
  console.log('Generating README...'); 
    writeToFile('generatedREADME.md', generateMarkdown({...answers})) ;
  });
}

init();
