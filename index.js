const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
  {
    type: "input",
    name: "projectName",
    message: "Name of project?",
  },
  {
    type: "input",
    name: "introduction",
    message: "Provide intoduction to project?",
  },
  {
    type: "list",
    name: "license",
    message: "What license would you like to use?",
    choices: ["Apache", "Boost", "BSD"]
},
];



// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });


}

// function to initialize program
function init() {
  let generatedMd ;
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, "  "));
        generatedMd = generateMarkdown(answers)
        writeToFile("README.md" , generatedMd)
    });


}

// function call to initialize program
init();
