// TODO: Include packages needed for this application
//file system
const fs = require('fs');
//inquire
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        //ask for username, name is just reference
        name: 'greeting',
        message: 'What would you like to say?',
        type: 'input'
    },
];
//print answer
inquirer
    .prompt(questions)
    .then(answers => {
       console.log(answers);
       writeToFile('README.md', answers);
    })

// TODO: Create a function to write README file
//brings 'answers' to README
function writeToFile(fileName, data) { 
    //readme gen
    const readmeData = `
# README

## Username
${data.greeting}
    `
    fs.writeFile(fileName, readmeData)
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
