const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./assets/generateMarkdown');

// array of question requiring user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'Please enter a professional name for your project...'
},

{
    type: 'input',
    name: 'description',
    message: 'Please describe the purpose of this project...'
},

// {
//     type: 'input',
//     name: 'link',
//     message: 'Please enter link to deployed project...'
// },



{
    type: 'input',
    name: 'installation',
    message: 'Please describe the installation process if necessary...'
},


{
    type: 'input',
    name: 'function',
    message: 'Please describe the functionality of this project...'
},

{
    type: 'input',
    name: 'require',
    message: 'Please list any dependencies here...'
},
{
    type: 'input',
    name: 'test',
    message: 'Please enter required tests...'
},

{
    type: 'input',
    name: 'contributors',
    message: 'Please list those who contributed to this project...'
},

{
    type: 'input',
    name: 'email',
    message: 'Please enter your email...'
},
// needed input type list. the other would be confusing to new users and break the code upon pressing enter
{
    type: 'list',
    name: 'license',
    message: 'Please select a license for your project...',
    choices: ['MIT', 'APACHE 2.0', 'Boost 1.0', 'None']
},

{
    type: 'input',
    name: 'screenshot',
    message: 'Please enter the link to the screenshot...'
},

{
    type: 'input',
    name: 'creator',
    message: 'Please enter your Github User Name...'
},

]

// initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log(responses);
      console.log("Creating Professional README.md File...");
      write("./assets/README.md", generateMarkdown({ ...responses }));
    });
  }

// write to readme
function write(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

};

init();
