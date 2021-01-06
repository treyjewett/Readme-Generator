// function to generate markdown for README
function generateMarkdown(data) {
  return `

  ${data.license[0]}
  
  # ${data.title}

  ## Description:

  ${data.description}

  ## Table of Contents
  ### [Installation Instructions:](#installation-instructions:)
  ### [Usage Information:](#usage-information:)
  ### [Contribution Guidelines:](#contribution-guidelines:)
  ### [Testing Instructions:](#testing-instructions:)
  ### [License:](#license:)
  ### [Questions:](#questions:)

  ## Installation Instructions:

  ${data.instructions}

  ## Usage Information:

  ${data.usage}

  ## Contribution Guidelines:

  ${data.contribution}

  ## Testing Instructions:

  ${data.test}

  ## License: ![badge]{https://img.shields.io/static/v1?label=license&message=${data.license}&color=blue}

  This project is using ${data.license}. For more information, click the badge.

  ## Questions:

  ### Please contact me if you have any questions:

  Find me on Github: http://www.github.com/${data.github}

  My Email is: ${data.email}
`;
}

module.exports = generateMarkdown;