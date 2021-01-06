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
            message: 'Give instuctions for installing the program here: '
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What information is needed in order to utilize the project?'
        },
        {
            type: 'input',
            name: 'contribution',
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
            choices: [
                {
                    "key": "mit",
                    "name": "MIT License",
                    "spdx_id": "MIT",
                    "url": "https://api.github.com/licenses/mit",
                },
                {
                    "key": "lgpl-3.0",
                    "name": "GNU Lesser General Public License v3.0",
                    "spdx_id": "LGPL-3.0",
                    "url": "https://api.github.com/licenses/lgpl-3.0",
                },
                {
                    "key": "mpl-2.0",
                    "name": "Mozilla Public License 2.0",
                    "spdx_id": "MPL-2.0",
                    "url": "https://api.github.com/licenses/mpl-2.0",
                },
                {
                    "key": "agpl-3.0",
                    "name": "GNU Affero General Public License v3.0",
                    "spdx_id": "AGPL-3.0",
                    "url": "https://api.github.com/licenses/agpl-3.0",
                },
                {
                    "key": "unlicense",
                    "name": "The Unlicense",
                    "spdx_id": "Unlicense",
                    "url": "https://api.github.com/licenses/unlicense",
                },
                {
                    "key": "apache-2.0",
                    "name": "Apache License 2.0",
                    "spdx_id": "Apache-2.0",
                    "url": "https://api.github.com/licenses/apache-2.0",
                },
                {
                    "key": "gpl-3.0",
                    "name": "GNU General Public License v3.0",
                    "spdx_id": "GPL-3.0",
                    "url": "https://api.github.com/licenses/gpl-3.0",
                }
            ]
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