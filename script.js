const inquirer = require('inquirer');
const fs = require("fs/promises");


const db = mysql.SQLconnect({
    host: 'localhost',
    user: 'root',
    password: '2Qu@5#3R$$',
    database: 'buisness_db'
});

//Add Employees

//Update employees role

//View all roles

//Add role

//View all departments 

//add department

inquirer
.prompt = [
    {
        type: "list", 
        name: "likeToDo",
        message: "What would you like to do?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: "list", 
        name: "AddEmployees",
        message: "?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
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
    {
        type: "list", 
        name: "AddDepartment",
        message: "?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
]


