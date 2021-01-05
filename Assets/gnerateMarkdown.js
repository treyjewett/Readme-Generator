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

  ## License: ${data.license[0]}

  This project is using ${data.license[1]}. For more information, click the badge.

  ## Questions:

  ### Please contact me if you have any questions:

  ${data.github}

  ${data.email}
`;
}

module.exports = generateMarkdown;