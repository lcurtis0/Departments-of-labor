const inquirer = require('inquirer');
const cTable = require('console.table');

const db = require("./db/connection.js");



function start() {

    const ToDo = [
        {
            type: "list",
            name: "likeToDo",
            message: "What would you like to do?",
            choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
        }]

    inquirer.prompt(ToDo)

        .then((answers) => {
            console.log(`have selected ${answers.likeToDo}`);
            Firstprompt(answers);

            function Firstprompt(answers) {

                // To add an employee to table
                if (answers.likeToDo === 'add an employee') {
                    inquirer
                        .prompt([
                            { // Must input name 
                                type: "input",
                                name: "firstname",
                                message: "What is the first name of the new employee?"
                            },
                            { // Must input lastname 
                                type: "input",
                                name: "lastname",
                                message: "What is the last name of the new employee?"
                            },
                            { // Enters other info for row 
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

                        .then((employeeAdd) => {

                            console.log(`Added ${employeeAdd.name} to database`);
                            db.promise().query('SELECT * FROM role, employee').then(() => console.log("Added an employee"));
                            db.promise().query(`INSERT INTO role(title, salary, department_id) VALUES ('${employeeAdd.title}', ${employeeAdd.salary}, 6)`).then((newData) => console.log(newData));

                            db.promise().query(`INSERT INTO employee(first_name, last_name, role_id) VALUES ('${employeeAdd.firstname}', '${employeeAdd.lastname}', 6)`).then((newData) => {


                                const table = cTable.getTable(['employee']);

                                console.log(table);

                                console.table(newData[0]);

                                console.log(`Added an employee in database`);
                                console.log('------------------------------------------------');
                                return start();

                            })

                        });

                }

                if (answers.likeToDo === 'add a department') {
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "name",
                                message: "what is the name of the new department?"
                            }])
                        .then((departmentAdd) => {
                            console.log(`Added ${departmentAdd.name} to database`);
                            db.promise().query('SELECT name FROM department').then(() => console.log("added department"));
                            db.promise().query(`INSERT INTO department(name) VALUES ('${departmentAdd.name}')`).then((newData) => {



                                const table = cTable.getTable(['department']);

                                console.log(table);

                                console.table(newData[0]);

                                console.log(`Viewed departments in database`);
                                console.log('------------------------------------------------');
                                return start();
                            });
                        });

                }

                if (answers.likeToDo === 'add a role') {
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "name",
                                message: "what is the new role you would like to add?"
                            }])
                        .then((roleAdd) => {

                            db.promise().query('SELECT * FROM role', function (err, results) {
                                db.promise().query(`INSERT INTO role(name) VALUES ('${roleAdd.name}')`).then((newData) => {


                                    const table = cTable.getTable(['role']);

                                    console.log(table);

                                    console.table(newData[0]);

                                    console.log(`Added a role in database`);
                                    console.log('------------------------------------------------');
                                    return start();

                                })

                            });
                        });

                }

                if (answers.likeToDo === 'update an employee role') {
                    inquirer //select an employee to update and their new role
                        .prompt([{
                            type: "input",
                            name: "name",
                            message: "Input a new employee name?"
                        },
                        {
                            type: "input",
                            name: "title",
                            message: "Input a role to new employee?"
                        }])
                        .then((UpdateRole) => {

                            db.promise().query('SELECT * FROM department, role, employee', function (err, results) {

                                db.promise().query(`DELETE FROM role WHERE id = ? '${UpdateRole.name}'`);
                                db.promise().query(`DELETE FROM employee WHERE id = ? '${UpdateRole.title}'`);

                                db.promise().query(`INTO role(name) VALUES ('${UpdateRole.name}')`).then((newData) => console.log("updated name"));
                                db.promise().query(`INTO employee(title) VALUES ('${UpdateRole.title}')`).then((newData) => {

                                    console.log(`Added ${UpdateRole.name} with ${UpdateRole.title} to database`);

                                    const table = cTable.getTable(['department']);

                                    console.log(table);

                                    console.table(newData[0]);

                                    console.log(`Updated an employee role in database`);
                                    console.log('------------------------------------------------');
                                    return start();
                                })
                            });
                        });

                    return start();
                }

                if (answers.likeToDo === 'view all departments') {
                    db.promise().query('SELECT * FROM department').then((newData) => {

                        const table = cTable.getTable(['department']);

                        console.log(table);

                        console.table(newData[0]);

                        console.log(`Veiwed all departments in database`);
                        console.log('------------------------------------------------');
                        return start();
                    })
                }

                if (answers.likeToDo === 'view all roles') {
                    db.promise().query('SELECT * FROM role').then((newData) => {


                        const table = cTable.getTable(['role']);

                        console.log(table);

                        console.table(newData[0]);

                        console.log(`Viewed roles in database`);
                        console.log('------------------------------------------------');
                        return start();
                    })

                }

                if (answers.likeToDo === 'view all employees') {
                    db.promise().query('SELECT * FROM employee').then((newData) => {

                        const table = cTable.getTable(['employee']);

                        console.log(table);

                        console.table(newData[0]);

                        console.log(`Viewed employees in database`);
                        console.log('------------------------------------------------');
                        return start();

                    })

                }

            }
        })


        .catch((error) => {
            if (error) {
                console.log("Error caught" + error);
            } else {
                console.log("Another type of error: perhaps did not answer questions correctly");
            }

        });

}

start();

