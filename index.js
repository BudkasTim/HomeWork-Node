const inquirer = require ("inquirer");
const fs = require ("fs");
const generateMarkdown = require ('./utils/generateMarkdown');

// array of questions for user
const questions = [
    { 
        type: "input",
        message: " Please, Enter project title. ",
        name:"title"
    },
    { 
        type: "input",
        message: " Please, Enter description of the project. ",
        name:"description"
    },
    { 
        type: "input",
        message: "Info about usage. ",
        name:"usage"
    },
    { 
        type: "input",
        message: "Please, Enter installation instruction. ",
        name:"installation"
    },
    { 
        type: "list",
        message: "What license have you used?  ",
        name:"license",
        choices:["MIT", "GPLv3","None"]
    },
    { 
        type: "input",
        message: "Please, Enter name(s) of contributors. ",
        name:"contributors"
    },
    { 
        type: "input",
        message: " Please, Enter your GitHub account. ",
        name:"github"
    }

];

// function to write README file
// fs.writeFile("README.md",)
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if(err) throw err;
        console.log('The file has been created !');
    })

}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(answers=>{
        const markDown= generateMarkdown(answers);
        writeToFile("Readme.md", markDown);
        
    })

}

// function call to initialize program
init();
