// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !=="none")
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const licenseLink = renderLicenseLink(license);{
    if (license !== "none") {
      return`-[license]'(#license-)`
    }
    return ``;
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) 
      

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    const licenseSection = renderLicenseSection(data.license);
    return `# ${data.title}
  
  ${licenseSection}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  For any questions about the project, please feel free to reach out to me through my [GitHub profile](https://github.com/${data.github}) or via email at ${data.email}.
  `;
  }
  
`;
}

module.exports = generateMarkdown;
