// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
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
        name: 'Installation',
        message: 'Kindly provide instructions for installation:',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide a statement for Usage:',
    },
    {
        type: 'input',
        name: 'Contribution',
        message: 'Please list the contributors for this project:',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Please provide instructions for running tests:',
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'What is your github user name?',
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'What is your email?',
    },
];


const fs = require('fs');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('README file created successfully!');
    });
}

function writeToFile(fileName, data) {}


function init() {
    
        inquirer.prompt(questions).then(answers => {
        const data = generateREADME(answers); 
        });
        writeToFile('README.md', data);
    };

    init ();




