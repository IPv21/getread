function generateBadge(license) {
    console.log(license);
    // if (license !== 'none') {
        // return `(https://img.shields.io/badge/:${license})
        // `;
    if (license === 'MIT') {
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
            
        } if  (license === 'APACHE 2.0') {
            return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        } if (license === 'Boost 1.0') {
            return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
        } if (license === 'None') {
            return ``
        }

    // }
    // return'';
}

// generating markdown
function generateMarkdown(data) {
    return `# ${data.title} 
 ${generateBadge(data.license)}


  -------------------------
  ## Table of Contents
  * [Description](#description)
  *license link
  * [How to Use This Application](#usage)
  * [Installation](#installation)
  * [Contributors](#contributors)
  * [Questions](#questions)
  -------------------------
  ## Description
  ${data.description}
  ## Deployed Application URL
  ${data.link}
  ## How to Use This Application:
  ${data.function}
  ## Dependencies 
  ${data.require}
  ## Contributors
  ${data.contributors}
  ## Testing
  ${data.test}
  ## Questions
  Please send your questions [here](mailto:${data.email}?subject=[GitHub]) or visit [github/${data.creator}](https://github.com/${data.creator}).
  `;
  }
  
  module.exports = generateMarkdown;