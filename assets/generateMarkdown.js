function generateBadge(license) {
    console.log(license);

    if (license === 'MIT') {
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
            
        } if  (license === 'APACHE 2.0') {
            return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        } if (license === 'Boost 1.0') {
            return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
        } if (license === 'None') {
            return ``
        }

}

function generateInfo(license) {
    if (license === 'MIT') {
        return `[The MIT License grants anyone the right to use, copy, modify and distribute the software or code, either in original or modified form.]`
    }
    if (license === 'APACHE 2.0') {
        return `[The Apache 2.0 license is a particular type of open-source, permissive software license that ensures that end-users are granted a license to any patent that is covered by the software in question. An Apache 2.0 license ensures the security and availability of safe and powerful open-source software.]`
    }
    if (license === "BOOST 1.0") {
        return `[Boost Software License - Version 1.0 - August 17th, 2003

            Permission is hereby granted, free of charge, to any person or organization
            obtaining a copy of the software and accompanying documentation covered by
            this license (the "Software") to use, reproduce, display, distribute,
            execute, and transmit the Software, and to prepare derivative works of the
            Software, and to permit third-parties to whom the Software is furnished to
            do so, all subject to the following:
            
            The copyright notices in the Software and this entire statement, including
            the above license grant, this restriction and the following disclaimer,
            must be included in all copies of the Software, in whole or in part, and
            all derivative works of the Software, unless such copies or derivative
            works are solely in the form of machine-executable object code generated by
            a source language processor.]`
        }
        if (license === 'none') {
            return ``
        }
}   ;

// generating markdown
function generateMarkdown(data) {
    // const licenseInfo = generateInfo(data.license);    
    return `# ${data.title}
 
    ${generateBadge(data.license)}
    ${generateInfo(data.license)}

  -------------------------
  ## Table of Contents
  * [Description](#description)
  * [License Info](#license)
  * [How to Use This Application](#usage)
  * [Installation](#installation)
  * [Contributors](#contributors)
  * [Questions](#questions)
  -------------------------
  ## Description
  ${data.description}
  ## How to Use This Application:
  ${data.function}
  ## Dependencies 
  ${data.require}
  ## Installation
  ${data.installation}
  ## Contributors
  ${data.contributors}
   ## Testing
  ${data.test}
  ## Questions
  Please send your questions [here](mailto:${data.email}?subject=[GitHub]) or visit [github/${data.creator}](https://github.com/${data.creator}).
  `;
  }
  
  module.exports = generateMarkdown;