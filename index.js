
const inquirer = require('inquirer');
const db = require("./db/connection.js");


// This area is for functions 


function Firstprompt(answers) {

    if (answers.likeToDo === 'add an employee') {
        inquirer
            .prompt = [{
                type: "input",
                name: "firstname",
                message: "What is the first name of the new employee?"
            },
            {
                type: "input",
                name: "lastname",
                message: "What is the last name of the new employee?"
            },
            {
                type: "input",
                name: "salary",
                message: "What is the salary of the new employee?"
            },
            {
                type: "input",
                name: "title",
                message: "What role will they be working for?"
            }
                // name, salary, and department for the role and that role is added to the database
            ]

            .then((employeeInfo)=>{
        db.query(`INSERT INTO role(title, salary) VALUES (${employeeInfo.title}, ${employeeInfo.salary}`)

        db.query(`INSERT INTO employee(first_name, last_name) VALUES (${employeeInfo.firstname}, ${employeeInfo.lastname}`)

        const print = db.query(`SELECT employee.first_name, employee.last_name, role.salary, role.title 
            FROM employee
            JOIN role ON employee.role = role.id;`)
    
        console.log(`Added ${employeeInfo.firstname} to database`);
        console.log(print);
    
        })

    }

    if (answers.likeToDo === 'add a department') {
        inquirer
            .prompt = [{
                type: "input",
                name: "AddDepartment",
                message: "what is the name of the new department?"
            }]
        db.query(connection.query(`INSERT INTO depertments(name) VALUES (${answers.AddDepartment})`),
            console.log(`Added ${answers.AddDepartment} to database`));
    }

    if (answers.likeToDo === 'update an employee role'){
        inquirer //select an employee to update and their new role
        .prompt = [{
            type: "input",
            name: "UpdateRole/name",
            message: "Input a new employee name?"
        },
        {
            type: "input",
            name: "UpdateRole/title",
            message: "Input a role to new employee?"
        }]

        db.query(`DELETE FROM role WHERE id = ? ${answers.UpdateRole/name}`);
        db.query(`DELETE FROM employee WHERE id = ? ${answers.UpdateRole/name}`);
            
        db.query(`SELECT role.
         VALUES (${AddEmployees / title}, ${AddEmployees / salary}`);
    }

};



//Add Employees



//Update employees role

//View all roles

//Add role

//View all departments

//add department


module.exports = connection;