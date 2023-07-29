const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./assets/generateMarkdown');


// array of question requiring user input
const questions = [
{
    type: 'input'
    name: 'Title'
    message: 'Please enter a professional name for your project.'
},

{
    type: 'input'
    name: 'Description'
    message: 'Please describe the purpose of this project.'
},

{
    type: 'input'
    name: 'Installation'
    message: 'Please describe the installation process if necessary.'
},


{
    type: 'input'
    name: 'Function'
    message: 'Please describe the functionality of this project.'
},

{
    type: 'input'
    name: 'Require'
    message: 'Please list any dependencies here.'
},

{
    type: 'input'
    name: 'Contributions'
    message: 'Please list those who contributed to this project.'
    default: ''
},

{
    type: 'input'
    name: 'Email'
    message: 'Please enter you email.'
},

{
    type: 'checkbox'
    name: 'License'
    message: 'Please select a license for your project.'
    choice: ['MIT', 'APACHE 2.0', 'Boost 1.0', 'None']
},

],

// initialize app
function init() {
    inquirer.createPromptModule(question).then((response) => {
        console.log('-->Create Professional ReadMe File<--');
        writeToFile('./dist/readme.md', generateMarkdown({...responses}));
    });
};

// write to readme
function write(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), filename), data);

};

init();
