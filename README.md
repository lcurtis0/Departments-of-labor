# Departments-of-labor


Plan of attack

Create functions for each question
 - each is triggered by answers given to the previous question i.e. department --> which department 
pseudocode:

express
function
if (answer.depart = education){
    db.query('SELECT ${education} FROM departments', function (err, results) {
  console.log(results);
})
}

/*GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role ✅

WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids ✅

WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role ✅

WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to ✅

WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database ✅

WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database ✅

WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database ✅

 make sure you are creating a database correctly using the schema.sql file ✅
4:04
after creating your database and sourcing it, you will need to seed the database correctly using a seed.sql file ✅
4:05
once your database is seeded correctly the next thing to do would be to create a mysql connection ✅
4:05
if set up correctly it will allow you to correctly connect to your newly created database ✅
4:05
once you have the connection set up you can then start working on the prompts

a good reference would be your module's miniproject
it shows the best practices when creating your project's folder and file setup

as well as the syntax needed to create a database and seed it
*/
