const inquirer = require('inquirer');

const likeToDo = require('index.js');

//const fs = require("fs/promises");


//Add Employees

//Update employees role

//View all roles

//Add role

//View all departments 

//add department

const ToDo = [
    {
        type: "list", 
        name: "likeToDo",
        message: "What would you like to do?",
        choices: ["view all departments", "view all roles", " view all employees", " add a department", "add a role", "add an employee", " and update an employee role"]
    }
]

inquirer.prompt(ToDo)

.then((answers) => {
    console.log(`have selected ${answers.ToDo}`);
    const edit = likeToDo(ToDo);
    //writeToFile('README.md', edit);
})
/*
    {
        type: "list", 
        name: "Viewallroles",
        message: "?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: "list", 
        name: "Addrole",
        message: "?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: "list", 
        name: "Viewalldepartments",
        message: "?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
]

.then((answers) => { //cannot start function until all answers are in (async + await)
    const markdown = generateMarkdown(answers);
*/


module.exports = ToDo;