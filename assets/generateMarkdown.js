function generateBadge(license) {
    if (license !== 'none') {
        return `(https://img.shields.io/badge/${license}-blue.svg)`;
    }
    return'';
}

// generating markdown
function generateMarkdown(data) {
    return `# ${data.title} 
 by Matthew Shuman ${renderLicenseBadge(data.license)},


  -------------------------
  ## Table of Contents
  * [Description](*description)
  * [Link] (*link)
  * [How to Use This Application](*usage)
  * [Installation] (*installation)
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