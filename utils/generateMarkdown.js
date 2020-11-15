// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title ${data.title}

  ## Description ${data.description}

  ## Table of contents
  *[Installation](#intstallation)
  *[Contributors](#contributors)
  *[Usages](#usage)
  *[License](#license)

  ## Installation
  ${data.installation}
  
  ## Contributors
  ${data.contributors}

  ## Usages
  ${data.usage}

  ## License
  ${data.license}
  More info about the License,
  -[License](https://opensourse.org/licenses/${data.license})

  ## Questions
  @ GitHub
  ${data.gitHub}
  

`;
}

module.exports = generateMarkdown;
