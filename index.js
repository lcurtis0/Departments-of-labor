
const inquirer = require('inquirer');
const mysql = require('mysql2');
const { title } = require('process');



// This area is for functions 

const db = mysql.SQLconnect({
    host: 'localhost',
    user: 'root',
    password: '2Qu@5#3R$$',
    database: 'buisness_db'
});



Firstprompt(ToDo) {

    if (ToDo === 'add an employee') {
        inquirer
            .prompt = [{
            type: "input",
            name: "AddEmployees/firstname",
            message: "What is the first name of the new employee?"
        },
        {
            type: "input",
            name: "AddEmployees/lastname",
            message: "What is the last name of the new employee?"
        },
        {
            type: "input",
            name: "AddEmployees/salary",
            message: "What is the salary of the new employee?"
        },
        {
            type: "input",
            name: "AddEmployees/title",
            message: "What department role will they be working for?"
        },
    // name, salary, and department for the role and that role is added to the database
    ]
        .then(
            
            db.query(`INSERT INTO employee(first_name, last_name) VALUES (${answers.AddEmployees/firstname}, ${AddEmployees/lastname}, ${AddEmployees/salary}, ${AddEmployees/title})
            INSERT INTO role(title, salary)`))

            db.query(`SELECT employee.first_name, employee.last_name, role.salary, role.title 
            FROM employee
            JOIN role ON employee.role = role.id;`)
            

            console.log(`Added ${answers.AddEmployees/firstname} to database`);
            console.log("")
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


