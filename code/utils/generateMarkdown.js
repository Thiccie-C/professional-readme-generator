// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseBadge = [' ']
const licenseLink = [' ']
var licenseBadgeContents = " "
var licenseLinkContents = " "  

function renderLicenseBadge(data) {
  for (var i = 0; i < data.licenses.length; i++){
  var license = data.licenses[i]
  if (license == "MIT"){
    licenseBadge.push("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]")
  } else if (license == "GPLv3") {
    licenseBadge.push("[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]")
  } else if (license == 'Apache'){
    licenseBadge.push("[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]")
  } else if (license == "Eclipse") {
    licenseBadge.push("[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]")
  } else if (license == "Mozilla") {
    licenseBadge.push("[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]")
  }
  licenseBadgeContents += licenseBadge[i] + `
  `
}
renderLicenseLink(data)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  
  for (var i = 0; i < data.licenses.length; i++) {
  var license = data.licenses[i]
  if (license == "MIT"){
    licenseLink.push("(https://opensource.org/licenses/MIT)")
  } else if (license == "GPLv3") {
    licenseLink.push("(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)")
  } else if (license == 'Apache'){
    licenseLink.push("(https://opensource.org/licenses/Apache-2.0)")
  } else if (license == "Eclipse") {
    licenseLink.push("(https://opensource.org/licenses/EPL-1.0)")
  } else if (license == "Mozilla") {
    licenseLink.push("(https://opensource.org/licenses/MPL-2.0)")
  } else {
    return;
  }
  licenseLinkContents += "-" + data.licenses[i] + " " + licenseLink[i + 1] + `
  `
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
renderLicenseBadge(data)
  return `# ${data.title}
  ## Licensing:
  ` + licenseBadgeContents +`
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Description:
  A Brief Description of the project
  ${data.description}

  ## Installation
  How to Install:
  ${data.installation}

  ## Usage
  How to Use:
  ${data.usage}

  ## Contributions
  How to Contribute:
  ${data.contributions}

  ## Testing 
  How to test:
  ${data.test}

  ## Licenses:
  `+ licenseLinkContents +`

  ## Questions:
  Contact me with any questions:
  [GitHub](https://github.com/${data.github})
  [Email Me](https://mailto:${data.email})
  `;
}

module.exports = generateMarkdown;