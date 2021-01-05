const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const markdown = require("./gnerateMarkdown");

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
            message: 'Give instuctions for installing the program here: '
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What information is needed in order to utilize the project?'
        },
        {
            type: 'input',
            name: 'contubution',
            message: 'List contribution guidelines on your project here: '
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
            choices: ['Apache 2.0', 'MIT', 'ISC', 'BSD 2.0', 'Eclipse 2.0', 'GNU Affero GPL v3.0', 'GNU GPL v2.0']
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



// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
async function init() {
    try {
        const data = await questions;

        contactInfo(data);
        licenseChoice(data);

        const readMe = generateMarkdown(data);

        await writeFileAsync('readMe.md', readMe);

        console.log('Successfully wrote to readMe.md');

    } catch(err) {
        console.log(err);
    }
}

// function call to initialize program
init();
