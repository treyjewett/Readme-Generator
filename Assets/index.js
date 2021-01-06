const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require("./generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Briefly describe your project: '
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Are there installation requirements in order to run the application?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is this application used?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'List contributors here: '
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter instructions for testing here: '
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license to use for you project.',
            choices: ['MIT', 'UNLICENSE', 'APACHE-2.0', 'MPL-2.0', 'AGPL-3.0', 'GPL-3.0', 'LGPL-3.0']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?'
        },
        {
            type: 'input',
            name: 'email',
            messge: 'What is your email address?'
        }
    ]);

// function to initialize program
function init() {
    questions()
        .then((data) => writeFileAsync("READMEdemo.md", generateMarkdown(data)))
        .then(() => console.log('Successfully wrote to READMEdemo.md'))
        .catch((err) => console.error(err));
}

// function call to initialize program
init();