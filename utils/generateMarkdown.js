// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
     

// TODO: Create a function to generate markdown for README
function generateMarkdown(data){
console.log("data",data) 

  return `# ${data.title}
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage

  ${data.usage}

    ## Contributing
  
  ${data.contributing}

  ## Tests
  
  ${data.tests}

  ## Questions
  
  Contact for Questions: bllongbeverly@gmail.com, github Repo's
  `

}

module.exports = generateMarkdown;
