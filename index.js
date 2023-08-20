
const inquirer = require('inquirer');
const mysql = require('mysql2');

// This area is for functions 

const db = mysql.SQLconnect({
    host: 'localhost',
    user: 'root',
    password: '2Qu@5#3R$$',
    database: 'buisness_db'
});

renderLicenseBadge(answers.license)

function likeToDo(answers.likeToDo) {

    if (answers.likeToDo === 'add an employee') {
        inquirer
            .prompt = {
            type: "input",
            name: "AddEmployees",
            message: "What is the name of the employee you would want to add?"
        }
        .then(
            db.query(`INSERT INTO employees(id, first_name, last_name,role_id,manager_id) VALUES (${answers.AddEmployees})`),
            console.log(`Added ${answers.AddEmployees} to database`));
    }


    if (answers.likeToDo === 'add a department') {
        inquirer
            .prompt = {
                type: "input",
                name: "AddDepartment",
                message: "what is the name of the new department?",
            }
                .then(
                    db.query(`INSERT INTO depertments(id, name) VALUES (${answers.AddDepartment})`),
                    console.log(`Added ${answers.AddDepartment} to database`));
    }

}



//Add Employees



//Update employees role

//View all roles

//Add role

//View all departments

//add department


module.exports = likeToDo;