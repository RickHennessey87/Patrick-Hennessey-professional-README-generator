// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return `[License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `
    ## License
    
    This project is covered by the ${license} license.

    ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    ${renderLicenseBadge(data.license)}

    ## Description
        
    ${data.description}
        
    ## Table of Contents
        
    - Installation
    - Usage
    - Credits
    - License
        
    ## Installation
        
    ${data.installation}
        
    ## Usage
        
    ${data.usage}
        
    ## Credits
        
    GitHub: ${data.github}
    Email: ${data.email}
        
    ${renderLicenseSection(data.license)}
        
    ## How to Contribute 

    ${data.contribution}
        
    ## Tests
        
    ${data.test}`;
}

module.exports = generateMarkdown;
