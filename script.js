const inquirer = require('inquirer');


//const fs = require("fs/promises");


function start(){

const ToDo = [
    {
        type: "list", 
        name: "likeToDo",
        message: "What would you like to do?",
        choices: ["view all departments", "view all roles", " view all employees", " add a department", "add a role", "add an employee", "update an employee role"]
    }
]

inquirer.prompt(ToDo)

.then((answers) => {
    console.log(`have selected ${answers.likeToDo}`);
    const edit = Firstprompt(answers);
    //writeToFile('.db/query', edit);
})
.catch((error) => {
    if (error) {
        console.log("Error caught: " + error);
    } else {
        console.log("Another type of error: perhaps did not answer questions correctly");
    }
});

};

start();



module.exports = ToDo;