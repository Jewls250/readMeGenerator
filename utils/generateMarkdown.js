// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}
  # ${data.introduction}
  # ${data.license}
`;
}

module.exports = generateMarkdown;
