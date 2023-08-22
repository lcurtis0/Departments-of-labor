const inquirer = require('inquirer');

const db = require("./db/connection.js");


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
    Firstprompt(answers);
})
.catch((error) => {
    if (error) {
        console.log("Error caught: " + error);
    } else {
        console.log("Another type of error: perhaps did not answer questions correctly");
    }
});

};


function Firstprompt(answers) {

    if (answers.likeToDo === 'add an employee') {
        inquirer
            .prompt ( [
            {
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
            ])

            .then((employeeAdd)=>{

                db.query('SELECT * FROM role, employee', function (err, results) {
                    db.query(`INSERT INTO role(title, salary, department_id) VALUES ('${employeeAdd.title}', ${employeeAdd.salary}, 6)`)

                    db.query(`INSERT INTO employee(first_name, last_name, role_id) VALUES ('${employeeAdd.firstname}', '${employeeAdd.lastname}', 6)`)
            
                    console.log(`Added ${employeeAdd.firstname} to database`);

                    console.log(results);
                  });
    
        })

    }

    if (answers.likeToDo === 'add a department') {
        inquirer
            .prompt = ([{
                type: "input",
                name: "name",
                message: "what is the name of the new department?"
            }])
            .then(departmentAdd)
        db.query(`INSERT INTO depertments(name) VALUES (${departmentAdd.name})`),
            console.log(`Added ${departmentAdd.name} to database`);
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

start();